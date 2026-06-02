import BackgroundEffects from '@/components/backgrounds/backgroundEffects';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { Marquee } from '@/components/marquee';
import About from '@/components/sections/about';
import Guestbook from '@/components/sections/guestbook';
import Hero from '@/components/sections/hero';
import Projects from '@/components/sections/projects';

export default function Home() {
  // Background effects can be enabled explicitly by setting
  // NEXT_PUBLIC_DISABLE_BG=0 or NEXT_PUBLIC_ENABLE_BG=1. By default
  // keep effects disabled to avoid heavy rendering during development.
  const disableBg = process.env.NEXT_PUBLIC_DISABLE_BG
    ? process.env.NEXT_PUBLIC_DISABLE_BG === '1'
    : true;

  return (
    <>
      <Header />
      {!disableBg && <BackgroundEffects />}
      <main className="relative">
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <Marquee text="lets code lets cook" />

        <section id="projects">
          <Projects />
        </section>

        <section id="guestbook">
          <Guestbook />
        </section>
      </main>
      <Footer />
    </>
  );
}
