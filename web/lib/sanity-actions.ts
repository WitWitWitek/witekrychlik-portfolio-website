import { Project, FullProject } from '../types';
import { client } from './sanity';

export async function getProjectsData(): Promise<Project[]> {
  const query = `*[_type == "projects"] | order(releaseDate desc) {
      title,
      description,
      github,
      "slug": slug.current,
      coverImage
    }`;

  const projectsData = await client.fetch(query);
  return projectsData;
}

export async function getArticleData(slug: string): Promise<FullProject> {
  const query = `
        *[_type == "projects" && slug.current == '${slug}'] {
            "slug": slug.current,
              title,
              description,
              content,
              coverImage,
              live,
              github,
          }[0]`;

  const articleData = await client.fetch(query);
  return articleData;
}
