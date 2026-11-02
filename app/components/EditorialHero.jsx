"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import OrnamentalLace from "./OrnamentalLace";

export default function EditorialHero() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative w-full min-h-[640px] sm:min-h-[700px] md:min-h-[760px] flex flex-col justify-between overflow-hidden bg-[#18110D] select-none"
    >
      {/* 1. Crystal-Clear Italian Landscape Painting with Cinematic Ken Burns Slow Zoom */}
      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 z-0 origin-center"
      >
        <Image
          src="/reference/clean_hero_landscape_hd.png"
          alt="Classical Italian coastal landscape with castle overlooking lake and mountains"
          fill
          priority
          sizes="(max-width: 840px) 100vw, 840px"
          quality={100}
          className="object-cover object-[center_36%] pointer-events-none"
        />
        {/* Subtle ambient edge vignetting */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#18110D]/30 via-transparent to-[#18110D]/40 pointer-events-none" />
      </motion.div>

      {/* 2. Classical Antique Double-Line Gold Picture Frame with Corner Brackets */}
      <div className="absolute inset-2 sm:inset-3 md:inset-4 z-20 pointer-events-none border border-[#CAA563]/50 rounded-[2px] shadow-[inset_0_0_0_1px_rgba(202,165,99,0.18)]">
        {/* Corner Accents: Top-Left */}
        <div className="absolute -top-[1px] -left-[1px] w-3.5 h-3.5 border-t-2 border-l-2 border-[#E5C788]" />
        <div className="absolute top-1 left-1 w-1 h-1 bg-[#CAA563]" />

        {/* Corner Accents: Top-Right */}
        <div className="absolute -top-[1px] -right-[1px] w-3.5 h-3.5 border-t-2 border-r-2 border-[#E5C788]" />
        <div className="absolute top-1 right-1 w-1 h-1 bg-[#CAA563]" />

        {/* Corner Accents: Bottom-Left */}
        <div className="absolute -bottom-[1px] -left-[1px] w-3.5 h-3.5 border-b-2 border-l-2 border-[#E5C788]" />
        <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#CAA563]" />

        {/* Corner Accents: Bottom-Right */}
        <div className="absolute -bottom-[1px] -right-[1px] w-3.5 h-3.5 border-b-2 border-r-2 border-[#E5C788]" />
        <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#CAA563]" />
      </div>

      {/* 3. Top Navigation Bar */}
      <header className="relative z-30 w-full px-4 sm:px-6 md:px-8 pt-4 sm:pt-6 flex items-center justify-between">
        {/* Brand Logo (Matching Reference Top-Left) */}
        <a
          href="#top"
          className="group relative flex items-center transition-transform hover:scale-[1.02]"
          aria-label="Mio Marito Gelato Home"
        >
          <div className="relative h-10 sm:h-12 md:h-14 w-[150px] sm:w-[180px] md:w-[205px]">
            <Image
              src="/logo/hero_logo_light_hd.png"
              alt="Mio Marito Gelato"
              fill
              priority
              sizes="205px"
              className="object-contain object-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
            />
          </div>
        </a>

        {/* Top-Right Action Controls: Terracotta DIRECTIONS + Hamburger Menu */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Terracotta DIRECTIONS Button */}
          <a
            href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[5px] bg-[#9A4939] hover:bg-[#B05442] active:scale-[0.98] border border-[#BD6F5E]/60 text-[#FAF5EE] text-[0.64rem] sm:text-[0.72rem] font-sans font-bold tracking-[0.14em] uppercase shadow-[0_4px_14px_rgba(20,10,7,0.35)] transition-all duration-200"
          >
            <svg
              className="w-3.5 h-3.5 text-[#FAF5EE]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21s-6.5-5.3-6.5-9.5A6.5 6.5 0 0 1 12 5a6.5 6.5 0 0 1 6.5 6.5c0 4.2-6.5 9.5-6.5 9.5z" />
              <circle cx="12" cy="11.5" r="2.2" />
            </svg>
            <span>DIRECTIONS</span>
          </a>

          {/* 3-Line Hamburger Menu Toggle */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open Navigation Menu"
            className="flex flex-col justify-center items-center gap-[4.5px] w-9 h-9 sm:w-10 sm:h-10 rounded-[4px] border border-white/25 hover:border-white/50 bg-black/20 hover:bg-black/35 text-[#FAF5EE] transition-all cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.25)]"
          >
            <span className="w-5 h-[2px] bg-[#FAF5EE] rounded-full" />
            <span className="w-5 h-[2px] bg-[#FAF5EE] rounded-full" />
            <span className="w-5 h-[2px] bg-[#FAF5EE] rounded-full" />
          </button>
        </div>
      </header>

      {/* 5. Central Composition */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 py-4 sm:py-6 md:py-8 my-auto">
        {/* Antique Gold Cameo Oval Medallion with Gentle Floating Animation & Reactive Specular Glint */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative mb-2 sm:mb-2.5 flex items-center justify-center"
        >
          <div className="relative w-[100px] sm:w-[118px] md:w-[132px] h-[128px] sm:h-[150px] md:h-[168px] transition-transform duration-300 hover:scale-[1.03]">
            <Image
              src="/logo/cameo_emblem.svg"
              alt="Mio Marito Hand holding Gelato Cameo"
              fill
              priority
              sizes="132px"
              className="object-contain"
            />
            {/* Dynamic Gold Specular Foil Highlight on Cameo */}
            <div
              className="absolute inset-0 pointer-events-none rounded-full"
              style={{
                background: "radial-gradient(circle 85px at 50% 35%, rgba(255,255,255,0.45) 0%, rgba(229,199,136,0.2) 40%, transparent 75%)",
                mixBlendMode: "overlay",
              }}
            />
          </div>
        </motion.div>

        {/* Monumental Headline: "MIO MARITO" in Classical Roman Serif with Dynamic Gold Foil Specular Light */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-roman font-normal tracking-[0.04em] uppercase leading-[0.85] select-text"
        >
          <span
            className="block text-[4.2rem] sm:text-[5.8rem] md:text-[7.4rem] lg:text-[8.4rem] transition-all duration-150"
            style={{
              backgroundImage: "radial-gradient(circle 600px at 50% 35%, #FFFFFF 0%, #FFF5DB 20%, #E5C788 40%, #CAA563 65%, #9E7D3B 95%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              filter: "drop-shadow(0px 4px 22px rgba(10,6,4,0.75))",
            }}
          >
            MIO
          </span>
          <span
            className="block text-[4.2rem] sm:text-[5.8rem] md:text-[7.4rem] lg:text-[8.4rem] transition-all duration-150"
            style={{
              backgroundImage: "radial-gradient(circle 600px at 50% 35%, #FFFFFF 0%, #FFF5DB 20%, #E5C788 40%, #CAA563 65%, #9E7D3B 95%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              filter: "drop-shadow(0px 4px 22px rgba(10,6,4,0.75))",
            }}
          >
            MARITO
          </span>
        </motion.h1>

        {/* Romantic Cursive Script: "Mio & Marito" in Delicate Blush Rose Pink */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1.5 sm:mt-2.5 font-script text-[#E2BBB4] text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.4rem] leading-none drop-shadow-[0_2px_10px_rgba(15,8,6,0.55)]"
        >
          Mio &amp; Marito
        </motion.div>

        {/* Italic Serif Location Calligraphy: "Gelateria in Hazratganj" in Warm Ivory */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-1 sm:mt-1.5 font-serif italic text-[#F5EFEB] text-[1.6rem] sm:text-[2.2rem] md:text-[2.8rem] lg:text-[3.2rem] leading-none drop-shadow-[0_2px_10px_rgba(15,8,6,0.6)]"
        >
          Gelateria in Hazratganj
        </motion.p>

        {/* Antique Gold Flourish Divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2.5 sm:mt-3.5 flex items-center justify-center"
        >
          <div className="relative w-[130px] sm:w-[160px] md:w-[190px] h-5">
            <Image
              src="/logo/gold_divider.svg"
              alt="Decorative Gold Flourish"
              fill
              sizes="190px"
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* 5. Antique Scalloped Lace Ribbon Separator */}
      <div className="relative z-20 w-full mt-auto">
        <OrnamentalLace className="h-[36px] sm:h-[42px] md:h-[46px] opacity-100" />
      </div>

      {/* 6. Interactive Slide-In Navigation Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm sm:max-w-md bg-[#160E0A] border-l-2 border-[#CAA563] shadow-[-16px_0_60px_rgba(0,0,0,0.85)] flex flex-col justify-between p-6 sm:p-8 text-[#FAF5EE]"
            >
              {/* Drawer Header */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#CAA563]/30">
                  <div className="relative h-11 w-[165px]">
                    <Image
                      src="/logo/hero_logo_light_hd.png"
                      alt="Mio Marito Gelato"
                      fill
                      sizes="165px"
                      className="object-contain object-left drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full border border-[#CAA563]/70 bg-black/40 flex items-center justify-center text-[#E5C788] hover:bg-[#CAA563]/25 hover:text-[#FAF5EE] transition-all cursor-pointer shadow-md"
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-2 pt-6" aria-label="Mobile Drawer Navigation">
                  {[
                    { label: "Home", href: "#top" },
                    { label: "The Entrance", href: "#entrance" },
                    { label: "Our Story", href: "#story" },
                    { label: "Il Menù (Flavors)", href: "#menu" },
                    { label: "Step Inside Gallery", href: "#gallery" },
                    { label: "Atmosphere", href: "#atmosphere" },
                    { label: "Visit & Hours", href: "#visit" },
                  ].map((link, idx) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className="flex items-center justify-between text-lg sm:text-xl font-serif text-[#FAF5EE] hover:text-[#E6C280] transition-all py-2.5 px-2 border-b border-[#CAA563]/20 hover:border-[#CAA563]/50 hover:bg-white/[0.04] rounded-[2px] group"
                    >
                      <span className="group-hover:translate-x-1.5 transition-transform font-medium">
                        {link.label}
                      </span>
                      <span className="text-xs font-sans font-bold tracking-widest text-[#CAA563] group-hover:text-[#E6C280]">
                        0{idx + 1}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer CTA */}
              <div className="pt-6 border-t border-[#CAA563]/30 flex flex-col gap-3">
                <a
                  href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-[4px] bg-[#9A4939] hover:bg-[#B05442] text-[#FAF5EE] text-[0.76rem] font-sans font-bold tracking-[0.16em] uppercase shadow-[0_4px_16px_rgba(0,0,0,0.5)] border border-[#C27362]/60 transition-all hover:scale-[1.01]"
                >
                  <svg
                    className="w-4 h-4 text-[#FAF5EE]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 21s-6.5-5.3-6.5-9.5A6.5 6.5 0 0 1 12 5a6.5 6.5 0 0 1 6.5 6.5c0 4.2-6.5 9.5-6.5 9.5z" />
                    <circle cx="12" cy="11.5" r="2.2" />
                  </svg>
                  Get Directions in Hazratganj
                </a>
                <p className="text-[0.74rem] font-sans font-medium text-center text-[#E5C788]">
                  84, Ashok Marg, Hazratganj, Lucknow · 11:00 AM – 11:00 PM
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
