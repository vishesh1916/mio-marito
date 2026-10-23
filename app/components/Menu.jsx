"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ==========================================
   MENU DATA (JSON-like, easy to maintain)
   ========================================== */
const menuData = {
  gelato: {
    label: "Gelato Cups",
    icon: "🍨",
    items: [
      { name: "Pistacchio", nameIt: "Pistacchio", price: "₹189", desc: "Sicilian pistachio, rich and nutty" },
      { name: "Cioccolato Fondente", nameIt: "Cioccolato Fondente", price: "₹179", desc: "Dark Belgian chocolate, velvety smooth" },
      { name: "Fragola", nameIt: "Fragola", price: "₹169", desc: "Fresh strawberry with berry swirl" },
      { name: "Mango Alphonso", nameIt: "Mango Alphonso", price: "₹179", desc: "Indian Alphonso mango, tropical bliss" },
      { name: "Nocciola", nameIt: "Nocciola", price: "₹189", desc: "Roasted hazelnut, Piedmontese style" },
      { name: "Stracciatella", nameIt: "Stracciatella", price: "₹179", desc: "Vanilla cream with dark chocolate shards" },
      { name: "Limone", nameIt: "Limone", price: "₹159", desc: "Zesty lemon sorbet, refreshingly light" },
      { name: "Vaniglia Madagascar", nameIt: "Vaniglia Madagascar", price: "₹169", desc: "Real Madagascar vanilla bean" },
      { name: "Caramello Salato", nameIt: "Caramello Salato", price: "₹179", desc: "Salted caramel with toffee crunch" },
      { name: "Panna Cotta", nameIt: "Panna Cotta", price: "₹189", desc: "Classic Italian custard cream" },
    ],
  },
  cones: {
    label: "Cones",
    icon: "🍦",
    items: [
      { name: "Single Scoop Cone", price: "₹149", desc: "One flavour in a crispy waffle cone" },
      { name: "Double Scoop Cone", price: "₹219", desc: "Two flavours, handcrafted waffle cone" },
      { name: "Triple Scoop Tower", price: "₹289", desc: "Three flavours stacked in a jumbo cone" },
      { name: "Waffle Bowl", price: "₹249", desc: "Two scoops in a fresh-made waffle bowl" },
      { name: "Bambino Cone", price: "₹99", desc: "Kid-sized single scoop, perfect for little ones" },
    ],
  },
  shakes: {
    label: "Shakes & Smoothies",
    icon: "🥤",
    items: [
      { name: "Gelato Shake Classic", price: "₹229", desc: "Blended gelato, milk, and cream — choose any flavour" },
      { name: "Nutella Dream", price: "₹259", desc: "Hazelnut gelato blended with real Nutella" },
      { name: "Tropical Mango", price: "₹219", desc: "Fresh mango, coconut cream, and mango gelato" },
      { name: "Berry Blast", price: "₹229", desc: "Mixed berries with strawberry gelato and yogurt" },
      { name: "Affogato Shake", price: "₹249", desc: "Espresso, vanilla gelato, and a hint of caramel" },
      { name: "Oreo Cookie Monster", price: "₹239", desc: "Vanilla gelato blended with crushed Oreos" },
    ],
  },
  coffee: {
    label: "Caffè",
    icon: "☕",
    items: [
      { name: "Espresso", nameIt: "Caffè Espresso", price: "₹129", desc: "Bold, aromatic single-origin shot" },
      { name: "Cappuccino", nameIt: "Cappuccino", price: "₹169", desc: "Classic frothy Italian cappuccino" },
      { name: "Caffè Latte", nameIt: "Caffè Latte", price: "₹179", desc: "Smooth espresso with steamed milk" },
      { name: "Affogato", nameIt: "Affogato", price: "₹199", desc: "Hot espresso poured over vanilla gelato" },
      { name: "Iced Caffè Mocha", price: "₹199", desc: "Chilled espresso with chocolate and cream" },
      { name: "Italian Hot Chocolate", price: "₹189", desc: "Thick, rich European-style hot chocolate" },
    ],
  },
};

const categories = Object.keys(menuData);

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState("gelato");
  const [sectionRef, sectionInView] = useInView(0.05);
  const items = menuData[activeTab].items;

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-parchment texture-paper"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-terracotta text-sm tracking-[0.4em] uppercase mb-4 italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Il nostro menù
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-espresso tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explore Our Menu
          </motion.h2>

          <div className="divider-ornate mt-6 max-w-md mx-auto">
            <span className="ornament text-terracotta">✦</span>
          </div>
        </div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-14"
          role="tablist"
          aria-label="Menu categories"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeTab === cat}
              aria-controls={`menu-panel-${cat}`}
              onClick={() => setActiveTab(cat)}
              className={`
                px-5 py-3 md:px-7 md:py-3 rounded-full text-sm md:text-base font-semibold tracking-wider uppercase transition-all duration-300
                ${
                  activeTab === cat
                    ? "bg-terracotta text-white shadow-lg shadow-terracotta/25"
                    : "bg-white/60 text-espresso-light hover:bg-white hover:shadow-md border border-gold/20"
                }
              `}
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <span className="mr-2">{menuData[cat].icon}</span>
              {menuData[cat].label}
            </button>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`menu-panel-${activeTab}`}
            role="tabpanel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5"
          >
            {items.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="menu-card group bg-white/80 backdrop-blur-sm rounded-2xl p-5 md:p-6 border border-gold/10 flex items-start gap-4"
              >
                {/* Color dot / visual accent */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-terracotta/10 to-gold/10 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {menuData[activeTab].icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3
                      className="text-base md:text-lg font-semibold text-espresso truncate"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="flex-shrink-0 text-terracotta font-bold text-base md:text-lg"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {item.price}
                    </span>
                  </div>

                  {item.nameIt && item.nameIt !== item.name && (
                    <p
                      className="text-gold-dark text-xs italic mt-0.5 tracking-wide"
                      style={{ fontFamily: "var(--font-cormorant)" }}
                    >
                      {item.nameIt}
                    </p>
                  )}

                  <p
                    className="text-charcoal/60 text-sm mt-1.5 leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 relative rounded-3xl overflow-hidden aspect-[21/9] max-w-4xl mx-auto shadow-2xl shadow-espresso/15"
        >
          <Image
            src="/images/gelato-signature.jpg"
            alt="Artisanal gelato with pistachio, chocolate, and strawberry scoops in a waffle bowl"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-espresso/30 flex items-center justify-start p-8 md:p-14">
            <div>
              <p
                className="text-gold-light text-sm tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Crafted with Love
              </p>
              <p
                className="text-white text-2xl md:text-3xl font-bold max-w-sm leading-snug"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Every scoop is a journey to Italy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
