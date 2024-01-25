import { FullProject } from '../../../../types';
import { client, urlFor } from '../../../../lib/sanity';
import { Button, Section } from '@witekrychlik/ui-components';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

type ArticlePageProps = { params: { slug: string } };

async function getArticleData(slug: string) {
  const query = `
      *[_type == "projects" && slug.current == '${slug}'] {
          "slug": slug.current,
            title,
            content,
            coverImage,
        }[0]`;

  const articleData = await client.fetch(query);
  return articleData;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article: FullProject = await getArticleData(params.slug);
  return (
    <Section className="grid gap-3 lg:gap-5">
      <div className="relative w-full h-[200px] lg:h-[300px] rounded overflow-hidden">
        <Image
          src={urlFor(article.coverImage).url()}
          fill
          alt={article.title}
          priority
          className="object-cover"
        />
      </div>
      <h1 className="text-secondary text-5xl">{article.title}</h1>
      <div className="w-full prose prose-blue prose-lg prose-headings:text-secondary text-secondary text-justify">
        <PortableText value={article.content} />
      </div>
      <Button asChild variant="secondary">
        <Link href="/projects">Powrót</Link>
      </Button>
    </Section>
  );
}
