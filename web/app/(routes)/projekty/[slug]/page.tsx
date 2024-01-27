import { FullProject } from '../../../../types';
import { client, urlFor } from '../../../../lib/sanity';
import { Button, Section } from '@witekrychlik/ui-components';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons';
type ArticlePageProps = { params: { slug: string } };

async function getArticleData(slug: string) {
  const query = `
      *[_type == "projects" && slug.current == '${slug}'] {
          "slug": slug.current,
            title,
            content,
            coverImage,
            live,
            github,
        }[0]`;

  const articleData = await client.fetch(query);
  return articleData;
}

export const revalidate = 60000;

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article: FullProject = await getArticleData(params.slug);
  return (
    <Section className="grid gap-3 lg:gap-5 justify-items-center">
      <div className="relative w-full lg:w-[55%] h-[200px] lg:h-[300px] rounded overflow-hidden">
        <Image
          src={urlFor(article.coverImage).url()}
          fill
          alt={article.title}
          priority
          className="object-cover"
        />
      </div>
      <h1 className="text-secondary text-7xl m-auto">{article.title}</h1>
      {(article.live || article.github) && (
        <div className="flex flex-row gap-3 lg:gap-5">
          {article.github && (
            <Button asChild variant="secondary">
              <Link
                href={article.github}
                target="_blank"
                className="flex flex-row gap-1"
              >
                <GitHubLogoIcon />
                GitHub
              </Link>
            </Button>
          )}
          {article.live && (
            <Button asChild variant="secondary">
              <Link
                href={article.live}
                target="_blank"
                className="flex flex-row gap-1"
              >
                {' '}
                <GlobeIcon />
                Live
              </Link>
            </Button>
          )}
        </div>
      )}
      <div className="prose prose-white prose-lg text-justify m-auto">
        <PortableText value={article.content} />
      </div>
      <Button asChild variant="secondary" className="w-full lg:w-[55%]">
        <Link href="/projekty">Powrót</Link>
      </Button>
    </Section>
  );
}
