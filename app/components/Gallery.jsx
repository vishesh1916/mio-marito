"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "/images/hero-interior.jpg",
    alt: "Grand interior of Mio Marito Gelato with Renaissance frescoes and chandelier",
    caption: "Grand Frescoed Hall",
    description: "Renaissance-inspired frescoes grace every wall and ceiling",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/gallery-fresco.jpg",
    alt: "Close-up of Renaissance fresco painting on café wall with angels and classical figures",
    caption: "Italian Masterwork",
    description: "Classical paintings curated to transport you to Rome",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-chandelier.jpg",
    alt: "Ornate brass chandelier hanging from frescoed ceiling in the gelato café",
    caption: "The Chandelier",
    description: "Ornate brass fixtures casting a warm golden glow",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-counter.jpg",
    alt: "Blue and gold gelato display counter with colorful artisanal gelato flavors",
    caption: "Il Bancone",
    description: "Our signature blue-and-gold display showcasing fresh gelato daily",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/gallery-seating.jpg",
    alt: "Cozy vintage seating area with marble tables, wrought iron chairs, and Italian posters",
    caption: "Intimate Corners",
    description: "Marble tables and vintage Italian posters create a cozy escape",
    span: "col-span-1 row-span-1",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Gallery() {
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [sectionRef, sectionInView] = useInView(0.1);

  const openLightbox = (i) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i > 0 ? i - 1 : galleryImages.length - 1));
  const next = () => setLightboxIdx((i) => (i < galleryImages.length - 1 ? i + 1 : 0));

  // keyboard nav
  useEffect(() => {
    if (lightboxIdx === null) return;
    const handler = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-espresso texture-linen"
    >
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-gold-light text-sm tracking-[0.4em] uppercase mb-4 italic"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Un viaggio visivo
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Step Inside
        </motion.h2>

        <div className="divider-ornate mt-6 max-w-md mx-auto">
          <span className="ornament">✦</span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Every corner of Mio Marito tells a story — from hand-painted frescoes
          to our signature blue gelato counter, it&apos;s a little piece of Italy.
        </motion.p>
      </div>

      {/* Masonry Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`gallery-item cursor-pointer ${img.span}`}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
              aria-label={`View photo: ${img.caption}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={80}
              />
              <div className="caption-overlay">
                <div>
                  <p
                    className="text-gold-light text-sm tracking-wider uppercase mb-1"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {img.caption}
                  </p>
                  <p className="text-white/70 text-xs leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                    {img.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 z-10 text-white/80 hover:text-white transition-colors"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Prev / Next */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-white/60 hover:text-white transition-colors p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full aspect-[16/10] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[lightboxIdx].src}
                alt={galleryImages[lightboxIdx].alt}
                fill
                className="object-contain"
                sizes="90vw"
                quality={90}
              />
            </motion.div>

            {/* Caption */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 text-center"
            >
              <p className="text-gold-light text-lg tracking-wider" style={{ fontFamily: "var(--font-cormorant)" }}>
                {galleryImages[lightboxIdx].caption}
              </p>
              <p className="text-white/50 text-sm mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                {galleryImages[lightboxIdx].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
