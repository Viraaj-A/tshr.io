// paragraphxyz_api.js
export async function fetchParagraphPosts() {
  try {
    // Try goldsky API
    const response = await fetch("https://arweave-search.goldsky.com/graphql", {
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
            const contentResponse = await fetch(`https://arweave.dev/${node.id}`);
            if (contentResponse.ok) {
              return await contentResponse.json();
            }
            
            // Try g8way.io if first fails
            const g8wayResponse = await fetch(`https://g8way.io/${node.id}`);
            if (g8wayResponse.ok) {
              return await g8wayResponse.json();
            }
 
            // Try arweave.net as last resort
            const arweaveResponse = await fetch(`https://arweave.net/${node.id}`);
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