import Link from 'next/link';
import { CATEGORIES, SECTIONS } from '@/lib/content';

export default function Header() {
  return (
    <header className="site-header">
      <div className="topbar">
        <div className="container topbar-inner">
          <Link href="/" className="logo" aria-label="CTechAI home">
            CTech<span>AI</span>
          </Link>
          <form action="/search" method="get" className="search" role="search">
            <label htmlFor="site-search" className="sr-only">
              Search reviews and news
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Search reviews, news, guides…"
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </form>
          <Link href="/editors-choice" className="ec-link">
            Editors’ Choice
          </Link>
        </div>
      </div>
      <nav className="mainnav" aria-label="Primary">
        <div className="container mainnav-inner">
          {SECTIONS.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`}>
              {s.name}
            </Link>
          ))}
          <details className="dropdown">
            <summary>Categories</summary>
            <div className="dropdown-menu">
              {CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`}>
                  {c.name}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
