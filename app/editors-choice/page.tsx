import type { Metadata } from 'next';
import ArticleCard from '@/components/ArticleCard';
import { editorsChoice } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Editors’ Choice',
  description: 'The products our editors recommend above all others.',
};

export default function EditorsChoicePage() {
  const picks = editorsChoice();
  return (
    <div className="container listing">
      <header className="listing-header">
        <h1>Editors’ Choice</h1>
        <p>Products our editors tested and recommend above the rest. Picks are re-tested before any award is renewed.</p>
      </header>
      <div className="grid-3">
        {picks.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>
    </div>
  );
}
