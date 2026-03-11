import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Lumina from "@/components/Lumina";
import Experience from "@/components/Experience";
import TerminalFooter from "@/components/TerminalFooter";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100">
      <Header />
      <Hero />
      <Lumina />
      <Experience />
      <TerminalFooter />
    </main>
  );
}
