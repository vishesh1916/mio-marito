"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden">
      {/* Background Image with Ken Burns */}
      <div className="absolute inset-0 hero-ken-burns">
        <Image
          src="/images/hero-interior.jpg"
          alt="Interior of Mio Marito Gelato café with Renaissance frescoes, brass chandelier, and blue gelato display case"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Dark overlay gradient */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Decorative top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent z-20 opacity-60" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
        {/* Italian accent phrase */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gold-light text-sm md:text-base tracking-[0.4em] uppercase mb-6 italic"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Una piccola angolo d&apos;Italia
        </motion.p>

        {/* Logo / Brand Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <span
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-[0.08em] leading-none"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            MIO MARITO
          </span>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mt-4 mb-3 max-w-xs"
          />

          <span
            className="text-lg sm:text-xl md:text-2xl text-gold-light tracking-[0.5em] uppercase font-light"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Gelato &middot; Caffè
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-white/75 text-base md:text-lg mt-8 max-w-lg leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          A little taste of <em className="text-gold-light italic" style={{ fontFamily: "var(--font-cormorant)" }}>la dolce vita</em> — 
          right here in the heart of Hazratganj, Lucknow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a href="#menu" className="btn-primary">
            Explore Menu
          </a>
          <a href="#gallery" className="btn-secondary">
            Step Inside
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span
          className="text-white/40 text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Scroll
        </span>
        <div className="scroll-indicator">
          <svg className="w-5 h-5 text-gold/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-warm-white to-transparent z-10" />
    </section>
  );
}
