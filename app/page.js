import RenaissanceBackground from "./components/RenaissanceBackground";
import EditorialNavbar from "./components/EditorialNavbar";
import EditorialHero from "./components/EditorialHero";
import EntranceSection from "./components/EntranceSection";
import StorySection from "./components/StorySection";
import ArtOfCafeSection from "./components/ArtOfCafeSection";
import MenuSection from "./components/MenuSection";
import StepInsideGallery from "./components/StepInsideGallery";
import AtmosphereSection from "./components/AtmosphereSection";
import VisitSection from "./components/VisitSection";
import ClosingArtworkSection from "./components/ClosingArtworkSection";
import MobileStickyBar from "./components/MobileStickyBar";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* 1. Full-page fixed Renaissance Artwork Background (Botticelli's The Birth of Venus) */}
      <RenaissanceBackground />

      {/* 2. Organized High-Contrast Editorial Navigation Bar */}
      <EditorialNavbar />

      {/* 3. Narrow, Vertically Oriented Central Editorial Canvas */}
      {/* Target width ~840px matching reference screenshot proportions */}
      <div className="relative z-10 w-full max-w-[840px] mx-auto min-h-screen my-0 sm:my-6 md:my-10 editorial-canvas paper-grain rounded-none sm:rounded-[3px] overflow-hidden border-x sm:border border-[#D8CEBA]/60 shadow-[0_20px_70px_rgba(0,0,0,0.6)]">
        <main>
          {/* Section 1: The Masterpiece Hero Section (Landscape, Cameo, Typography & Lace Separator) */}
          <EditorialHero />

          {/* Section 2: The Entrance at Hazratganj (Featuring 2nd Image) */}
          <EntranceSection />

          {/* Section 3: The Café Story (Featuring 5th Image & Antique Gold Oval Frame) */}
          <StorySection />

          {/* Section 4: The Art of the Italian Café (Timeline & Botanical Flower) */}
          <ArtOfCafeSection />

          {/* Section 5: The Menu ("Il Menù" with Real Artisanal Pozzetti Photo) */}
          <MenuSection />

          {/* Section 6: Step Inside (Curated Gallery of ALL Real Café Photographs with Lightbox) */}
          <StepInsideGallery />

          {/* Section 7: The Café Atmosphere (Featuring 4th Image: Arched Niche Wall & Chandelier) */}
          <AtmosphereSection />

          {/* Section 8: Visit Us ("When / Where" Two-Column Reference Composition) */}
          <VisitSection />

          {/* Section 9: The Final Artwork & Editorial Closing (Envelope & Footer) */}
          <ClosingArtworkSection />
        </main>
      </div>

      {/* 4. Mobile Sticky Bottom Action Bar */}
      <MobileStickyBar />
    </div>
  );
}
