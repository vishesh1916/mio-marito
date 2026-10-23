"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed bottom-4 left-4 right-4 z-40"
        >
          <div className="bg-[#FAF5E8]/98 backdrop-blur-md border border-[#B59A68]/50 rounded-[4px] shadow-2xl p-1.5 flex items-center justify-between gap-2 max-w-sm mx-auto">
            {/* Menu Button with Official Gelato Cup Emblem */}
            <a
              href="#menu"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[2px] bg-[#EFE8DA] hover:bg-[#E6DDC8] text-[#38251F] text-[0.72rem] font-sans font-semibold tracking-wider uppercase transition-colors"
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image
                  src="/logo/gelato_cup_emblem.png"
                  alt="Gelato Cup"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              <span>Il Menù</span>
            </a>

            {/* Directions Button (Primary Accent) */}
            <a
              href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&amp;g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-[1.3] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-[2px] bg-[#984B3B] hover:bg-[#7A372A] text-[#FAF5E8] text-[0.72rem] font-sans font-bold tracking-wider uppercase shadow-sm transition-transform active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Directions</span>
            </a>

            {/* Call Button */}
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center w-9 h-9 rounded-[2px] bg-[#EFE8DA] hover:bg-[#E6DDC8] text-[#984B3B] transition-colors flex-shrink-0"
              aria-label="Call Mio Marito Gelato"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
