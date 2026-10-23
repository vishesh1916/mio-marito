"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function VisitContact() {
  const [sectionRef, sectionInView] = useInView(0.1);

  return (
    <section
      id="visit"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-espresso text-warm-white texture-linen overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-gold/10 blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl translate-x-1/3 pointer-events-none" />

      {/* Decorative top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-gold-light text-sm tracking-[0.4em] uppercase mb-4 italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Vieni a trovarci
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Visit & Contact
          </motion.h2>

          <div className="divider-ornate mt-6 max-w-md mx-auto">
            <span className="ornament text-gold">✦</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Located along the storied colonnades of Hazratganj. Drop by for an espresso, stay for the gelato.
          </motion.p>
        </div>

        {/* Two-Column Grid: Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Information Column (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white/[0.04] backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/10"
          >
            {/* Address */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gold-light">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-wide text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  Our Location
                </h3>
              </div>
              <p className="text-white/80 leading-relaxed pl-13 text-base" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Shop 14, Heritage Arcade, Mahatma Gandhi Marg,<br />
                Hazratganj, Lucknow, Uttar Pradesh 226001
              </p>
              <p className="text-xs text-gold-light/80 italic pl-13" style={{ fontFamily: "var(--font-cormorant)" }}>
                Opposite Mayfair Cinema &middot; Hazratganj Promenade
              </p>
            </div>

            {/* Hours */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-gold-light">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold tracking-wide text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  Opening Hours
                </h3>
              </div>
              <div className="space-y-1.5 pl-13 text-white/80 text-sm md:text-base" style={{ fontFamily: "var(--font-dm-sans)" }}>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span>Monday – Friday</span>
                  <span className="font-medium text-gold-light">11:00 AM – 11:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-white/5">
                  <span>Saturday &amp; Sunday</span>
                  <span className="font-medium text-gold-light">11:00 AM – 11:30 PM</span>
                </div>
                <p className="text-xs text-white/50 pt-1">
                  Fresh batches churned twice daily &middot; Walk-ins warmly welcomed
                </p>
              </div>
            </div>

            {/* Direct Contact & Social Action Buttons */}
            <div className="pt-4 border-t border-white/10 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium transition-all border border-white/10 hover:border-gold/40"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <svg className="w-4 h-4 text-gold-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+91 98765 43210</span>
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Mio%20Marito,%20I'd%20like%20to%20know%20more%20about%20today's%20gelato%20flavours!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-sm font-medium transition-all border border-emerald-500/30 hover:border-emerald-400"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              {/* Instagram link */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-terracotta/20 to-gold/10 hover:from-terracotta/30 hover:to-gold/20 border border-gold/20 transition-all text-white group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white text-sm">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-sm font-semibold block">@miomaritogelato</span>
                    <span className="text-xs text-white/60">Follow our daily flavour creations</span>
                  </div>
                </div>
                <span className="text-xs text-gold-light group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>

          {/* Map Column (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-7 flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-md relative min-h-[420px]"
          >
            {/* Interactive Google Map Embed */}
            <div className="relative w-full h-full min-h-[340px] flex-1">
              <iframe
                title="Mio Marito Gelato Location Hazratganj Lucknow"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14238.937666245995!2d80.9388889!3d26.8497222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0696720bf5%3A0x6b45a329d9e6e87f!2sHazratganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.05) saturate(0.9)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Bottom action bar over map */}
            <div className="p-6 bg-espresso/95 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white text-base font-semibold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Mio Marito Gelato &middot; Caffè
                </p>
                <p className="text-xs text-gold-light mt-0.5">
                  Hazratganj, Lucknow &middot; Open today until 11:00 PM
                </p>
              </div>

              <a
                href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&amp;g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 text-sm"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Open in Google Maps</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
