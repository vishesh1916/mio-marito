"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PageIntro() {
  const [showIntro, setShowIntro] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    try {
      const viewed = sessionStorage.getItem("mm_intro_seen");
      if (!viewed) {
        setShowIntro(true);
        sessionStorage.setItem("mm_intro_seen", "true");
        const timer = setTimeout(() => {
          setShowIntro(false);
        }, 1400);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if sessionStorage is disabled
    } finally {
      setHasChecked(true);
    }
  }, []);

  if (!hasChecked) return null;

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
          }}
          onClick={() => setShowIntro(false)}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#150D09] cursor-pointer select-none"
          aria-label="Loading Mio Marito Gelato"
        >
          {/* Subtle warm ambient radial light behind brand mark */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-radial from-[#CAA563]/20 via-[#984B3B]/10 to-transparent blur-2xl pointer-events-none" />

          {/* Ornamental border outline */}
          <div className="absolute inset-4 sm:inset-8 border border-[#CAA563]/30 pointer-events-none rounded-[2px]" />

          {/* Content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-6"
          >
            {/* Medallion Emblem */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                filter: [
                  "drop-shadow(0 0 12px rgba(202,165,99,0.25))",
                  "drop-shadow(0 0 24px rgba(202,165,99,0.5))",
                  "drop-shadow(0 0 12px rgba(202,165,99,0.25))",
                ],
              }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-full border-2 border-[#E6C280]/90 p-1.5 bg-[#FAF5E8] shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <Image
                src="/logo/gelato_cup_emblem.png"
                alt="Mio Marito Emblem"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="font-script text-2xl sm:text-3xl text-[#E2BBB4] tracking-wide"
            >
              Benvenuti a
            </motion.p>

            {/* Wordmark */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, letterSpacing: "0.22em" }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="font-roman text-2xl sm:text-3xl md:text-4xl text-[#F5EEDB] uppercase font-normal mt-1"
            >
              MIO MARITO
            </motion.h1>

            {/* Gold Rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#E6C280] to-transparent my-3"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="font-serif italic text-xs sm:text-sm text-[#F5EFEB]/80 tracking-widest"
            >
              Gelateria &middot; Hazratganj, Lucknow
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

