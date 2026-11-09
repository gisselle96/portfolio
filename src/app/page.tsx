import {
  CaseStudy,
  Contact,
  Hero,
  Projects,
  Stack,
} from "@/features/home";
import { SiteFooter, SiteHeader } from "@/layouts";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Projects />
        <CaseStudy />
        <Stack />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
