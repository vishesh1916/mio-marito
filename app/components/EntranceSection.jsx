"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function EntranceSection() {
  const [peekInside, setPeekInside] = useState(false);

  return (
    <section id="entrance" className="relative w-full py-16 sm:py-20 px-6 sm:px-12 bg-[#F4EFE6] overflow-hidden">
      <div className="max-w-[760px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
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
        </div>

        {/* Interactive Entrance Architectural Display */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-[3px] overflow-hidden antique-frame shadow-xl group">
          {/* Main Entrance Photo OR Peek Inside Toggle */}
          <div className="relative w-full h-full overflow-hidden bg-[#1C120B]">
            <AnimatePresence mode="wait">
              {!peekInside ? (
                <motion.div
                  key="entrance"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/cafe/entrance.jpg"
                    alt="Real Entrance of Mio Marito Gelato in Hazratganj with blue arches and glowing signboard"
                    fill
                    className="object-cover object-center filter contrast-[1.04]"
                    sizes="(max-width: 840px) 100vw, 840px"
                    priority
                  />

                  {/* Soft Warm Sunlit Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#251611]/35 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              ) : (
                <motion.div
                  key="inside"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.5 }}
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
                onClick={() => setPeekInside(!peekInside)}
                className="bg-[#251611]/92 hover:bg-[#251611] text-[#FAF5E8] border border-[#B59A68]/60 px-3.5 py-1.5 rounded-[2px] text-[0.68rem] font-sans font-medium tracking-[0.14em] uppercase transition-all shadow-md flex items-center gap-1.5 cursor-pointer backdrop-blur-xs"
              >
                <span>{peekInside ? "← View Storefront" : "Peek Inside Doors →"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Architectural Narrative Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8 pt-6 border-t border-[#B59A68]/20 text-center">
          <div>
            <h4 className="font-roman text-xs font-semibold text-[#38251F] uppercase tracking-wider">
              Historic Colonnade
            </h4>
            <p className="font-serif text-xs text-[#38251F]/70 mt-1">
              Set into Hazratganj&apos;s Victorian arches, blending European cafe heritage with Lucknow&apos;s culture.
            </p>
          </div>
          <div>
            <h4 className="font-roman text-xs font-semibold text-[#38251F] uppercase tracking-wider">
              Hand-Painted Murals
            </h4>
            <p className="font-serif text-xs text-[#38251F]/70 mt-1">
              Custom frescoes frame both the arched doorway and the Amalfi coast window display.
            </p>
          </div>
          <div>
            <h4 className="font-roman text-xs font-semibold text-[#38251F] uppercase tracking-wider">
              Fresh Daily Atmosphere
            </h4>
            <p className="font-serif text-xs text-[#38251F]/70 mt-1">
              Warm brass sconces and Italian music welcome walk-in visitors from morning till night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
