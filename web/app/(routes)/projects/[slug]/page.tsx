import { FullProject } from '../../../../types';
import { client } from '../../../../lib/sanity';

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
  return <div>page</div>;
}
