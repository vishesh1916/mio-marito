"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";

const galleryItems = [
  { id: 1, src: "/cafe/entrance.jpg", alt: "The Colonnade Portal — Real entrance of Mio Marito Gelato in Hazratganj with blue arches and glowing baroque signboard", title: "The Colonnade Portal", subtitle: "Hazratganj facade with violet & cornflower blue arches and illuminated signboard", aspect: "aspect-[4/3]", colSpan: "col-span-12 md:col-span-6", badge: "Entrance" },
  { id: 2, src: "/cafe/interior_chandelier_counter.jpg", alt: "Galleria dei Lampadari — Tall double-height ceiling, glowing brass chandeliers, and illuminated blue gelato counter", title: "Galleria dei Lampadari", subtitle: "High ceiling dining hall with glowing brass chandeliers & blue-lit counter", aspect: "aspect-[3/4]", colSpan: "col-span-12 sm:col-span-6 md:col-span-6", badge: "Dining Hall" },
  { id: 3, src: "/cafe/arched_niche_seating.jpg", alt: "L'Angolo Barocco — Trompe-l'œil arch mural with baroque niche, ornate mirrors, and bistro tables", title: "L'Angolo Barocco", subtitle: "Baroque niche mural, antique gilded mirrors, and marble bistro tables", aspect: "aspect-[3/4]", colSpan: "col-span-12 sm:col-span-6 md:col-span-6", badge: "Bistro Corner" },
  { id: 4, src: "/cafe/salon_mirrors_tables.jpg", alt: "Galleria degli Specchi — Wide dining hall with grand mirrored archway and flying ceiling cherubs", title: "Galleria degli Specchi", subtitle: "Grand trompe-l'œil arch mirror and cherubs painted on the ceiling", aspect: "aspect-[4/3]", colSpan: "col-span-12 md:col-span-6", badge: "Architecture" },
  { id: 5, src: "/cafe/fresco_mural.png", alt: "Il Giardino Toscano — Hand-painted mural of classical figures in Renaissance garb enjoying artisanal gelato in a garden", title: "Il Giardino Toscano", subtitle: "Classical Italian figures savoring gelato cones beneath cypress trees", aspect: "aspect-[16/10]", colSpan: "col-span-12 md:col-span-7", badge: "Fresco Mural" },
  { id: 6, src: "/cafe/gelato_counter.jpg", alt: "I Pozzetti Artigianali — Stainless steel display counter with fresh pistachio, chocolate ribbons, and candied fruits", title: "I Pozzetti Artigianali", subtitle: "Freshly churned artisanal gelato served in traditional pozzetti tins", aspect: "aspect-[4/5]", colSpan: "col-span-12 md:col-span-5", badge: "Gelato Display" },
];

export default function StepInsideGallery() {
  return (
    <section id="gallery" className="relative w-full overflow-hidden bg-[#F4EFE6] px-6 py-16 sm:px-12 sm:py-20">
      <div className="mx-auto max-w-[760px]">
        <ScrollReveal variant="fadeUp" className="mb-12 text-center">
          <p className="font-script mb-1 text-3xl text-[#984B3B] sm:text-4xl">Una galleria vivente</p>
          <h2 className="font-roman text-3xl font-normal uppercase tracking-wide text-[#38251F] sm:text-4xl md:text-5xl">Step Inside</h2>
          <div className="filigree-rule mx-auto my-3 max-w-[280px]"><span className="text-xs text-[#B59A68]">✦</span></div>
          <p className="font-serif mx-auto max-w-lg text-sm italic text-[#38251F]/75 sm:text-base">
            Explore the authentic spaces of Mio Marito Gelato in Hazratganj — from our blue arched entrance to high frescoed ceilings and brass chandeliers.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-12 items-start gap-5 sm:gap-6">
          {galleryItems.map((item, index) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className={`${item.colSpan} group`}
            >
              <div className="antique-frame overflow-hidden rounded-[2px] shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_28px_rgba(181,154,104,0.25)]">
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-[#EAE2CD]`}>
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 450px" quality={88} />
                </div>
              </div>
              <figcaption className="mt-2.5 px-1">
                <span className="font-roman mb-0.5 block text-[0.65rem] uppercase tracking-[0.2em] text-[#984B3B]">
                  Tavola {["I", "II", "III", "IV", "V", "VI"][index]} &middot; {item.badge}
                </span>
                <h3 className="font-roman text-xs font-semibold tracking-wide text-[#38251F] transition-colors group-hover:text-[#984B3B] sm:text-sm">{item.title}</h3>
                <p className="font-serif mt-0.5 text-xs italic leading-relaxed text-[#737A5A]">{item.subtitle}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
