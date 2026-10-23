"use client";

import { BotanicalSprig } from "./BotanicalAccents";
import OrnamentalLace from "./OrnamentalLace";

export default function VisitSection() {
  return (
    <section id="visit" className="relative w-full overflow-hidden">
      {/* Lace Divider Transition */}
      <OrnamentalLace className="relative z-20" />

      {/* Elegant Gradient Background */}
      <div
        className="relative w-full py-16 sm:py-20 px-6 sm:px-12 overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 20% 30%, rgba(152, 75, 59, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 100% 70% at 80% 70%, rgba(115, 122, 90, 0.15) 0%, transparent 55%),
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(181, 154, 104, 0.1) 0%, transparent 50%),
            linear-gradient(175deg, #F7F3EB 0%, #EDE5D4 25%, #E6DDC8 50%, #DDD4BF 75%, #E4DCB7 100%)
          `,
        }}
      >
        {/* Subtle decorative grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Soft warm glow accents */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-[#B59A68]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#984B3B]/8 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#737A5A]/6 blur-3xl pointer-events-none" />

        {/* Decorative border lines */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B59A68]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B59A68]/30 to-transparent" />

        <div className="max-w-[760px] mx-auto relative z-10">
          {/* Floating Botanical Sprig Decoration matching reference */}
          <div className="flex justify-center mb-1 opacity-80">
            <BotanicalSprig className="w-8 h-8" />
          </div>

          {/* Two Balanced Editorial Columns: When / Where directly over Sea Waves */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 text-center mt-4">
            {/* WHEN COLUMN */}
            <div className="flex flex-col items-center">
              <h2 className="font-script text-5xl sm:text-6xl text-[#984B3B] mb-2 tracking-wide drop-shadow-[0_1px_3px_rgba(255,255,255,0.7)]">
                When
              </h2>

              <p className="font-serif text-base sm:text-lg font-semibold text-[#251611] tracking-wide">
                Monday &ndash; Sunday
              </p>
              <p className="font-serif italic text-sm text-[#38251F] mt-1">
                11:00 AM &ndash; 11:00 PM
              </p>
              <p className="font-sans text-[0.7rem] tracking-[0.16em] uppercase text-[#4A5432] mt-2 font-medium">
                Fresh small batches churned daily
              </p>

              <div className="filigree-rule max-w-[140px] mx-auto my-3.5">
                <span className="text-[#984B3B] text-[10px]">✦</span>
              </div>

              <p className="font-serif italic text-xs text-[#251611]/75 max-w-[220px]">
                Walk-ins warmly welcomed for artisanal gelato, espresso &amp; quiet afternoons.
              </p>
            </div>

            {/* WHERE COLUMN */}
            <div className="flex flex-col items-center">
              <h2 className="font-script text-5xl sm:text-6xl text-[#984B3B] mb-2 tracking-wide drop-shadow-[0_1px_3px_rgba(255,255,255,0.7)]">
                Where
              </h2>

              <p className="font-serif text-base sm:text-lg font-semibold text-[#251611] tracking-wide">
                Hazratganj, Lucknow
              </p>
              <p className="font-serif italic text-sm text-[#38251F] mt-1">
                84, Ashok Marg, Hazratganj, 226001
              </p>
              <p className="font-sans text-[0.7rem] tracking-[0.16em] uppercase text-[#4A5432] mt-2 font-medium">
                Opposite Mayfair Promenade
              </p>

              <div className="filigree-rule max-w-[140px] mx-auto my-3.5">
                <span className="text-[#984B3B] text-[10px]">✦</span>
              </div>

              <p className="font-serif italic text-xs text-[#251611]/75 max-w-[240px]">
                Beneath the historic arcade colonnade &middot; Hazratganj, Lucknow
              </p>
            </div>
          </div>

          {/* Action Buttons: Directions, Call, WhatsApp */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&amp;g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-primary text-xs flex items-center gap-2 shadow-md"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Get Directions</span>
            </a>

            <a
              href="tel:+919876543210"
              className="btn-editorial-secondary text-xs flex items-center gap-1.5 shadow-sm"
            >
              <svg className="w-3.5 h-3.5 text-[#984B3B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Café</span>
            </a>

            <a
              href="https://wa.me/919876543210?text=Hi%20Mio%20Marito,%20I'd%20like%20to%20know%20more%20about%20today's%20gelato%20flavours!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary text-xs flex items-center gap-1.5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary text-xs flex items-center gap-1.5 shadow-sm"
            >
              <span className="text-[#984B3B]">@</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
