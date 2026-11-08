import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About CTechAI, our review policy, and how to contact us.',
};

export default function AboutPage() {
  return (
    <div className="container prose">
      <h1>About CTechAI</h1>
      <p>
        CTechAI publishes hands-on reviews, news, and buying guides for consumer technology. Our goal is
        simple: help you spend your money on things that work well and last.
      </p>

      <h2 id="ethics">Review policy</h2>
      <p>
        Every review is based on testing with the product in regular use, not just a spec sheet. Manufacturers
        cannot pay for a higher score, and we disclose any affiliate relationships on the pages where they
        apply. When a product is updated, we re-test it before changing its rating.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Send tips, corrections, and press inquiries to <a href="mailto:hello@example.com">hello@example.com</a>.
      </p>

      <p className="note">
        Note: this site currently uses sample content. Brands, products, and reviews are fictional.
      </p>
    </div>
  );
}
