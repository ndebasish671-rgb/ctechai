import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import SectionHeader from '@/components/SectionHeader';
import Thumb from '@/components/Thumb';
import RatingBadge from '@/components/RatingBadge';
import {
  ALL_ARTICLES,
  CATEGORIES,
  articlePath,
  articlesInSection,
  categoryName,
  editorsChoice,
  featuredArticle,
  formatDate,
} from '@/lib/content';

export default function HomePage() {
  const featured = featuredArticle();
  const latestNews = articlesInSection('news')
    .filter((a) => a.slug !== featured.slug)
    .slice(0, 4);
  const reviews = articlesInSection('reviews').slice(0, 3);
  const ec = editorsChoice().slice(0, 4);
  const best = articlesInSection('best');
  const latest = ALL_ARTICLES.filter((a) => a.slug !== featured.slug).slice(0, 4);

  return (
    <>
      <section className="container home-hero">
        <div className="hero-main">
          <ArticleCard article={featured} variant="hero" headingLevel="h1" />
        </div>
        <aside className="hero-side">
          <h2 className="side-title">Top Stories</h2>
          {latest.map((a) => (
            <ArticleCard key={a.slug} article={a} variant="row" />
          ))}
        </aside>
      </section>

      <section className="container block">
        <SectionHeader title="Editors’ Choice" href="/editors-choice" linkLabel="All Editors’ Choice" />
        <div className="ec-strip">
          {ec.map((a) => (
            <Link key={a.slug} href={articlePath(a)} className="ec-item">
              <div className="ec-item-thumb">
                <Thumb article={a} size="sm" />
              </div>
              <div>
                <div className="kicker">{categoryName(a.category)}</div>
                <div className="ec-item-title">{a.title.split(':')[0]}</div>
                {a.rating !== undefined && <RatingBadge rating={a.rating} />}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container block two-col">
        <div>
          <SectionHeader title="Latest Reviews" href="/reviews" />
          <div className="grid-3">
            {reviews.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
        <div>
          <SectionHeader title="Breaking News" href="/news" />
          <div className="news-list">
            {latestNews.map((a) => (
              <ArticleCard key={a.slug} article={a} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      <section className="container block">
        <SectionHeader title="Best Products" href="/best" />
        <div className="grid-3">
          {best.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="container block">
        <SectionHeader title="Shop by Category" />
        <div className="category-grid">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="category-tile"
              style={{ background: `linear-gradient(135deg, ${c.hue[0]}, ${c.hue[1]})` }}
            >
              <span className="category-name">{c.name}</span>
              <span className="category-desc">{c.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container block newsletter">
        <div>
          <h2>Get the CTechAI Weekly</h2>
          <p>The week’s best reviews, deals worth your money, and the stories that matter in tech.</p>
        </div>
        <form className="newsletter-form" action="/about#contact">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input id="email" type="email" name="email" placeholder="you@example.com" required />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <p className="container updated">Last updated {formatDate(latest[0]?.date ?? featured.date)}</p>
    </>
  );
}
