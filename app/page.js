import RenaissanceBackground from "./components/RenaissanceBackground";
import EditorialNavbar from "./components/EditorialNavbar";
import EditorialHero from "./components/EditorialHero";
import EntranceSection from "./components/EntranceSection";
import StorySection from "./components/StorySection";
import MenuSection from "./components/MenuSection";
import StepInsideGallery from "./components/StepInsideGallery";
import SocialProofSection from "./components/SocialProofSection";
import AtmosphereSection from "./components/AtmosphereSection";
import VisitSection from "./components/VisitSection";
import ClosingArtworkSection from "./components/ClosingArtworkSection";
import MobileStickyBar from "./components/MobileStickyBar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* 1. Full-page fixed Renaissance Artwork Background with subtle parallax */}
      <RenaissanceBackground />

      {/* 2. Organized High-Contrast Editorial Navigation Bar */}
      <EditorialNavbar />

      {/* 3. Narrow, Vertically Oriented Central Editorial Canvas */}
      <div className="relative z-10 w-full max-w-[840px] mx-auto min-h-screen my-0 sm:my-6 md:my-10 editorial-canvas paper-grain rounded-none sm:rounded-[3px] overflow-hidden border-x sm:border border-[#D8CEBA]/60 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
        <main>
          {/* Section 1: Hero Section */}
          <EditorialHero />

          {/* Section 2: Entrance Section */}
          <EntranceSection />

          {/* Section 3: Café Story Section */}
          <StorySection />

          {/* Section 4: The Menu Section */}
          <MenuSection />

          {/* Section 5: Step Inside Gallery Section */}
          <StepInsideGallery />

          {/* Section 6: Press, guest notes, and Instagram */}
          <SocialProofSection />

          {/* Section 7: The Café Atmosphere Section */}
          <AtmosphereSection />

          {/* Section 8: Visit Us Section */}
          <VisitSection />

          {/* Section 9: Closing Artwork & Envelope Section */}
          <ClosingArtworkSection />
        </main>
      </div>

      {/* 4. Mobile Sticky Bottom Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
