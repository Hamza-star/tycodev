import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Marquee from "@/components/Marquee";
import ProjectsPage from "@/components/ProjectsPage";
import Services from "@/components/Services";
import ServiceCTA from "@/components/services/ServiceCta";

import homeSeo from "@/app/seo/home";

export async function generateMetadata() {
  return homeSeo;
}

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Marquee />
      <Services />
      <ProjectsPage />
      <ServiceCTA />
      <ContactForm />
    </main>
  );
};

export default Home;
