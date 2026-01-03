import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <FeaturedProjects />
      <TestimonialsSection />
    </main>
  );
}
