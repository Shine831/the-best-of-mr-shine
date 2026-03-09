import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
