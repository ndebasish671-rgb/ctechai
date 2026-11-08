import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container listing not-found">
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <Link href="/" className="button">
        Back to the homepage
      </Link>
    </div>
  );
}
