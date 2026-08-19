import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const site = new URL(import.meta.env.SITE ?? 'https://dev-ton.github.io');
  const sitemapUrl = new URL(`${import.meta.env.BASE_URL}sitemap.xml`, site).href;

  return new Response(`User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
