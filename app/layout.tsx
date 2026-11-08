import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'CTechAI — Tech Reviews, News & Buying Guides',
    template: '%s | CTechAI',
  },
  description:
    'Hands-on reviews, breaking tech news, and expert buying guides for laptops, phones, TVs, audio, gaming, smart home, and software.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
