"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    src: "/cafe/entrance.jpg",
    alt: "The Colonnade Portal — Real entrance of Mio Marito Gelato in Hazratganj with blue arches and glowing baroque signboard",
    title: "The Colonnade Portal",
    subtitle: "Hazratganj facade with violet & cornflower blue arches and illuminated signboard",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-12 md:col-span-6",
    badge: "Entrance",
  },
  {
    id: 2,
    src: "/cafe/interior_chandelier_counter.jpg",
    alt: "Galleria dei Lampadari — Tall double-height ceiling, glowing brass chandeliers, and illuminated blue gelato counter",
    title: "Galleria dei Lampadari",
    subtitle: "High ceiling dining hall with glowing brass chandeliers & blue-lit counter",
    aspect: "aspect-[3/4]",
    colSpan: "col-span-12 sm:col-span-6 md:col-span-6",
    badge: "Dining Hall",
  },
  {
    id: 3,
    src: "/cafe/arched_niche_seating.jpg",
    alt: "L'Angolo Barocco — Trompe-l'œil arch mural with baroque niche, ornate mirrors, and bistro tables",
    title: "L'Angolo Barocco",
    subtitle: "Baroque niche mural, antique gilded mirrors, and marble bistro tables",
    aspect: "aspect-[3/4]",
    colSpan: "col-span-12 sm:col-span-6 md:col-span-6",
    badge: "Bistro Corner",
  },
  {
    id: 4,
    src: "/cafe/salon_mirrors_tables.jpg",
    alt: "Galleria degli Specchi — Wide dining hall with grand mirrored archway and flying ceiling cherubs",
    title: "Galleria degli Specchi",
    subtitle: "Grand trompe-l'œil arch mirror and cherubs painted on the ceiling",
    aspect: "aspect-[4/3]",
    colSpan: "col-span-12 md:col-span-6",
    badge: "Architecture",
  },
  {
    id: 5,
    src: "/cafe/fresco_mural.png",
    alt: "Il Giardino Toscano — Hand-painted mural of classical figures in Renaissance garb enjoying artisanal gelato in a garden",
    title: "Il Giardino Toscano",
    subtitle: "Classical Italian figures savoring gelato cones beneath cypress trees",
    aspect: "aspect-[16/10]",
    colSpan: "col-span-12 md:col-span-7",
    badge: "Fresco Mural",
  },
  {
    id: 6,
    src: "/cafe/gelato_counter.jpg",
    alt: "I Pozzetti Artigianali — Stainless steel display counter with fresh pistachio, chocolate ribbons, and candied fruits",
    title: "I Pozzetti Artigianali",
    subtitle: "Freshly churned artisanal gelato served in traditional pozzetti tins",
    aspect: "aspect-[4/5]",
    colSpan: "col-span-12 md:col-span-5",
    badge: "Gelato Display",
  },
];

export default function StepInsideGallery() {
  const [activeIdx, setActiveIdx] = useState(null);

  const closeLightbox = useCallback(() => setActiveIdx(null), []);
  const prevImage = useCallback(() => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
  }, []);
  const nextImage = useCallback(() => {
    setActiveIdx((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
  }, []);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (activeIdx === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIdx, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="relative w-full py-16 sm:py-20 px-6 sm:px-12 bg-[#F4EFE6]">
      <div className="max-w-[760px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-script text-3xl sm:text-4xl text-[#984B3B] mb-1">
            Una galleria vivente
          </p>
          <h2 className="font-roman text-3xl sm:text-4xl md:text-5xl text-[#38251F] tracking-wide font-normal uppercase">
            Step Inside
          </h2>
          <div className="filigree-rule max-w-[280px] mx-auto my-3">
            <span className="text-[#B59A68] text-xs">✦</span>
          </div>
          <p className="font-serif italic text-sm sm:text-base text-[#38251F]/75 max-w-lg mx-auto">
            Explore the authentic spaces of Mio Marito Gelato in Hazratganj — from our blue arched entrance to high frescoed ceilings and brass chandeliers.
          </p>
        </div>

        {/* Asymmetrical Gallery Collage featuring ALL 4 user images + mural + counter */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6 items-start">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className={`${item.colSpan} group cursor-pointer`}
              onClick={() => setActiveIdx(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveIdx(index)}
              aria-label={`View larger photograph: ${item.title}`}
            >
              {/* Picture Frame */}
              <div className="antique-frame rounded-[2px] overflow-hidden shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#EAE2CD]`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 100vw, 450px"
                    quality={88}
                  />

                  {/* Subtle Archival Plate Watermark on Hover */}
                  <div className="absolute inset-0 bg-[#251611]/0 group-hover:bg-[#251611]/35 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[0.68rem] tracking-[0.18em] text-[#FAF5E8] font-sans uppercase bg-[#251611]/90 px-3 py-1.5 rounded-[2px] border border-[#E6C280]/60 shadow-lg">
                      Inspect Photograph &rarr;
                    </span>
                  </div>
                </div>
              </div>

              {/* Archival Monograph Caption */}
              <div className="mt-2.5 px-1">
                <span className="font-roman text-[0.65rem] tracking-[0.2em] uppercase text-[#984B3B] block mb-0.5">
                  Tavola {["I", "II", "III", "IV", "V", "VI"][index]} &middot; {item.badge}
                </span>
                <h3 className="font-roman text-xs sm:text-sm font-semibold text-[#38251F] tracking-wide">
                  {item.title}
                </h3>
                <p className="font-serif italic text-xs text-[#737A5A] mt-0.5 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 lightbox-backdrop flex flex-col items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-[#FAF5E8]/80 hover:text-[#FAF5E8] p-2 focus:outline-none focus:ring-1 focus:ring-[#B59A68] cursor-pointer"
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-[#FAF5E8]/70 hover:text-[#FAF5E8] p-2.5 focus:outline-none bg-[#251611]/60 rounded-full border border-white/10 cursor-pointer"
              aria-label="Previous photograph"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-[#FAF5E8]/70 hover:text-[#FAF5E8] p-2.5 focus:outline-none bg-[#251611]/60 rounded-full border border-white/10 cursor-pointer"
              aria-label="Next photograph"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Modal Image Display */}
            <div
              className="relative max-w-4xl max-h-[75vh] w-full flex items-center justify-center antique-frame rounded-[2px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] max-h-[70vh] overflow-hidden">
                <Image
                  src={galleryItems[activeIdx].src}
                  alt={galleryItems[activeIdx].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  quality={90}
                  priority
                />
              </div>
            </div>

            {/* Modal Caption */}
            <div
              className="mt-4 text-center text-[#FAF5E8] max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-roman text-base sm:text-lg tracking-wide text-[#E6C280]">
                {galleryItems[activeIdx].title}
              </p>
              <p className="font-serif italic text-xs sm:text-sm text-[#FAF5E8]/90 mt-0.5">
                {galleryItems[activeIdx].subtitle}
              </p>
              <p className="text-[0.65rem] font-sans text-[#FAF5E8]/50 mt-1 uppercase tracking-widest">
                {activeIdx + 1} of {galleryItems.length} &middot; Esc to close &middot; Arrow keys to navigate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
