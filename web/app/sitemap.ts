import { MetadataRoute } from 'next';
import { routes } from '../constants';
import { client } from '../lib/sanity';

const BASE_URL = 'https://witoldychlik.com.pl';

async function getProjects(): Promise<{ slug: string }[]> {
  const query = `*[_type == 'projects'] {
      "slug": slug.current,
    }`;

  const projectsData = await client.fetch(query);
  return projectsData;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesXML: MetadataRoute.Sitemap = routes.map((route, i) => ({
    url: `${BASE_URL}${route.target}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: i === 0 ? 1 : 0.75,
  }));

  const slugs = await getProjects();
  const slugsXML: MetadataRoute.Sitemap = slugs.map((slug, i) => ({
    url: `${BASE_URL}/projekty/${slug.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    ...routesXML,
    {
      url: `${BASE_URL}/kontakt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...slugsXML,
  ];
}
