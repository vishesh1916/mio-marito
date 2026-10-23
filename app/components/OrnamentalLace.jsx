"use client";

import Image from "next/image";

/**
 * OrnamentalLace Component
 * Recreates the delicate ivory lace/filigree band separator from the reference screenshot.
 * It features scalloped loops, floral eyelets, and picot drops in soft pale ivory (#FAF7EE).
 */
export default function OrnamentalLace({ className = "" }) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {/* Repeating Lace Band Container */}
      <div className="relative w-full h-[32px] md:h-[40px] flex items-center justify-center">
        {/* Real seamless lace texture from reference as background pattern */}
        <div 
          className="absolute inset-0 w-full h-full opacity-95"
          style={{
            backgroundImage: "url('/reference/lace_separator_seamless.png')",
            backgroundRepeat: "repeat-x",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
            filter: "contrast(1.04) brightness(1.02)",
          }}
        />

        {/* Supplementary SVG filigree scallop overlay for ultra-crisp high-DPI rendering */}
        <svg
          className="w-full h-full absolute inset-0 pointer-events-none opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 40"
        >
          <defs>
            <pattern id="lacePattern" width="40" height="40" patternUnits="userSpaceOnUse">
              {/* Top delicate picot border */}
              <circle cx="20" cy="4" r="1.5" fill="#FAF5E8" />
              <path d="M0,8 Q20,2 40,8" fill="none" stroke="#FAF5E8" strokeWidth="0.8" />
              
              {/* Scalloped Arch */}
              <path d="M0,10 Q20,32 40,10" fill="none" stroke="#FAF5E8" strokeWidth="1.2" />
              <path d="M4,10 Q20,28 36,10" fill="none" stroke="#EAE2CD" strokeWidth="0.6" strokeDasharray="1,2" />
              
              {/* Floral Rosette / Eyelet Center */}
              <circle cx="20" cy="18" r="3" fill="none" stroke="#FAF5E8" strokeWidth="1" />
              <circle cx="20" cy="18" r="1" fill="#FAF5E8" />
              <circle cx="20" cy="12" r="1" fill="#FAF5E8" />
              <circle cx="20" cy="24" r="1" fill="#FAF5E8" />
              <circle cx="14" cy="18" r="1" fill="#FAF5E8" />
              <circle cx="26" cy="18" r="1" fill="#FAF5E8" />

              {/* Bottom Scallop Edge */}
              <path d="M0,32 Q20,40 40,32" fill="none" stroke="#FAF5E8" strokeWidth="1" />
              <circle cx="20" cy="38" r="1.2" fill="#FAF5E8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lacePattern)" />
        </svg>

        {/* Soft top and bottom shadow edges */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#CBB486]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#CBB486]/30 to-transparent" />
      </div>
    </div>
  );
}
