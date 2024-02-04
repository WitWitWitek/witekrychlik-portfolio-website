import { Project } from '../../types';
import { urlFor } from '../../lib/sanity';
import { Section } from '@witekrychlik/ui-components';
import { getProjectsData } from '../../lib/sanity-actions';
import ProjectCard from './ProjectCard/ProjectCard';

export default async function Projects() {
  const projects: Project[] = await getProjectsData();
  return (
    <Section>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary mb-12 sm:mb-16 lg:mb-20">
        Projekty:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={{
              ...project,
              coverImage: urlFor(project.coverImage).url(),
            }}
          />
        ))}
      </div>
    </Section>
  );
}
