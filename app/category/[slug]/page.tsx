import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import { CATEGORIES, articlesInCategory, getCategory } from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) return {};
  return { title: c.name, description: c.description };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const articles = articlesInCategory(category.slug);

  return (
    <div className="container listing">
      <header className="listing-header" style={{ borderTopColor: category.hue[0] }}>
        <h1>{category.name}</h1>
        <p>{category.description}</p>
      </header>
      {articles.length === 0 ? (
        <p className="empty">No articles in this category yet.</p>
      ) : (
        <div className="grid-3">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}
