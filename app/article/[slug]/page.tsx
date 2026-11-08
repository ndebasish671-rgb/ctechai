import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Thumb from '@/components/Thumb';
import RatingBadge from '@/components/RatingBadge';
import ArticleCard from '@/components/ArticleCard';
import {
  ALL_ARTICLES,
  articlesInCategory,
  categoryName,
  formatDate,
  getArticle,
  getSection,
} from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.title, description: article.dek };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const section = getSection(article.section);
  const related = articlesInCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <article className="container article">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> ›{' '}
        <Link href={`/${article.section}`}>{section?.name}</Link> ›{' '}
        <Link href={`/category/${article.category}`}>{categoryName(article.category)}</Link>
      </nav>

      <header className="article-header">
        <h1>{article.title}</h1>
        <p className="article-dek">{article.dek}</p>
        <div className="byline">
          <span className="author">By {article.author}</span>
          <span>{formatDate(article.date)}</span>
          <span>{article.readMinutes} min read</span>
        </div>
      </header>

      <div className="article-hero">
        <Thumb article={article} size="lg" />
      </div>

      <div className="article-layout">
        <div className="article-body">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {article.rating !== undefined && (
          <aside className="verdict-box" aria-label="Verdict">
            <div className="verdict-label">Our Verdict</div>
            <div className="verdict-score">{article.rating.toFixed(1)}</div>
            <RatingBadge rating={article.rating} editorsChoice={article.editorsChoice} />
            {article.price && <div className="verdict-price">Price: {article.price}</div>}
            {article.verdict && <p>{article.verdict}</p>}
            {article.pros && article.pros.length > 0 && (
              <>
                <h3>Pros</h3>
                <ul className="pros">
                  {article.pros.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </>
            )}
            {article.cons && article.cons.length > 0 && (
              <>
                <h3>Cons</h3>
                <ul className="cons">
                  {article.cons.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </>
            )}
          </aside>
        )}
      </div>

      {related.length > 0 && (
        <section className="block">
          <h2 className="section-title">More in {categoryName(article.category)}</h2>
          <div className="grid-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
