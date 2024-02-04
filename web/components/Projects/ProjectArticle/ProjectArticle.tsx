import { Button, Section } from '@witekrychlik/ui-components';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
import { FullProject } from '../../../types';

type Props = {
  article: FullProject;
};

export default function ProjectArticle({ article }: Props) {
  const { title, coverImage, live, github, content } = article;
  return (
    <Section className="w-full md:w-[70%] grid gap-3 lg:gap-5 justify-items-center m-auto">
      <h1 className="text-secondary text-4xl md:text-6xl m-auto text-center">
        {title}
      </h1>
      <div className="relative w-full aspect-video rounded overflow-hidden">
        <Image
          src={coverImage}
          fill
          alt={title}
          priority
          className="object-cover"
        />
      </div>

      {(live || github) && (
        <div className="flex flex-row gap-3 lg:gap-5">
          {github && (
            <Button asChild variant="secondary">
              <Link
                href={github}
                target="_blank"
                className="flex flex-row gap-1"
              >
                <GitHubLogoIcon />
                GitHub
              </Link>
            </Button>
          )}
          {live && (
            <Button asChild variant="secondary">
              <Link href={live} target="_blank" className="flex flex-row gap-1">
                {' '}
                <GlobeIcon />
                Live
              </Link>
            </Button>
          )}
        </div>
      )}
      <div className="prose prose-white w-full max-w-none prose-lg text-justify m-auto">
        <PortableText value={content} />
      </div>
      <Button asChild variant="secondary" className="w-full">
        <Link href="/projekty">Powrót</Link>
      </Button>
    </Section>
  );
}
