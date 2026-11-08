import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleCard from '@/components/ArticleCard';
import { SECTIONS, articlesInSection, getSection, type SectionSlug } from '@/lib/content';

interface Props {
  params: Promise<{ section: string }>;
}

export function generateStaticParams() {
  return SECTIONS.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section } = await params;
  const s = getSection(section);
  if (!s) return {};
  return { title: s.name, description: s.description };
}

export default async function SectionPage({ params }: Props) {
  const { section } = await params;
  const s = getSection(section);
  if (!s) notFound();

  const articles = articlesInSection(s.slug as SectionSlug);
  const [lead, ...rest] = articles;

  return (
    <div className="container listing">
      <header className="listing-header">
        <h1>{s.name}</h1>
        <p>{s.description}</p>
      </header>

      {articles.length === 0 ? (
        <p className="empty">No articles yet. Check back soon.</p>
      ) : (
        <>
          <div className="listing-lead">
            <ArticleCard article={lead} variant="hero" />
          </div>
          <div className="grid-3">
            {rest.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
