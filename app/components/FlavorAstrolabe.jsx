"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const CELESTIAL_PAIRINGS = [
  {
    id: "pistachio-chocolate",
    title: "L'Accordo Ducale",
    subtitle: "The Royal Contrast",
    categoryTarget: "gelato",
    harmony: 99,
    flavorA: {
      name: "Pistacchio Siciliano",
      provenance: "Bronte, Sicily",
      color: "#576F40",
      textColor: "#FAF5E8",
    },
    flavorB: {
      name: "Cioccolato Belga 70%",
      provenance: "Antwerp, Belgium",
      color: "#2C1711",
      textColor: "#FAF5E8",
    },
    tastingNotes:
      "A magnificent counterpoint of warm roasted Bronte nuttiness kissed with sea salt, anchored by the rich, bittersweet depth of single-origin dark cocoa.",
    accents: "Sicilian Sea Salt Crystals · Toasted Pistachio Nib Crunch",
    roman: "I",
  },
  {
    id: "fragola-stracciatella",
    title: "La Notte Romana",
    subtitle: "The Roman Summer",
    categoryTarget: "gelato",
    harmony: 97,
    flavorA: {
      name: "Fragola di Bosco",
      provenance: "Alpine Valleys",
      color: "#9A2A3E",
      textColor: "#FAF5E8",
    },
    flavorB: {
      name: "Stracciatella Tradizionale",
      provenance: "Lombardy, Italy",
      color: "#F3EDE0",
      textColor: "#38251F",
    },
    tastingNotes:
      "Tart, fragrant wild mountain berries dance against sweet alpine cow's milk gelato studded with hand-cracked Belgian dark chocolate flakes.",
    accents: "Wild Berry Compote · Hand-Shaved Dark Chocolate Ribbons",
    roman: "II",
  },
  {
    id: "caramel-espresso",
    title: "L'Alba Fiorentina",
    subtitle: "The Florentine Dawn",
    categoryTarget: "gelato",
    harmony: 99,
    flavorA: {
      name: "Caramello Salato",
      provenance: "Brittany & Guérande",
      color: "#A76B2C",
      textColor: "#FAF5E8",
    },
    flavorB: {
      name: "Caffè Espresso",
      provenance: "Naples Roast Blend",
      color: "#331C12",
      textColor: "#FAF5E8",
    },
    tastingNotes:
      "Slow-kettle brown butter caramel balanced with grey sea salt crystals, kissed by the velvety crema of dark-roasted Italian Arabica.",
    accents: "Guérande Sea Salt Flakes · Freshly Pulled Espresso Reduction",
    roman: "III",
  },
  {
    id: "mango-fiordilatte",
    title: "La Corona di Lucknow",
    subtitle: "The Nawabi & Roman Fusion",
    categoryTarget: "gelato",
    harmony: 98,
    flavorA: {
      name: "Alphonso Mango",
      provenance: "Ratnagiri Orchards",
      color: "#D97F16",
      textColor: "#FAF5E8",
    },
    flavorB: {
      name: "Fior di Latte",
      provenance: "Trentino Alto Adige",
      color: "#F7F5EE",
      textColor: "#38251F",
    },
    tastingNotes:
      "The sun-drenched floral sweetness of royal Indian Alphonso pulp embraced by the serene, clean purity of whipped sweet mountain cream.",
    accents: "Hand-Crushed Ratnagiri Pulp · Fresh Sweet Fior Cream",
    roman: "IV",
  },
  {
    id: "berry-vanilla",
    title: "La Brezza d'Amalfi",
    subtitle: "The Coastal Serenade",
    categoryTarget: "sundaes",
    harmony: 96,
    flavorA: {
      name: "Amalfi Wild Berry",
      provenance: "Sorrento Peninsula",
      color: "#7E1F42",
      textColor: "#FAF5E8",
    },
    flavorB: {
      name: "Bourbon Vanilla",
      provenance: "Madagascar Orchid",
      color: "#DFCE9F",
      textColor: "#38251F",
    },
    tastingNotes:
      "Vibrant, tart brambleberries simmered with Meyer lemon peel, cushioned by aged sweet orchid vanilla bean pods churned in farmhouse milk.",
    accents: "Macerated Coastal Brambles · Crushed Vanilla Bean Dust",
    roman: "V",
  },
  {
    id: "nutella-pistacchio",
    title: "Il Rinascimento Supremo",
    subtitle: "The Ultimate Renaissance",
    categoryTarget: "shakes",
    harmony: 99,
    flavorA: {
      name: "Nutella Nocciola",
      provenance: "Langhe, Piedmont",
      color: "#4A261A",
      textColor: "#FAF5E8",
    },
    flavorB: {
      name: "Pistacchio Puro",
      provenance: "Mount Etna, Sicily",
      color: "#566E3C",
      textColor: "#FAF5E8",
    },
    tastingNotes:
      "Two crowning jewels of Italian confectionery: deep roasted Piedmont hazelnut cocoa whipped into velvet beside pure emerald Sicilian pistachio cream.",
    accents: "Crushed Toasted Piedmont Hazelnuts · Emerald Pistachio Glaze",
    roman: "VI",
  },
];

