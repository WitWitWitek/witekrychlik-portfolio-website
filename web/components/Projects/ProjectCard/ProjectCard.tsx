import {
  Button,
  CardContent,
  CardTitle,
  Card,
} from '@witekrychlik/ui-components';
import { Project } from '../../../types';
import Link from 'next/link';
import Image from 'next/image';
import { GitHubLogoIcon } from '@radix-ui/react-icons';

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const { title, coverImage, description, github, slug } = project;
  return (
    <Card className="bg-transparent text-secondary overflow-hidden flex flex-col gap-6">
      <CardTitle className="relative h-[200px] w-full">
        <Image src={coverImage} alt={title} fill className="object-cover" />
      </CardTitle>
      <CardContent className="grow flex flex-col justify-between gap-3 lg:gap-5">
        <h3 className="text-3xl lg:text-3xl tracking-wider font-extrabold">
          {title}
        </h3>
        <p>{description.substring(0, 200)}</p>
        <div className="flex flex-row gap-3 lg:gap-5">
          {github && (
            <Button asChild variant="default" className="grow linear-gradient">
              <Link
                href={github}
                className="flex flex-row gap-1"
                target="_blank"
              >
                <GitHubLogoIcon />
                GitHub
              </Link>
            </Button>
          )}
          <Button asChild variant="secondary" className="grow">
            <Link href={`/projekty/${slug}`}>Więcej</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
