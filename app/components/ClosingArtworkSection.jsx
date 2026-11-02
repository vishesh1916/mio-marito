"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClosingArtworkSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Renaissance Illustrated Concluding Artwork Container matching reference's bottom scene */}
      <div className="relative w-full min-h-[520px] sm:min-h-[580px] overflow-hidden flex flex-col items-center justify-between pt-10 sm:pt-14 pb-0">
        {/* Real Café Interior with Slow Breathing Zoom */}
        <motion.div
          animate={{ scale: [1, 1.04, 1] }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/gallery-chandelier.jpg"
            alt="Interior of Mio Marito Gelato cafe with grand chandelier and Renaissance frescoes"
            fill
            className="object-cover object-center filter contrast-[1.04] brightness-[0.88] saturate-[0.95]"
            sizes="(max-width: 840px) 100vw, 840px"
            quality={95}
          />
        </motion.div>

        {/* Soft Warm Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C120B]/95 via-[#1C120B]/50 to-[#1C120B]/40 pointer-events-none" />

        {/* Deep Burgundy Invitation Envelope Container with Slide Up & Unfold Animation */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] shadow-2xl rounded-t-sm my-auto group"
        >
          {/* Envelope Card Inside (Parchment Cream) */}
          <div className="bg-[#FAF5E8] border border-[#B59A68]/40 p-6 sm:p-7 text-center rounded-t-sm shadow-md transition-transform duration-500 group-hover:-translate-y-1">
            {/* Top Official Gelato Cup Monogram */}
            <div className="w-9 h-9 mx-auto mb-2 rounded-full border border-[#B59A68]/60 flex items-center justify-center bg-white/70 overflow-hidden shadow-xs">
              <Image
                src="/logo/gelato_cup_emblem.png"
                alt="Mio Marito Cup Emblem"
                width={26}
                height={26}
                className="object-contain"
              />
            </div>

            <p className="text-[0.65rem] tracking-[0.25em] uppercase font-sans text-[#737A5A] mb-1">
              Benvenuti a Lucknow
            </p>

            <h3 className="font-script text-3xl sm:text-4xl text-[#984B3B] tracking-wide mb-1 drop-shadow-[0_0_12px_rgba(202,165,99,0.35)]">
              Ci vediamo presto.
            </h3>

            <p className="font-serif italic text-xs sm:text-sm text-[#38251F]/80 leading-relaxed max-w-[240px] mx-auto mt-2">
              We look forward to welcoming you to our little corner of Rome in Hazratganj.
            </p>

            <div className="filigree-rule max-w-[120px] mx-auto my-3">
              <span className="text-[#B59A68] text-[8px]">✦</span>
            </div>

            {/* Final Action Links */}
            <div className="flex items-center justify-center gap-4 text-xs font-serif pt-1">
              <a
                href="#menu"
                className="text-[#984B3B] hover:underline font-medium hover:text-[#CAA563] transition-colors"
              >
                Explore Menu
              </a>
              <span className="text-[#B59A68]">&middot;</span>
              <a
                href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&amp;g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#984B3B] hover:underline font-medium hover:text-[#CAA563] transition-colors"
              >
                Directions
              </a>
            </div>
          </div>

          {/* Envelope Lower Flap & Body (Deep Wine / Burgundy with Gold Wordmark) */}
          <div className="bg-[#42121D] text-[#E6C280] p-4 text-center rounded-b-sm border-t border-[#B59A68]/30 shadow-inner flex flex-col items-center justify-center">
            <div className="relative w-36 h-9 my-0.5">
              <Image
                src="/logo/hero_logo_light_hd.png"
                alt="Mio Marito Gelato"
                fill
                sizes="144px"
                className="object-contain"
              />
            </div>
            <span className="text-[0.65rem] tracking-[0.3em] font-script text-[#FAF5E8]/70 block mt-0.5">
              Gelateria &middot; Hazratganj
            </span>
          </div>
        </motion.div>

        {/* Integrated Archival Footer */}
        <footer className="relative z-10 w-full pt-10 pb-6 px-6 text-center text-[#FAF5E8]/80 text-xs font-serif bg-gradient-to-t from-[#1C120B]/95 via-[#1C120B]/75 to-transparent">
          <div className="max-w-[760px] mx-auto space-y-2.5">
            {/* Footer Logo Wordmark Light */}
            <div className="flex justify-center mb-0.5">
              <div className="relative w-36 h-8 opacity-95">
                <Image
                  src="/logo/hero_logo_light_hd.png"
                  alt="Mio Marito Gelato"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-[0.72rem] font-sans text-[#E6C280]/85 tracking-wide">
              Hazratganj, Lucknow, Uttar Pradesh 226001 &middot; Opposite Mayfair Promenade
            </p>

            <div className="flex items-center justify-center gap-4 text-[0.72rem] text-[#FAF5E8]/70 pt-0.5">
              <a
                href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&amp;g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E6C280] transition-colors"
              >
                Google Maps
              </a>
              <span>&middot;</span>
              <a
                href="https://www.instagram.com/miomaritogelato.india/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E6C280] transition-colors"
              >
                Instagram
              </a>
              <span>&middot;</span>
              <button
                type="button"
                onClick={scrollToTop}
                className="hover:text-[#E6C280] transition-colors cursor-pointer"
              >
                Back to Top &uarr;
              </button>
            </div>

            <p className="text-[0.65rem] text-[#FAF5E8]/45 pt-1 font-sans">
              &copy; 2026 Mio Marito Gelato &middot; Hazratganj. Crafted with Italian artisanal devotion.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
