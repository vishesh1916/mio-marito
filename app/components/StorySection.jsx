"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./animations/ScrollReveal";

export default function StorySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax depth between the rectangular frame and overlapping oval frame
  const rectY = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const ovalY = useTransform(scrollYProgress, [0, 1], [22, -22]);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative w-full py-14 sm:py-18 px-6 sm:px-12 bg-[#F4EFE6] overflow-hidden"
    >
      {/* Editorial Content Container */}
      <div className="max-w-[760px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Asymmetrical Photo Composition (Left - 5 cols) with Parallax Depth */}
          <div className="md:col-span-5 relative w-full flex justify-center md:justify-start">
            <div className="relative w-[220px] sm:w-[250px]">
              {/* Primary Rectangular Photo: The Dining Hall with Mirrored Arch and Cherubs */}
              <motion.div
                style={{ y: rectY }}
                className="relative w-[180px] sm:w-[200px] aspect-[4/5] rounded-[2px] overflow-hidden antique-frame shadow-md group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/cafe/salon_mirrors_tables.jpg"
                    alt="Mio Marito Gelato Dining Hall with Painted Cherubs and Mirrored Arch"
                    fill
                    className="object-cover object-center filter contrast-[1.03] group-hover:scale-103 transition-transform duration-700 ease-out"
                    sizes="220px"
                    quality={85}
                  />
                </div>
              </motion.div>

              {/* Overlapping Oval Gold Antique Frame (Lady Eating Gelato from Real Mural) with Parallax */}
              <motion.div
                style={{ y: ovalY }}
                className="absolute -bottom-6 -right-2 sm:-right-4 w-[118px] sm:w-[134px] aspect-[4/5] rounded-[50%] oval-frame-gold z-10 shadow-xl group"
              >
                <div className="relative w-full h-full rounded-[50%] overflow-hidden border border-[#E6C280]/60">
                  <Image
                    src="/cafe/lady_gelato.jpg"
                    alt="Classical fresco figure enjoying gelato in a Tuscan garden at Mio Marito"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="140px"
                    quality={90}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Editorial Text Block (Right - 7 cols) with Staggered Typography */}
          <div className="md:col-span-7">
            {/* Delicate Script Heading */}
            <ScrollReveal variant="fadeUp" delay={0.05}>
              <h2 className="font-script text-4xl sm:text-5xl text-[#38251F] tracking-wide mb-4">
                Our Story
              </h2>
            </ScrollReveal>

            {/* Two Narrow Columns of Fine Serif Body Typography */}
            <ScrollReveal variant="fadeUp" delay={0.15} duration={0.7}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-[#38251F]/85 font-serif text-[0.88rem] sm:text-[0.92rem] leading-[1.65] text-justify sm:text-left">
                <div>
                  <p className="first-letter:text-3xl first-letter:font-roman first-letter:text-[#984B3B] first-letter:mr-1.5 first-letter:float-left">
                    Mio Marito &mdash; meaning <em>&ldquo;My Husband&rdquo;</em> in Italian &mdash; was conceived as a romantic daydream brought to life. Stepping off the busy avenues of Hazratganj, you are enveloped in the warmth of a vintage Roman bottega.
                  </p>
                  <p className="mt-3">
                    Under double-height ceilings painted with Renaissance pastoral frescoes, painted figures savor artisanal gelato cones beside ancient streams and Tuscan cypress trees.
                  </p>
                </div>

                <div>
                  <p>
                    Every scoop is churned with pure devotion: rich Sicilian pistachios, intense dark Belgian chocolates, sun-ripened Alphonso mangoes, and traditional Italian custards.
                  </p>
                  <p className="mt-3">
                    Surrounded by glowing brass chandeliers, trompe-l&apos;œil archways, and marble bistro tables, Mio Marito invites you to linger, converse, and take pleasure in authentic Italian sweetness right here in Lucknow.
                  </p>
                  <p className="mt-4 text-[0.7rem] text-[#737A5A] italic font-serif tracking-wide border-t border-[#B59A68]/20 pt-2">
                    Fig. I &mdash; The frescoed dining room, hand-painted murals &amp; antique gilded mirrors inside Mio Marito, Hazratganj.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Feature: The Official Brand Seal & The Story Behind the Logo */}
        <div className="mt-14 pt-10 border-t border-[#B59A68]/30">
          <ScrollReveal variant="fadeUp" delay={0.1}>
            <div className="bg-[#FAF5E8]/80 border border-[#B59A68]/40 rounded-[2px] p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Official Brand Asset Card (Left - 4 cols) */}
                <div className="md:col-span-4 flex justify-center">
                  <div className="relative w-[180px] sm:w-[200px] aspect-[1/2.12] rounded-[3px] overflow-hidden antique-frame shadow-lg hover:scale-[1.02] transition-transform duration-300 group">
                    <Image
                      src="/logo/brand_card.png"
                      alt="Mio Marito Official Signature Mark — Hand with golden wedding band holding artisanal strawberry gelato"
                      fill
                      className="object-cover object-top filter contrast-[1.03]"
                      sizes="220px"
                      quality={90}
                    />
                  </div>
                </div>

                {/* Narrative Typography on the Symbolism (Right - 8 cols) */}
                <div className="md:col-span-8">
                  <span className="font-roman text-[0.68rem] tracking-[0.24em] uppercase text-[#984B3B] block mb-1">
                    Archival Monograph &middot; The Emblem
                  </span>
                  <h3 className="font-roman text-xl sm:text-2xl text-[#38251F] font-semibold tracking-wide mb-3">
                    The Wedding Band &amp; The Artisanal Cup
                  </h3>
                  <div className="filigree-rule max-w-[200px] my-2 mb-3">
                    <span className="text-[#B59A68] text-xs">✦</span>
                  </div>
                  <p className="font-serif text-sm sm:text-[0.92rem] text-[#38251F]/85 leading-relaxed">
                    Look closely at the official illustration: a hand adorned with a solid gold wedding band tenderly cradles a paper cup of strawberry gelato with a miniature spoon.
                  </p>
                  <p className="font-serif italic text-xs sm:text-sm text-[#984B3B] mt-2">
                    &ldquo;My Husband&rdquo; &mdash; A symbol of fidelity to ancient Italian craft, and the devotion poured into every batch churned in Hazratganj.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
