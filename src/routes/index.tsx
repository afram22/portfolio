import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { VideosSection } from "@/components/portfolio/VideosSection";
import { ContactSection } from "@/components/portfolio/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Afram — Video Editor" },
      { name: "description", content: "Afram, a video editor driven by crafting striking and unforgettable projects." },
    ],
  }),
});

function Index() {
  return (
    <main style={{ overflowX: "clip", background: "#0C0C0C" }}>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <VideosSection />
      <ContactSection />
    </main>
  );
}
