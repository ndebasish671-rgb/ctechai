import type { Article } from '@/lib/content';
import { categoryName } from '@/lib/content';

interface ThumbProps {
  article: Pick<Article, 'hue' | 'category' | 'title'>;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Placeholder image: a gradient tile tinted to the article's category.
 * Swap for a real <Image> once article photography is available.
 */
export default function Thumb({ article, size = 'md' }: ThumbProps) {
  const [from, to] = article.hue;
  return (
    <div
      className={`thumb thumb-${size}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      role="img"
      aria-label={`${categoryName(article.category)} illustration`}
    >
      <span className="thumb-label">{categoryName(article.category)}</span>
    </div>
  );
}
