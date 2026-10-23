"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

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

export default function Story() {
  const [sectionRef, sectionInView] = useInView(0.15);

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-cream texture-linen overflow-hidden"
    >
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-terracotta/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-terracotta text-sm tracking-[0.4em] uppercase mb-4 italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            La nostra storia
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-espresso tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Story
          </motion.h2>

          <div className="divider-ornate mt-6 max-w-md mx-auto">
            <span className="ornament text-terracotta">✦</span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-espresso/15">
              <Image
                src="/images/gallery-seating.jpg"
                alt="Cozy seating area at Mio Marito Gelato with marble tables and vintage Italian posters"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-terracotta text-white px-8 py-5 rounded-xl shadow-xl"
            >
              <p
                className="text-sm tracking-wider uppercase mb-1 text-white/80"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Established
              </p>
              <p
                className="text-3xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Hazratganj
              </p>
            </motion.div>

            {/* Decorative border */}
            <div className="absolute -inset-3 border-2 border-gold/15 rounded-3xl -z-10" />
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <blockquote className="border-l-4 border-gold pl-6 py-2">
              <p
                className="text-2xl md:text-3xl text-espresso italic leading-relaxed"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                &ldquo;We didn&apos;t just want to serve gelato — we wanted to
                bring a little piece of Rome to Lucknow.&rdquo;
              </p>
            </blockquote>

            <div className="space-y-4 text-charcoal/80 leading-relaxed text-base md:text-lg" style={{ fontFamily: "var(--font-dm-sans)" }}>
              <p>
                <strong className="text-espresso">Mio Marito</strong> — meaning{" "}
                <em className="text-terracotta" style={{ fontFamily: "var(--font-cormorant)" }}>&ldquo;My Husband&rdquo;</em>{" "}
                in Italian — was born from a dream. A dream to create an
                authentic Italian gelateria where every detail transports you
                across continents.
              </p>

              <p>
                From the hand-painted Renaissance frescoes adorning our walls to
                the ornate brass chandeliers casting a warm golden glow, every
                corner of our café is designed to evoke the charm of a{" "}
                <em>Roman bottega</em>. Our gelato is crafted fresh daily using
                traditional Italian techniques and the finest ingredients.
              </p>

              <p>
                Located in the heart of Hazratganj — Lucknow&apos;s most elegant
                boulevard — Mio Marito isn&apos;t just a café. It&apos;s an{" "}
                <em>experience</em>. A place where art meets artisanal craft,
                where every scoop tells a story, and where{" "}
                <em
                  className="text-terracotta"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  la dolce vita
                </em>{" "}
                is always on the menu.
              </p>
            </div>

            {/* Signature / accent */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-16 h-[1px] bg-gold" />
              <p
                className="text-gold-dark text-sm italic tracking-wider"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Con amore, dalla famiglia Mio Marito
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
