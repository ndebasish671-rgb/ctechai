import Link from 'next/link';

interface SectionHeaderProps {
  title: string;
  href?: string;
  linkLabel?: string;
}

export default function SectionHeader({ title, href, linkLabel = 'See all' }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      {href && (
        <Link href={href} className="section-link">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}
