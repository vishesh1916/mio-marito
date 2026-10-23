"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section id="story" className="relative w-full py-14 sm:py-18 px-6 sm:px-12 bg-[#F4EFE6]">
      {/* Editorial Content Container */}
      <div className="max-w-[760px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Asymmetrical Photo Composition (Left - 5 cols) */}
          <div className="md:col-span-5 relative w-full flex justify-center md:justify-start">
            <div className="relative w-[220px] sm:w-[250px]">
              {/* Primary Rectangular Photo: The Dining Hall with Mirrored Arch and Cherubs (Image 5) */}
              <div className="relative w-[180px] sm:w-[200px] aspect-[4/5] rounded-[2px] overflow-hidden antique-frame shadow-md">
                <div className="relative w-full h-full">
                  <Image
                    src="/cafe/salon_mirrors_tables.jpg"
                    alt="Mio Marito Gelato Dining Hall with Painted Cherubs and Mirrored Arch"
                    fill
                    className="object-cover object-center filter contrast-[1.03]"
                    sizes="220px"
                    quality={85}
                  />
                </div>
              </div>

              {/* Overlapping Oval Gold Antique Frame (Lady Eating Gelato from Real Mural) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-6 -right-2 sm:-right-4 w-[118px] sm:w-[134px] aspect-[4/5] rounded-[50%] oval-frame-gold z-10 shadow-xl"
              >
                <div className="relative w-full h-full rounded-[50%] overflow-hidden border border-[#E6C280]/60">
                  <Image
                    src="/cafe/lady_gelato.jpg"
                    alt="Classical fresco figure enjoying gelato in a Tuscan garden at Mio Marito"
                    fill
                    className="object-cover object-center"
                    sizes="140px"
                    quality={90}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Editorial Text Block (Right - 7 cols) */}
          <div className="md:col-span-7">
            {/* Delicate Script Heading matching reference */}
            <h2 className="font-script text-4xl sm:text-5xl text-[#38251F] tracking-wide mb-4">
              Our Story
            </h2>

            {/* Two Narrow Columns of Fine Serif Body Typography */}
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
          </div>
        </div>

        {/* Feature: The Official Brand Seal & The Story Behind the Logo */}
        <div className="mt-14 pt-10 border-t border-[#B59A68]/30">
          <div className="bg-[#FAF5E8]/80 border border-[#B59A68]/40 rounded-[2px] p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Official Brand Asset Card (Left - 4 cols) */}
              <div className="md:col-span-4 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative w-[180px] sm:w-[200px] aspect-[1/2.12] rounded-[3px] overflow-hidden antique-frame shadow-lg hover:scale-[1.02] transition-transform duration-300 group"
                >
                  <Image
                    src="/logo/brand_card.png"
                    alt="Mio Marito Official Signature Mark — Hand with golden wedding band holding artisanal strawberry gelato"
                    fill
                    className="object-contain bg-[#FAF5E8]"
                    sizes="220px"
                    priority
                  />
                  {/* Subtle hover gleam */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </div>

              {/* Poetic Narrative of the Logo (Right - 8 cols) */}
              <div className="md:col-span-8 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <span className="text-[0.68rem] tracking-[0.25em] uppercase font-sans text-[#737A5A]">
                    Il Marchio di Fabbrica
                  </span>
                  <span className="text-[#B59A68]">&middot;</span>
                  <span className="text-[0.68rem] tracking-[0.2em] uppercase font-sans text-[#984B3B] font-semibold">
                    The Official Seal
                  </span>
                </div>

                <h3 className="font-script text-3xl sm:text-4xl text-[#38251F] tracking-wide mb-3">
                  The Story Behind the Seal
                </h3>

                <p className="font-serif italic text-sm sm:text-base text-[#984B3B] leading-relaxed mb-3">
                  &ldquo;A wedding band, a hand extended, and a cup of pure strawberry gelato.&rdquo;
                </p>

                <p className="font-serif text-[0.88rem] sm:text-[0.92rem] text-[#38251F]/80 leading-relaxed mb-4">
                  Our emblem tells the founding romantic tale of Mio Marito (<em>&ldquo;My Husband&rdquo;</em>). The delicate hand bearing a gold wedding ring gently presents freshly churned gelato &mdash; symbolizing unyielding devotion, artisanal fidelity, and the Italian tradition of sharing life&apos;s sweetest moments with those we love most.
                </p>

                {/* Three Pillars of the Mark */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#B59A68]/20">
                  <div className="text-center sm:text-left">
                    <span className="font-roman text-[0.72rem] tracking-wider uppercase text-[#38251F] font-semibold block">
                      The Golden Band
                    </span>
                    <span className="font-serif text-xs text-[#38251F]/70">
                      A promise of uncompromised craft &amp; authentic Italian recipes.
                    </span>
                  </div>

                  <div className="text-center sm:text-left">
                    <span className="font-roman text-[0.72rem] tracking-wider uppercase text-[#38251F] font-semibold block">
                      Artisanal Gelato
                    </span>
                    <span className="font-serif text-xs text-[#38251F]/70">
                      Pure dairy, sun-ripened fruits, and slow churning every morning.
                    </span>
                  </div>

                  <div className="text-center sm:text-left">
                    <span className="font-roman text-[0.72rem] tracking-wider uppercase text-[#38251F] font-semibold block">
                      Hazratganj Sanctuary
                    </span>
                    <span className="font-serif text-xs text-[#38251F]/70">
                      A classical Italian caffè to pause, converse, and linger.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
