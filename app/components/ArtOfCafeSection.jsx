"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BotanicalFlower } from "./BotanicalAccents";
import OrnamentalLace from "./OrnamentalLace";
import ScrollReveal, { StaggerChild } from "./animations/ScrollReveal";

const cafeChronicles = [
  {
    period: "The Inspiration",
    detail: "Drawn from historic Roman bottegas, Florentine gelaterias, and classical art journals.",
  },
  {
    period: "The Frescoed Walls",
    detail: "Hand-painted panoramic murals depicting Renaissance figures savoring artisanal gelato in Tuscan gardens.",
  },
  {
    period: "Hazratganj Colonnade",
    detail: "Established beneath the vintage architectural arches of Lucknow's most celebrated boulevard.",
  },
  {
    period: "Small-Batch Churning",
    detail: "Freshly churned gelato presented in traditional stainless pozzetti tins, paired with bold Italian roast coffee.",
  },
  {
    period: "Il Ritrovo",
    detail: "An enduring Italian caffè dedicated to the lost art of pausing, conversing, and tasting life slowly.",
  },
];

export default function ArtOfCafeSection() {
  return (
    <section id="art-of-cafe" className="relative w-full py-12 px-6 sm:px-12 bg-[#F4EFE6] overflow-hidden">
      <div className="max-w-[760px] mx-auto">
        {/* Section Heading matching reference Timeline script */}
        <ScrollReveal variant="fadeUp" className="mb-6">
          <h2 className="font-script text-4xl sm:text-5xl text-[#38251F] tracking-wide">
            The Art of the Italian Café
          </h2>
          <p className="text-xs tracking-[0.2em] uppercase text-[#737A5A] font-sans mt-1">
            Atmosphere &middot; Architecture &middot; Gelato Craft
          </p>
        </ScrollReveal>

        {/* Two-Column Content: Cascading Timeline Items on Left, Photo & Botanical Flower on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Timeline Milestones Cascading In One After Another */}
          <ScrollReveal
            variant="fadeUp"
            staggerChildren={0.08}
            delay={0.1}
            className="md:col-span-8 space-y-4"
          >
            {cafeChronicles.map((item, index) => (
              <StaggerChild
                key={index}
                className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 text-xs sm:text-[0.84rem] font-serif border-b border-[#B59A68]/15 pb-3 transition-colors hover:border-[#B59A68]/40"
              >
                <span className="font-serif italic font-semibold text-[#984B3B] min-w-[150px] tracking-wide">
                  {item.period} &mdash;
                </span>
                <span className="text-[#38251F]/80 leading-relaxed">
                  {item.detail}
                </span>
              </StaggerChild>
            ))}
          </ScrollReveal>

          {/* Supporting Photo & Delicate Botanical Pressed Flower (Right - 4 cols) */}
          <div className="md:col-span-4 flex items-center justify-center md:justify-end gap-3 mt-4 md:mt-0">
            {/* Small Rectangular Café Photograph with Subtle Zoom */}
            <div className="relative w-[110px] aspect-[3/4] overflow-hidden antique-frame rounded-[1px] shadow-sm hover:scale-[1.03] transition-transform duration-300 group">
              <div className="relative w-full h-full">
                <Image
                  src="/cafe/storefront.png"
                  alt="Mio Marito Arched Entrance in Hazratganj"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="120px"
                  quality={85}
                />
              </div>
            </div>

            {/* Antique Botanical Flower Illustration with Organic Sway */}
            <motion.div
              animate={{ rotate: [0, 2, 0, -2, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="flex-shrink-0 -ml-1"
            >
              <BotanicalFlower className="w-10 h-20" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Second Ornamental Lace Separator matching reference transition to Menu */}
      <OrnamentalLace className="mt-14 -mb-12" />
    </section>
  );
}
