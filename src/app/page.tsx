import Preloader from "@/components/Preloader";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import BentoProjects from "@/components/BentoProjects";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-apple-black">
      <Preloader />
      <Header />
      <Hero />
      <BentoProjects />
      <TechStack />
      <About />
      <Services />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
