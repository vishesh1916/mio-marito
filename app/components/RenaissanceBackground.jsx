"use client";

import Image from "next/image";

/**
 * RenaissanceBackground Component
 * Provides a warm, ambient photographic background showcasing Mio Marito's real European café interior
 * in Hazratganj (brass chandeliers, vaulted Renaissance frescoes, and marble salon),
 * creating an authentic, luxurious Italian atmosphere that frames the central editorial canvas.
 */
export default function RenaissanceBackground() {
  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0 select-none bg-[#140D09]"
      aria-hidden="true"
    >
      {/* Real Café Interior Background (Grand Chandelier, Vaulted Fresco & Marble Counter) */}
      <Image
        src="/images/hero-interior.jpg"
        alt="Interior of Mio Marito Gelato café with Renaissance frescoes and brass chandelier in Hazratganj"
        fill
        priority
        className="object-cover object-center filter saturate-[0.92] brightness-[0.76] contrast-[1.06]"
        sizes="100vw"
        quality={95}
      />

      {/* Warm Ambient Antique Vignette Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#140D09]/60 via-[#180F0B]/25 to-[#120B08]/75" 
      />

      {/* Subtle radial focus highlighting the central editorial canvas */}
      <div 
        className="absolute inset-0 bg-radial-[circle_at_center,transparent_45%,rgba(16,10,7,0.55)_100%]" 
      />

      {/* Gentle vignette around outer viewport edges */}
      <div 
        className="absolute inset-0 shadow-[inset_0_0_140px_rgba(14,8,5,0.65)]" 
      />
    </div>
  );
}
