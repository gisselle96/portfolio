import {
  About,
  Contact,
  Hero,
  Projects,
  Skills,
} from "@/features/home";
import { SiteFooter, SiteHeader } from "@/layouts";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
