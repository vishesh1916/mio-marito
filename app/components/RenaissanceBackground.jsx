"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * RenaissanceBackground Component
 * Provides a warm, ambient photographic background showcasing Mio Marito's real European café interior
 * in Hazratganj (brass chandeliers, vaulted Renaissance frescoes, and marble salon),
 * with subtle parallax depth as the user scrolls the central canvas.
 */
export default function RenaissanceBackground() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 2500], [0, -120]);
  const scale = useTransform(scrollY, [0, 2500], [1.01, 1.06]);

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none bg-[#140D09]"
      aria-hidden="true"
    >
      {/* Real Café Interior Background with Parallax Depth */}
      <motion.div
        style={{ y, scale }}
        className="absolute -top-[5%] -left-[5%] w-[110%] h-[110%]"
      >
        <Image
          src="/images/hero-interior.jpg"
          alt="Interior of Mio Marito Gelato café with Renaissance frescoes and brass chandelier in Hazratganj"
          fill
          priority
          className="object-cover object-center filter saturate-[0.92] brightness-[0.76] contrast-[1.06]"
          sizes="100vw"
          quality={95}
        />
      </motion.div>

      {/* Warm Ambient Antique Vignette Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#140D09]/60 via-[#180F0B]/25 to-[#120B08]/75" 
      />

      {/* Subtle radial focus highlighting the central editorial canvas */}
      <div 
        className="absolute inset-0" 
        style={{
          background: "radial-gradient(circle at center, transparent 45%, rgba(16,10,7,0.55) 100%)",
        }}
      />

      {/* Gentle vignette around outer viewport edges */}
      <div 
        className="absolute inset-0 shadow-[inset_0_0_140px_rgba(14,8,5,0.65)]" 
      />
    </div>
  );
}
