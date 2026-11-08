import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { searchArticles } from '@/lib/content';

export const metadata: Metadata = { title: 'Search' };

interface Props {
  searchParams: Promise<{ q?: string | string[] }>;
}

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q) ?? '';
  const results = searchArticles(query);

  return (
    <div className="container listing">
      <header className="listing-header">
        <h1>Search</h1>
        <form action="/search" method="get" className="search search-page">
          <label htmlFor="search-page-input" className="sr-only">
            Search
          </label>
          <input
            id="search-page-input"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Search reviews, news, guides…"
          />
          <button type="submit">Search</button>
        </form>
      </header>

      {!query.trim() ? (
        <p className="empty">Enter a product, brand, or topic to find articles.</p>
      ) : results.length === 0 ? (
        <p className="empty">
          No results for “{query}”. Try a broader term like “laptop” or “review”.
        </p>
      ) : (
        <>
          <p className="result-count">
            {results.length} result{results.length === 1 ? '' : 's'} for “{query}”
          </p>
          <div className="grid-3">
            {results.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
