// src/pages/api/paragraph-posts.ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  console.log('🟢 API endpoint called');
  
  try {
    const query = `
      query GetParagraphPosts {
        transactions(
          tags: [
            { name: "AppName", values: ["Paragraph"] },
            { name: "PublicationSlug", values: ["@tshr.io"] }
          ],
          sort: HEIGHT_DESC,
          first: 3
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    `;

    console.log('🟡 Making fetch request to arweave...');

    const response = await fetch('https://arweave.net/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    console.log('🟣 Response status:', response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('🔴 Detailed error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};