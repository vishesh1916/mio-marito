"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BotanicalSprig } from "./BotanicalAccents";

/* Verified & Curated Gelateria Menu Categories */
const menuCategories = [
  { id: "gelato", label: "Gelato Cups" },
  { id: "cones", label: "Artisanal Cones" },
  { id: "sundaes", label: "Sundaes & Bowls" },
  { id: "shakes", label: "Shakes & Smoothies" },
  { id: "coffee", label: "Caffè & Affogato" },
];

const menuData = {
  gelato: [
    {
      name: "Pistacchio Siciliano",
      italian: "Pistacchio di Bronte",
      desc: "Authentic roasted Sicilian pistachio with velvety churned milk cream.",
      price: "₹189",
    },
    {
      name: "Cioccolato Fondente",
      italian: "Cioccolato Belga 70%",
      desc: "Deep, rich dark chocolate with delicate cocoa shavings.",
      price: "₹179",
    },
    {
      name: "Fragola di Bosco",
      italian: "Fragola e Lamponi",
      desc: "Wild strawberry sorbet with a slow berry reduction swirl.",
      price: "₹169",
    },
    {
      name: "Mango Alphonso",
      italian: "Mango Tropicale",
      desc: "Sun-ripened Alphonso mango blended with Italian dairy.",
      price: "₹179",
    },
    {
      name: "Stracciatella Tradizionale",
      italian: "Crema & Cioccolato",
      desc: "Fior di latte cream studded with shards of bittersweet chocolate.",
      price: "₹179",
    },
    {
      name: "Caramello Salato",
      italian: "Caramello al Burro",
      desc: "Slow-cooked golden butter caramel with sea salt crystals.",
      price: "₹189",
    },
  ],
  cones: [
    {
      name: "Single Scoop Crispy Cone",
      italian: "Cono Semplice",
      desc: "Handcrafted waffle cone with your choice of artisanal flavour.",
      price: "₹149",
    },
    {
      name: "Double Scoop Waffle Cone",
      italian: "Cono Doppio",
      desc: "Two generous scoops stacked in a crisp rolled waffle cone.",
      price: "₹219",
    },
    {
      name: "Chocolate Dipped Cone",
      italian: "Cono al Cioccolato",
      desc: "Waffle cone rimmed with Belgian chocolate and crushed nuts.",
      price: "₹189",
    },
    {
      name: "Bambino Cup or Cone",
      italian: "Piccolo Bambino",
      desc: "A small joyful single scoop designed for younger guests.",
      price: "₹99",
    },
  ],
  sundaes: [
    {
      name: "Coppa Mio Marito Signature",
      italian: "Coppa della Casa",
      desc: "Pistachio and dark chocolate scoops, warm fudge, roasted hazelnuts, and whipped panna.",
      price: "₹289",
    },
    {
      name: "Amalfi Berry Waffle Bowl",
      italian: "Cestino ai Frutti di Bosco",
      desc: "Fresh baked waffle bowl filled with wild berry gelato and berry compote.",
      price: "₹259",
    },
    {
      name: "Tiramisù Gelato Sundae",
      italian: "Coppa al Tiramisù",
      desc: "Espresso-soaked sponge biscuit, mascarpone gelato, and dark cocoa dust.",
      price: "₹269",
    },
  ],
  shakes: [
    {
      name: "Artisanal Gelato Shake",
      italian: "Frappé di Gelato",
      desc: "Thick hand-spun shake blended from any two freshly churned gelato tubs.",
      price: "₹239",
    },
    {
      name: "Nutella Nocciola Shake",
      italian: "Frappé alla Nutella",
      desc: "Roasted hazelnut gelato whipped with pure Nutella and rich milk.",
      price: "₹259",
    },
    {
      name: "Alphonso Mango Smoothie",
      italian: "Frullato di Mango",
      desc: "Chilled pure mango puree, coconut cream, and refreshing sorbet.",
      price: "₹229",
    },
  ],
  coffee: [
    {
      name: "Classic Italian Affogato",
      italian: "Affogato al Caffè",
      desc: "Fresh double espresso shot poured over a scoop of artisanal vanilla gelato.",
      price: "₹199",
    },
    {
      name: "Espresso Solo",
      italian: "Caffè Espresso",
      desc: "Bold single origin Italian roast espresso with a thick golden crema.",
      price: "₹129",
    },
    {
      name: "Cappuccino Italiano",
      italian: "Cappuccino Classico",
      desc: "Equal parts espresso, steamed whole milk, and micro-foam froth.",
      price: "₹169",
    },
    {
      name: "Cioccolata Calda Tradizionale",
      italian: "Cioccolata Densa",
      desc: "Thick European-style sipping hot chocolate topped with panna.",
      price: "₹189",
    },
  ],
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("gelato");
  const items = menuData[activeCategory] || [];

  return (
    <section id="menu" className="relative w-full py-16 px-6 sm:px-12 bg-[#F4EFE6] overflow-hidden">
      <div className="max-w-[760px] mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-10 relative">
          <div className="absolute top-0 right-10 hidden sm:block">
            <BotanicalSprig className="w-10 h-10 opacity-60" />
          </div>

          {/* Official Artisanal Seal Wordmark */}
          <div className="flex flex-col items-center justify-center mb-2">
            <div className="relative w-44 sm:w-52 h-11">
              <Image
                src="/logo/logo_wordmark_transparent.png"
                alt="Mio Marito Gelato"
                fill
                className="object-contain"
              />
            </div>
            <div className="filigree-rule max-w-[140px] my-1">
              <span className="text-[#B59A68] text-[8px]">✦</span>
            </div>
          </div>

          <h2 className="font-script text-5xl sm:text-6xl text-[#38251F] tracking-wide">
            Il Menù
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#984B3B] mt-1">
            A little something to savour.
          </p>
          <p className="text-[0.72rem] tracking-[0.2em] uppercase text-[#737A5A] font-sans mt-2">
            Freshly Churned Gelato &middot; Handcrafted Cones &middot; Italian Caffè
          </p>
        </div>

        {/* Category Filters (Refined Editorial Tabs) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`menu-tab-btn ${
                activeCategory === cat.id ? "menu-tab-active" : "menu-tab-inactive"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Composition: Real Photo on Left, Menu Listings on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Featured Gelato Photo (Left - 5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[280px] aspect-[3/4] overflow-hidden antique-frame rounded-[2px] shadow-md">
              <div className="relative w-full h-full">
                <Image
                  src="/cafe/gelato_counter.jpg"
                  alt="Real Artisanal Gelato Counter Display at Mio Marito Gelato"
                  fill
                  className="object-cover object-center"
                  sizes="320px"
                  quality={85}
                />
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-[#737A5A]">
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image
                  src="/logo/gelato_cup_emblem.png"
                  alt="Mio Marito Gelato Cup"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </div>
              <p className="font-serif italic text-xs text-[#737A5A] text-center">
                Freshly churned in small batches daily at Mio Marito
              </p>
            </div>
          </div>

          {/* Menu Items Listing (Right - 7 cols) */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {items.map((item, idx) => (
                  <div
                    key={idx}
                    className="pb-3 border-b border-[#B59A68]/20 last:border-b-0"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-roman text-sm sm:text-base font-semibold text-[#38251F] tracking-wide">
                        {item.name}
                      </h3>
                      <div className="flex-1 mx-2 border-b border-dotted border-[#B59A68]/45 relative -top-1" />
                      <span className="font-serif font-bold text-sm sm:text-base text-[#984B3B] whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>

                    {item.italian && (
                      <p className="font-serif italic text-xs text-[#984B3B] mt-0.5">
                        {item.italian}
                      </p>
                    )}

                    <p className="font-serif text-xs sm:text-[0.82rem] text-[#38251F]/70 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            <p className="text-[0.7rem] font-sans text-[#737A5A] italic mt-6 pt-2 border-t border-[#B59A68]/15">
              * Flavour selections rotate with fresh seasonal ingredients. All prices in Indian Rupees (₹).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
