import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Tiles';

export const metadata: Metadata = {
  title: "You're all set — My Biz Mailbox",
  description: 'Your My Biz Mailbox subscription is active. Check your email for next steps.',
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <>
      <Nav />
      <section className="w-section dark tall" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
        <div className="w-section-inner">
          <div className="w-hero-eyebrow">My Biz Mailbox</div>
          <h1 className="w-hero-title">You&rsquo;re all set.</h1>
          <p className="w-hero-sub">
            Welcome to My Biz Mailbox. Check your email for next steps.
          </p>
          <div className="w-cta-row">
            <a className="w-cta-pill outline" href="/">Back to home ›</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
