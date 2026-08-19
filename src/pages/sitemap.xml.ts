import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const site = new URL(import.meta.env.SITE ?? 'https://dev-ton.github.io');
  const homeUrl = new URL(import.meta.env.BASE_URL, site).href;

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${homeUrl}</loc>
  </url>
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
