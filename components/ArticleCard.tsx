import Link from 'next/link';
import type { Article } from '@/lib/content';
import { articlePath, categoryName, formatDate, sectionName } from '@/lib/content';
import Thumb from './Thumb';
import RatingBadge from './RatingBadge';

interface ArticleCardProps {
  article: Article;
  variant?: 'card' | 'row' | 'hero' | 'compact';
  /** Heading level for hero variant. Use h1 only once per page. */
  headingLevel?: 'h1' | 'h2';
}

export default function ArticleCard({ article, variant = 'card', headingLevel = 'h2' }: ArticleCardProps) {
  const href = articlePath(article);
  const kicker = (
    <span className="kicker">
      {article.section === 'reviews' ? 'Review' : sectionName(article.section)}
      {' · '}
      {categoryName(article.category)}
    </span>
  );

  if (variant === 'compact') {
    return (
      <article className="card-compact">
        <Link href={href} className="card-compact-link">
          {article.title}
        </Link>
        <div className="meta">
          {article.author} · {formatDate(article.date)}
        </div>
      </article>
    );
  }

  if (variant === 'hero') {
    return (
      <article className="hero-card">
        <Link href={href} className="hero-thumb-link" aria-label={article.title}>
          <Thumb article={article} size="lg" />
        </Link>
        <div className="hero-body">
          {kicker}
          {headingLevel === 'h1' ? (
            <h1>
              <Link href={href}>{article.title}</Link>
            </h1>
          ) : (
            <h2>
              <Link href={href}>{article.title}</Link>
            </h2>
          )}
          <p className="dek">{article.dek}</p>
          {article.rating !== undefined && (
            <RatingBadge rating={article.rating} editorsChoice={article.editorsChoice} />
          )}
          <div className="meta">
            By {article.author} · {formatDate(article.date)} · {article.readMinutes} min read
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'row') {
    return (
      <article className="row-card">
        <Link href={href} className="row-thumb-link" aria-label={article.title}>
          <Thumb article={article} size="sm" />
        </Link>
        <div className="row-body">
          {kicker}
          <h3>
            <Link href={href}>{article.title}</Link>
          </h3>
          <div className="meta">
            {article.author} · {formatDate(article.date)}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="card">
      <Link href={href} className="card-thumb-link" aria-label={article.title}>
        <Thumb article={article} size="md" />
      </Link>
      <div className="card-body">
        {kicker}
        <h3>
          <Link href={href}>{article.title}</Link>
        </h3>
        <p className="dek">{article.dek}</p>
        {article.rating !== undefined && (
          <RatingBadge rating={article.rating} editorsChoice={article.editorsChoice} />
        )}
        <div className="meta">
          {article.author} · {formatDate(article.date)}
        </div>
      </div>
    </article>
  );
}
