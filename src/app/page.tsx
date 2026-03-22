import Preloader from "@/components/Preloader";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Philosophy from "@/components/Philosophy";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Preloader />
      <Header />
      <Hero />
      <Showcase />
      <Philosophy />
      <ContactCTA />
    </main>
  );
}
