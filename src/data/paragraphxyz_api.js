// paragraphxyz_api.js

// Fetch with a hard per-request timeout so a slow/hanging gateway can never
// stall the build. Aborts after `timeoutMs` and throws, letting the existing
// try/catch fallbacks take over.
async function fetchWithTimeout(resource, options = {}, timeoutMs = 6000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(resource, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

export async function fetchParagraphPosts() {
  try {
    // Try goldsky API
    const response = await fetchWithTimeout("https://arweave-search.goldsky.com/graphql", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query GetParagraphPosts {
            transactions(
              tags: [
                { name: "AppName", values: ["Paragraph"] },
                { name: "PublicationSlug", values: ["@tshr.io"] }
              ],
              sort: HEIGHT_DESC,
              first: 7
            ) {
              edges {
                node {
                  id
                }
              }
            }
          }
        `
      })
    });

    const data = await response.json();

    if (data.data?.transactions?.edges) {
      // Get content for all transactions with multiple gateway fallbacks
      const posts = await Promise.all(
        data.data.transactions.edges.map(async ({ node }) => {
          try {
            // Try arweave.dev first
            const contentResponse = await fetchWithTimeout(`https://arweave.dev/${node.id}`);
            if (contentResponse.ok) {
              return await contentResponse.json();
            }

            // Try g8way.io if first fails
            const g8wayResponse = await fetchWithTimeout(`https://g8way.io/${node.id}`);
            if (g8wayResponse.ok) {
              return await g8wayResponse.json();
            }

            // Try arweave.net as last resort
            const arweaveResponse = await fetchWithTimeout(`https://arweave.net/${node.id}`);
            if (arweaveResponse.ok) {
              return await arweaveResponse.json();
            }

            // If all gateways fail, return placeholder data
            console.error(`Failed to fetch content for transaction ${node.id}`);
            return {
              title: 'Post Temporarily Unavailable',
              subtitle: 'Please try again later',
              publishedAt: new Date().toISOString(),
              slug: '#'
            };
          } catch (error) {
            console.error(`Error fetching content for ${node.id}:`, error);
            return {
              title: 'Error Loading Post',
              subtitle: 'Please try again later',
              publishedAt: new Date().toISOString(),
              slug: '#'
            };
          }
        })
      );

      // Filter out any failed posts but ensure we return at least an empty array
      return posts.filter(post => post.title !== 'Error Loading Post') || [];
    }

    console.error('No posts found in initial query');
    return [];

  } catch (error) {
    console.error('Error in fetchParagraphPosts:', error);
    return [];
  }
 }
