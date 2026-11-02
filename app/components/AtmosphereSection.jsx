"use client";

import Image from "next/image";
import { BotanicalOlive } from "./BotanicalAccents";
import ScrollReveal from "./animations/ScrollReveal";

export default function AtmosphereSection() {
  return (
    <section id="atmosphere" className="relative w-full py-16 px-6 sm:px-12 bg-[#EFE8DA] overflow-hidden">
      {/* Decorative filigree top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B59A68]/40 to-transparent" />

      <div className="max-w-[760px] mx-auto text-center relative z-10">
        {/* Floating Botanical Accent */}
        <ScrollReveal variant="scaleUp" duration={0.5} className="flex justify-center mb-3">
          <BotanicalOlive className="w-12 h-12 opacity-80" />
        </ScrollReveal>

        {/* Script Intro Phrase & Main Roman Headline */}
        <ScrollReveal variant="fadeUp" delay={0.08}>
          <p className="font-script text-3xl sm:text-4xl text-[#984B3B] mb-1.5">
            Take your time. Savour the moment.
          </p>

          <h2 className="font-roman text-2xl sm:text-3xl md:text-4xl text-[#38251F] tracking-wide uppercase font-normal max-w-xl mx-auto leading-snug">
            A little gelato, a little coffee, and a world of art around you.
          </h2>

          <div className="filigree-rule max-w-[220px] mx-auto my-4">
            <span className="text-[#B59A68] text-xs">✦</span>
          </div>

          <p className="font-serif italic text-sm sm:text-base text-[#38251F]/75 max-w-md mx-auto leading-relaxed">
            Surrounded by distressed fresco walls, baroque niches, vintage gilded mirrors, and warm glowing chandeliers. An Italian refuge designed for conversation.
          </p>
        </ScrollReveal>

        {/* Large Curated Interior Artwork Display with Hover Zoom */}
        <div className="mt-8 relative max-w-[580px] mx-auto aspect-[3/4] sm:aspect-[4/3] rounded-[2px] overflow-hidden antique-frame shadow-xl group">
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src="/cafe/arched_niche_seating.jpg"
              alt="Mio Marito Gelato arched fresco wall with baroque niche, ornate mirrors, glowing chandelier, and marble tables"
              fill
              className="object-cover object-center filter contrast-[1.04] group-hover:scale-103 transition-transform duration-700 ease-out"
              sizes="600px"
              quality={90}
            />
            {/* Soft Warm Lighting Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#251611]/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-[#FAF5E8] text-xs font-serif italic">
              <span className="text-[#E6C280] font-sans text-[0.7rem] uppercase tracking-widest">
                L&apos;Angolo Barocco
              </span>
              <span>Hazratganj, Lucknow</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative filigree bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B59A68]/40 to-transparent" />
    </section>
  );
}
