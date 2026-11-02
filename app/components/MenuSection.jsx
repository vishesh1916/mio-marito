"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BotanicalSprig } from "./BotanicalAccents";
import ScrollReveal from "./animations/ScrollReveal";
import FlavorAstrolabe from "./FlavorAstrolabe";

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

const categoryVisuals = {
  gelato: {
    src: "/cafe/gelato_counter.jpg",
    alt: "Artisanal gelato displayed at Mio Marito's counter",
    caption: "Freshly churned in small batches daily at Mio Marito",
  },
  cones: {
    src: "/cafe/boy_gelato.jpg",
    alt: "A gelato cone enjoyed at Mio Marito",
    caption: "Hand-rolled cones, made for a gentle stroll through the Ganj",
  },
  sundaes: {
    src: "/images/gelato-signature.jpg",
    alt: "A signature gelato presentation at Mio Marito",
    caption: "Layered slowly, finished at the counter, served with ceremony",
  },
  shakes: {
    src: "/cafe/lady_gelato.jpg",
    alt: "A guest enjoying a frozen treat at Mio Marito",
    caption: "A little pause in the day, blended to order",
  },
  coffee: {
    src: "/cafe/interior_chandelier_counter.jpg",
    alt: "The chandelier-lit counter at Mio Marito",
    caption: "Italian coffee and gelato, beneath the glow of the café",
  },
};

const categoryDetails = {
  gelato: {
    dietary: ["Vegetarian", "Contains dairy"],
    ingredients: "Small-batch dairy base, seasonal fruit or Italian inclusions",
    pairing: "Pair with an espresso solo",
  },
  cones: {
    dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
    ingredients: "Fresh waffle, artisanal gelato, and a crisp caramelised finish",
    pairing: "Pair with a slow walk through Hazratganj",
  },
  sundaes: {
    dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
    ingredients: "Freshly layered gelato, house garnish, and seasonal accompaniments",
    pairing: "Pair with a cappuccino italiano",
  },
  shakes: {
    dietary: ["Vegetarian", "Contains dairy"],
    ingredients: "Hand-spun gelato, chilled milk, and house-made finishing touches",
    pairing: "Pair with a shared table and an extra spoon",
  },
  coffee: {
    dietary: ["Vegetarian"],
    ingredients: "Italian roast coffee and thoughtfully sourced café ingredients",
    pairing: "Pair with a single scoop of pistachio",
  },
};

