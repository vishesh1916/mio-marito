"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal, { StaggerChild } from "./animations/ScrollReveal";

export default function EntranceSection() {
  const [peekInside, setPeekInside] = useState(false);

  return (
    <section id="entrance" className="relative w-full py-16 sm:py-20 px-6 sm:px-12 bg-[#F4EFE6] overflow-hidden">
      <div className="max-w-[760px] mx-auto">
        {/* Section Heading with Staggered Scroll Reveal */}
        <ScrollReveal variant="fadeUp" className="text-center mb-10">
          <p className="font-script text-3xl sm:text-4xl text-[#984B3B] mb-1">
            L&apos;Ingresso a Hazratganj
          </p>
          <h2 className="font-roman text-2xl sm:text-3xl md:text-4xl text-[#38251F] tracking-wide uppercase font-normal">
            The Portal to Rome
          </h2>
          <div className="filigree-rule max-w-[240px] mx-auto my-3">
            <span className="text-[#B59A68] text-xs">✦</span>
          </div>
          <p className="font-serif italic text-sm sm:text-base text-[#38251F]/75 max-w-lg mx-auto">
            Strolling down the storied arcade of Hazratganj, you are greeted by cornflower blue arches, illuminated baroque gold, and the sweet aroma of waffle cones.
          </p>
        </ScrollReveal>

        {/* Interactive Entrance Architectural Display */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[3px] overflow-hidden antique-frame shadow-xl group">
          {/* Main Entrance Photo OR Peek Inside Toggle */}
          <div className="relative w-full h-full overflow-hidden bg-[#1C120B]">
            <AnimatePresence mode="wait">
              {!peekInside ? (
                <motion.div
                  key="entrance"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/cafe/entrance.jpg"
                    alt="Real Entrance of Mio Marito Gelato in Hazratganj with blue arches and glowing signboard"
                    fill
                    className="object-cover object-center filter contrast-[1.04] group-hover:scale-102 transition-transform duration-700 ease-out"
                    sizes="(max-width: 840px) 100vw, 840px"
                    priority
                  />

                  {/* Soft Warm Sunlit Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251611]/35 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              ) : (
                <motion.div
                  key="inside"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/cafe/interior_chandelier_counter.jpg"
                    alt="View inside the entrance: glowing brass chandeliers, high frescoed ceiling, and illuminated gelato counter"
                    fill
                    className="object-cover object-center filter contrast-[1.04]"
                    sizes="(max-width: 840px) 100vw, 840px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251611]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6 text-[#FAF5E8] text-center">
                    <p className="font-roman text-xs sm:text-sm tracking-[0.2em] uppercase text-[#E6C280]">
                      Inside the Caffè
                    </p>
                    <p className="font-serif italic text-xs text-[#FAF5E8]/90 mt-0.5">
                      Double-height frescoed walls, warm brass chandeliers, and the artisanal counter
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Bar: Peek Inside Switch Button */}
            <div className="absolute bottom-3 right-3 z-30">
              <button
                type="button"
                onClick={() => setPeekInside(!peekInside)}
                className="bg-[#251611]/92 hover:bg-[#251611] text-[#FAF5E8] border border-[#B59A68]/60 px-3.5 py-1.5 rounded-[2px] text-[0.68rem] font-sans font-medium tracking-[0.14em] uppercase transition-all shadow-md flex items-center gap-1.5 cursor-pointer backdrop-blur-xs hover:border-[#E6C280]"
              >
                <span>{peekInside ? "← View Storefront" : "Peek Inside Doors →"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Architectural Narrative Details Cascading In */}
        <ScrollReveal
          variant="fadeUp"
          staggerChildren={0.12}
          delay={0.15}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 pt-6 border-t border-[#B59A68]/20 text-center"
        >
          <StaggerChild>
            <h4 className="font-roman text-xs font-semibold text-[#38251F] uppercase tracking-wider">
              Historic Colonnade
            </h4>
            <p className="font-serif italic text-xs text-[#38251F]/75 mt-1">
              Set beneath Hazratganj&apos;s heritage British &amp; Awadhi neoclassical arches.
            </p>
          </StaggerChild>

          <StaggerChild>
            <h4 className="font-roman text-xs font-semibold text-[#38251F] uppercase tracking-wider">
              Cornflower &amp; Gold
            </h4>
            <p className="font-serif italic text-xs text-[#38251F]/75 mt-1">
              Custom blue-lacquered exterior framing the warm luminescence of the interior.
            </p>
          </StaggerChild>

          <StaggerChild>
            <h4 className="font-roman text-xs font-semibold text-[#38251F] uppercase tracking-wider">
              Open Daily
            </h4>
            <p className="font-serif italic text-xs text-[#38251F]/75 mt-1">
              11:00 AM &ndash; 11:00 PM for cones, cups, affogato, and takeaway boxes.
            </p>
          </StaggerChild>
        </ScrollReveal>
      </div>
    </section>
  );
}
