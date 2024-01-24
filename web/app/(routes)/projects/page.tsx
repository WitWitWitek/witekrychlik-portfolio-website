import { Project } from '../../../types';
import { client } from '../../../lib/sanity';

async function getProjectsData() {
  const query = `*[_type == 'projects'] {
    title,
    description,
    "slug": slug.current,
    coverImage
  }`;

  const projectsData = await client.fetch(query);
  return projectsData;
}

export default async function ProjectsPage() {
  const data: Project[] = await getProjectsData();
  return <div>page</div>;
}