const itemDetails = {
  "Pistacchio Siciliano": {
    dietary: ["Vegetarian", "Contains dairy", "Contains nuts"],
    ingredients: "Roasted pistachio, milk cream, and a light mineral finish",
    pairing: "Pair with an espresso solo",
    chefFavorite: true,
  },
  "Cioccolato Fondente": {
    dietary: ["Vegetarian", "Contains dairy", "Gluten free"],
    ingredients: "70% Belgian chocolate, milk cream, and fine cocoa",
    pairing: "Pair with a cappuccino italiano",
  },
  "Fragola di Bosco": {
    dietary: ["Vegan", "Dairy free", "Gluten free"],
    ingredients: "Wild strawberry, raspberry reduction, and cane sugar",
    pairing: "Pair with sparkling water and a sunny afternoon",
  },
  "Mango Alphonso": {
    dietary: ["Vegetarian", "Contains dairy", "Gluten free"],
    ingredients: "Alphonso mango, milk cream, and a touch of vanilla",
    pairing: "Pair with a butter biscuit",
  },
  "Stracciatella Tradizionale": {
    dietary: ["Vegetarian", "Contains dairy", "Gluten free"],
    ingredients: "Fior di latte, dark chocolate shards, and fresh cream",
    pairing: "Pair with a double espresso",
  },
  "Caramello Salato": {
    dietary: ["Vegetarian", "Contains dairy", "Gluten free"],
    ingredients: "Brown butter caramel, sea salt, and velvety milk cream",
    pairing: "Pair with a cappuccino italiano",
    chefFavorite: true,
  },
  "Chocolate Dipped Cone": {
    dietary: ["Vegetarian", "Contains dairy", "Contains gluten", "Contains nuts"],
    ingredients: "Waffle cone, Belgian chocolate, and crushed roasted nuts",
    pairing: "Pair with pistachio or stracciatella",
    chefFavorite: true,
  },
  "Coppa Mio Marito Signature": {
    dietary: ["Vegetarian", "Contains dairy", "Contains nuts", "Contains gluten"],
    ingredients: "Pistachio, dark chocolate, warm fudge, hazelnut, and panna",
    pairing: "Pair with a shared second spoon",
    chefFavorite: true,
  },
  "Tiramisù Gelato Sundae": {
    dietary: ["Vegetarian", "Contains dairy", "Contains gluten"],
    ingredients: "Mascarpone gelato, espresso-soaked biscuit, and cocoa",
    pairing: "Pair with an espresso solo",
  },
  "Nutella Nocciola Shake": {
    dietary: ["Vegetarian", "Contains dairy", "Contains nuts"],
    ingredients: "Hazelnut gelato, Nutella, and rich chilled milk",
    pairing: "Pair with a quiet afternoon",
    chefFavorite: true,
  },
  "Classic Italian Affogato": {
    dietary: ["Vegetarian", "Contains dairy", "Gluten free"],
    ingredients: "Vanilla gelato and a freshly pulled double espresso",
    pairing: "Pair with the pistachio biscotti at the counter",
    chefFavorite: true,
  },
};

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("gelato");
  const items = menuData[activeCategory] || [];
  const visual = categoryVisuals[activeCategory];

  return (
    <section id="menu" className="relative w-full py-16 px-6 sm:px-12 bg-[#F4EFE6] overflow-hidden">
      <div className="max-w-[760px] mx-auto">
        {/* Section Heading & Subtitle */}
        <ScrollReveal variant="fadeUp" className="text-center mb-10 relative">
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
                sizes="208px"
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
        </ScrollReveal>

        {/* Category Filters with High-Contrast Active State & Sliding Gold Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10" role="tablist">
          {menuCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2.5 rounded-[2px] text-[0.72rem] sm:text-[0.76rem] font-sans font-bold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer border overflow-hidden ${
                  isActive
                    ? "bg-[#38251F] text-[#FAF5E8] border-[#38251F] shadow-md"
                    : "bg-[#FAF5E8]/90 text-[#38251F] border-[#B59A68]/50 hover:text-[#984B3B] hover:border-[#984B3B]/60 hover:bg-[#FAF5E8]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeMenuTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#B59A68] via-[#F3D79B] to-[#B59A68]"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Editorial Composition: Real Photo on Left, Menu Listings on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Featured Gelato Photo (Left - 5 cols) */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[280px] aspect-[3/4] overflow-hidden antique-frame rounded-[2px] shadow-md group">
              <div className="relative w-full h-full">
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
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
                {visual.caption}
              </p>
            </div>
          </div>

          {/* Menu Items Listing (Right - 7 cols) with Smooth Stagger Transitions */}
          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-4"
              >
                {items.map((item, idx) => {
                  const details = { ...categoryDetails[activeCategory], ...itemDetails[item.name] };
                  return (
                  <div
                    key={`${activeCategory}-${idx}`}
                    className="pb-3 border-b border-[#B59A68]/20 last:border-b-0 group"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-roman text-sm sm:text-base font-semibold text-[#38251F] tracking-wide group-hover:text-[#984B3B] transition-colors flex items-center gap-2">
                        {item.name}
                        {details.chefFavorite && (
                          <span className="font-sans text-[0.52rem] font-bold tracking-[0.12em] uppercase text-[#984B3B] border border-[#984B3B]/35 bg-[#984B3B]/5 px-1.5 py-0.5 whitespace-nowrap">
                            Chef&apos;s favourite
                          </span>
                        )}
                      </h3>

                      {/* Dotted Line */}
                      <div className="flex-1 mx-2 overflow-hidden relative -top-1">
                        <div className="w-full border-b border-dotted border-[#B59A68]/50 group-hover:border-[#984B3B]/60 transition-colors" />
                      </div>

                      {/* Price with Subtle Golden Pulse on Hover */}
                      <span className="font-serif font-bold text-sm sm:text-base text-[#984B3B] group-hover:text-[#CAA563] group-hover:scale-105 transition-all duration-200 whitespace-nowrap">
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

                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {details.dietary.map((marker) => (
                        <span
                          key={marker}
                          className="border border-[#737A5A]/30 bg-[#737A5A]/5 px-1.5 py-0.5 font-sans text-[0.55rem] font-semibold uppercase tracking-[0.08em] text-[#585F42]"
                        >
                          {marker}
                        </span>
                      ))}
                    </div>
                    <p className="mt-2 font-sans text-[0.63rem] leading-relaxed text-[#38251F]/65">
                      <span className="font-semibold uppercase tracking-[0.1em] text-[#737A5A]">Ingredients</span>
                      {" · "}{details.ingredients}
                    </p>
                    <p className="font-serif text-xs italic text-[#984B3B] mt-1">
                      {details.pairing}
                    </p>
                  </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            <p className="text-[0.7rem] font-sans text-[#737A5A] italic mt-6 pt-2 border-t border-[#B59A68]/15">
              * Flavour selections rotate with fresh seasonal ingredients. Please ask our team for the latest allergen information. All prices in Indian Rupees (₹).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