export default function FlavorAstrolabe({ onSelectCategory }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activePairing = CELESTIAL_PAIRINGS[selectedIndex];

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? CELESTIAL_PAIRINGS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prev) =>
      prev === CELESTIAL_PAIRINGS.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full my-12 p-6 sm:p-8 rounded-[4px] bg-[#FAF5E8] border border-[#CAA563]/60 shadow-[0_10px_35px_rgba(56,37,31,0.08)] overflow-hidden">
      {/* Antique Astrolabe Watermark / Corner Filigree */}
      <div className="absolute -top-12 -right-12 w-48 h-48 opacity-[0.06] pointer-events-none rounded-full border-4 border-[#38251F]" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 opacity-[0.06] pointer-events-none rounded-full border-4 border-[#38251F]" />

      {/* Header Banner */}
      <div className="text-center max-w-[560px] mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38251F]/5 border border-[#CAA563]/50 text-[0.66rem] font-sans font-bold tracking-[0.2em] uppercase text-[#984B3B] mb-2">
          <span>✦</span>
          <span>Il Quadrante dei Sapori</span>
          <span>✦</span>
        </div>
        <h3 className="font-roman text-2xl sm:text-3xl text-[#38251F] tracking-wide">
          The Renaissance Flavor Astrolabe
        </h3>
        <p className="font-serif italic text-sm text-[#737A5A] mt-1">
          Spin the celestial astrolabe to reveal the secret harmonious gelato pairings discovered by our masters.
        </p>
      </div>

      {/* Astrolabe Main Layout: Astrolabe Dial (Left) + Astrolabe Dossier (Right) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Rotating Brass Astrolabe Dial (5 cols) */}
        <div className="md:col-span-5 flex flex-col items-center justify-center select-none">
          <div className="relative w-[260px] h-[260px] sm:w-[290px] sm:h-[290px] flex items-center justify-center">
            {/* Concentric Brass Astrolabe Outer Rim */}
            <div className="absolute inset-0 rounded-full border-2 border-[#CAA563] shadow-[0_0_20px_rgba(202,165,99,0.35),inset_0_0_15px_rgba(202,165,99,0.2)]" />
            <div className="absolute inset-2.5 rounded-full border border-dashed border-[#B59A68]/60" />
            <div className="absolute inset-5 rounded-full border border-[#CAA563]/40" />

            {/* Rotating Star Dial */}
            <motion.div
              animate={{ rotate: -selectedIndex * 60 }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
              className="absolute inset-0 w-full h-full rounded-full"
            >
              {CELESTIAL_PAIRINGS.map((pairing, idx) => {
                const angle = idx * 60;
                const rad = ((angle - 90) * Math.PI) / 180;
                const radius = 104; // distance from center in px
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                const isSelected = idx === selectedIndex;

                return (
                  <button
                    key={pairing.id}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      left: "50%",
                      top: "50%",
                    }}
                    className={`absolute w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-roman text-xs font-bold transition-all duration-300 cursor-pointer border ${
                      isSelected
                        ? "bg-[#38251F] text-[#E6C280] border-[#CAA563] scale-120 shadow-[0_0_14px_rgba(202,165,99,0.7)] z-20"
                        : "bg-[#FAF5E8] text-[#55362B] border-[#CAA563]/60 hover:scale-110 hover:border-[#984B3B] z-10"
                    }`}
                    title={pairing.title}
                  >
                    <span>{pairing.roman}</span>
                  </button>
                );
              })}

              {/* Engraved Astrolabe Radiating Spokes */}
              {[0, 60, 120].map((deg) => (
                <div
                  key={deg}
                  style={{ transform: `rotate(${deg}deg)` }}
                  className="absolute top-1/2 left-3 right-3 h-[1px] bg-[#CAA563]/30 pointer-events-none"
                />
              ))}
            </motion.div>

            {/* Center Astrolabe Cameo Hub with North Compass Pointer */}
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#38251F] to-[#1C120B] border-2 border-[#E5C788] shadow-[0_6px_20px_rgba(30,15,10,0.4)] flex flex-col items-center justify-center text-center p-2">
              <span className="text-[0.6rem] font-sans tracking-[0.25em] text-[#CAA563] uppercase">
                SAPORI
              </span>
              <span className="font-script text-xl sm:text-2xl text-[#FAF5E8] leading-tight">
                Accordo
              </span>
              <span className="font-roman text-xs font-bold text-[#E5C788]">
                {activePairing.roman} / VI
              </span>

              {/* Brass Indicator Pointer (Fixed North at 12 o'clock) */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-[#E5C788] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]" />
            </div>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="flex items-center gap-3 mt-4">
            <button
              type="button"
              onClick={handlePrev}
              className="px-3 py-1.5 rounded-[2px] border border-[#CAA563]/70 bg-white/80 hover:bg-[#38251F] hover:text-[#FAF5E8] text-[#38251F] text-xs font-sans font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-xs"
              aria-label="Previous Astrolabe Pairing"
            >
              ⟨ Prec
            </button>
            <span className="text-[0.72rem] font-roman text-[#B59A68] tracking-widest">
              {selectedIndex + 1} di {CELESTIAL_PAIRINGS.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              className="px-3 py-1.5 rounded-[2px] border border-[#CAA563]/70 bg-white/80 hover:bg-[#38251F] hover:text-[#FAF5E8] text-[#38251F] text-xs font-sans font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-xs"
              aria-label="Next Astrolabe Pairing"
            >
              Succ ⟩
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Astrolabe Pairing Parchment Dossier (7 cols) */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePairing.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white/80 border border-[#CAA563]/50 rounded-[3px] p-5 sm:p-6 shadow-sm relative overflow-hidden"
            >
              {/* Gold Corner Accents */}
              <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-[#CAA563]" />
              <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-[#CAA563]" />
              <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-[#CAA563]" />
              <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-[#CAA563]" />

              {/* Title & Provenance Subtitle */}
              <div className="flex items-start justify-between gap-4 border-b border-[#CAA563]/25 pb-3 mb-4">
                <div>
                  <span className="text-[0.64rem] font-sans font-bold tracking-[0.2em] text-[#984B3B] uppercase block">
                    Accoppiamento Armonico · {activePairing.subtitle}
                  </span>
                  <h4 className="font-script text-3xl sm:text-4xl text-[#38251F] leading-tight">
                    {activePairing.title}
                  </h4>
                </div>
                {/* Harmony Score Badge */}
                <div className="flex flex-col items-end">
                  <div className="px-2.5 py-1 rounded-[2px] bg-[#38251F] text-[#E5C788] font-roman text-xs font-bold border border-[#CAA563] shadow-xs">
                    {activePairing.harmony}% Armonia
                  </div>
                  <span className="text-[0.6rem] font-sans tracking-wider text-[#737A5A] uppercase mt-0.5">
                    Celestial Score
                  </span>
                </div>
              </div>

              {/* The Two Flavour Medallions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {/* Flavour A */}
                <div
                  style={{
                    backgroundColor: activePairing.flavorA.color,
                    color: activePairing.flavorA.textColor,
                  }}
                  className="p-3 rounded-[2px] shadow-sm flex items-center gap-3 border border-black/10"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-roman text-xs font-bold shrink-0">
                    A
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm leading-tight">
                      {activePairing.flavorA.name}
                    </h5>
                    <p className="text-[0.65rem] opacity-85 font-sans tracking-wide">
                      {activePairing.flavorA.provenance}
                    </p>
                  </div>
                </div>

                {/* Flavour B */}
                <div
                  style={{
                    backgroundColor: activePairing.flavorB.color,
                    color: activePairing.flavorB.textColor,
                  }}
                  className="p-3 rounded-[2px] shadow-sm flex items-center gap-3 border border-black/10"
                >
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-roman text-xs font-bold shrink-0">
                    B
                  </div>
                  <div>
                    <h5 className="font-serif font-bold text-sm leading-tight">
                      {activePairing.flavorB.name}
                    </h5>
                    <p className="text-[0.65rem] opacity-85 font-sans tracking-wide">
                      {activePairing.flavorB.provenance}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tasting Profile Description */}
              <p className="font-serif italic text-sm text-[#38251F]/90 leading-relaxed mb-3">
                &ldquo;{activePairing.tastingNotes}&rdquo;
              </p>

              {/* Accents / Finishing Touches */}
              <div className="pt-2.5 border-t border-[#CAA563]/25 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-[0.64rem] font-sans font-bold uppercase tracking-wider text-[#737A5A] block">
                    Garnish &amp; Finish
                  </span>
                  <span className="font-serif text-[#38251F] font-medium">
                    {activePairing.accents}
                  </span>
                </div>

                {/* Explore On Menu Quick Action */}
                {onSelectCategory && (
                  <button
                    type="button"
                    onClick={() => onSelectCategory(activePairing.categoryTarget)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#984B3B] hover:bg-[#38251F] text-[#FAF5E8] text-[0.68rem] font-sans font-bold tracking-[0.14em] uppercase transition-colors cursor-pointer shadow-xs"
                  >
                    <span>View In Menu</span>
                    <span>&darr;</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

