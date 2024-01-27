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
import { GitHubLogoIcon } from '@radix-ui/react-icons';

async function getProjectsData() {
  const query = `*[_type == 'projects'] {
    title,
    description,
    github,
    "slug": slug.current,
    coverImage
  }`;

  const projectsData = await client.fetch(query);
  return projectsData;
}

export const revalidate = 30;

export default async function ProjectsPage() {
  const projects: Project[] = await getProjectsData();
  return (
    <Section>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-secondary mb-12 sm:mb-16 lg:mb-20">
        Projekty:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="bg-transparent text-secondary overflow-hidden flex items-start gap-6 flex-col justify-between mt-5"
          >
            <CardTitle className="relative h-[200px] w-full">
              <Image
                src={urlFor(project.coverImage).url()}
                alt={project.title}
                fill
                className="object-cover"
              />
            </CardTitle>
            <CardContent className="flex flex-col gap-3 lg:gap-5">
              <h3 className="text-3xl lg:text-3xl tracking-wider font-extrabold">
                {project.title}
              </h3>
              <p>{project.description.substring(0, 200) + '...'}</p>
              <div className="flex flex-row gap-3 lg:gap-5">
                {project.github && (
                  <Button
                    asChild
                    variant="default"
                    className="grow linear-gradient"
                  >
                    <Link href={project.github} className="flex flex-row gap-1">
                      <GitHubLogoIcon />
                      GitHub
                    </Link>
                  </Button>
                )}
                <Button asChild variant="secondary" className="grow">
                  <Link href={`/projekty/${project.slug}`}>Więcej</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
