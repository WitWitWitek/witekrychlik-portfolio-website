import { ArticlePageProps } from '../../../../types';
import { urlFor } from '../../../../lib/sanity';
import type { Metadata } from 'next';
import { MetadataEnum } from '../../../../constants';
import { getArticleData } from '../../../../lib/sanity-actions';
import ProjectArticle from '../../../../components/Projects/ProjectArticle/ProjectArticle';

export const revalidate = 900;

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const project = await getArticleData(params.slug);

  return {
    title: `${MetadataEnum.title} | ${project.title}`,
    description: project.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleData(params.slug);
  return (
    <ProjectArticle
      article={{ ...article, coverImage: urlFor(article.coverImage).url() }}
    />
  );
}
