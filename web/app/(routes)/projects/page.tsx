import { Project } from '../../../types';
import { client, urlFor } from '../../../lib/sanity';
import {
  Button,
  CardContent,
  CardTitle,
  Section,
} from '@witekrychlik/ui-components';
import { Card } from '@witekrychlik/ui-components';
import Link from 'next/link';
import Image from 'next/image';

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
  const projects: Project[] = await getProjectsData();
  return (
    <Section>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary mb-12 sm:mb-16 lg:mb-20">
        Projekty:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="bg-transparent text-secondary overflow-hidden"
          >
            <CardTitle className="relative h-[200px] w-full">
              <Image
                src={urlFor(project.coverImage).url()}
                alt={project.title}
                fill
                className="object-cover"
              />
            </CardTitle>
            <CardContent>
              <h3 className="mt-5">{project.title}</h3>
              <p>{project.description}</p>
              <Button asChild variant="secondary" className="mt-5">
                <Link href="/projects">GitHub</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
