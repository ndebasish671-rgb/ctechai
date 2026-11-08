import Link from 'next/link';
import { CATEGORIES, SECTIONS } from '@/lib/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="logo logo-light">
            CTech<span>AI</span>
          </div>
          <p className="footer-about">
            Independent, hands-on reviews and clear buying advice for the tech you actually use.
          </p>
        </div>
        <div>
          <h4>Sections</h4>
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Categories</h4>
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/category/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about">About CTechAI</Link>
            </li>
            <li>
              <Link href="/about#ethics">Review policy</Link>
            </li>
            <li>
              <Link href="/about#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        © {new Date().getFullYear()} CTechAI. Sample content for demonstration; products are fictional.
      </div>
    </footer>
  );
}
