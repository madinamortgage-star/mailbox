import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Tiles';

export const metadata: Metadata = {
  title: 'No worries — My Biz Mailbox',
  description: "Your plan wasn't activated. Ready when you are.",
  robots: { index: false, follow: false },
};

export default function CancelPage() {
  return (
    <>
      <Nav />
      <section className="w-section light tall" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="w-section-inner">
          <h1 className="w-hero-title" style={{ color: '#1d1d1f' }}>No worries.</h1>
          <p className="w-hero-sub" style={{ color: 'rgba(29,29,31,0.8)' }}>
            Your plan wasn&rsquo;t activated. Ready when you are.
          </p>
          <div className="w-cta-row">
            <a className="w-cta-pill filled" href="/#pricing">View plans again ›</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
