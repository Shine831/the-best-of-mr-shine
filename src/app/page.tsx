import Preloader from "@/components/Preloader";
import SvgFilters from "@/components/SvgFilters";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectsGallery from "@/components/ProjectsGallery";
import About from "@/components/About";
import Expertises from "@/components/Expertises";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Preloader />
      <SvgFilters />
      <Header />
      <Hero />
      <TechStack />
      <ProjectsGallery />
      <About />
      <Expertises />
      <Testimonials />
      <Philosophy />
      <ContactCTA />
      <Footer />
    </main>
  );
}
