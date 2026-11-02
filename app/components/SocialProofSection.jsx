"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";

const guestNotes = [
  "A slow scoop, a good coffee, and an unhurried corner of the Ganj.",
  "Come for a cone; stay for the frescoes, the conversation, and one more flavour.",
  "An afternoon ritual for anyone who believes dessert deserves a little ceremony.",
];

const instagramFrames = [
  { src: "/cafe/lady_gelato.jpg", alt: "A guest enjoying gelato at Mio Marito" },
  { src: "/cafe/interior_chandelier_counter.jpg", alt: "Mio Marito's chandelier-lit gelato counter" },
  { src: "/cafe/boy_gelato.jpg", alt: "A young guest with a gelato at Mio Marito" },
  { src: "/cafe/arched_niche_seating.jpg", alt: "A frescoed seating nook at Mio Marito" },
];

const googleReviewsUrl =
  "https://www.google.com/search?q=Mio+Marito+Gelato+Hazratganj+Lucknow";
const instagramUrl = "https://www.instagram.com/miomaritogelato.india/";

export default function SocialProofSection() {
  return (
    <section id="press" className="relative overflow-hidden bg-[#EAE2D3] px-6 py-16 sm:px-12 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B59A68]/60 to-transparent" />
      <div className="mx-auto max-w-[760px]">
        <ScrollReveal variant="fadeUp" className="mx-auto max-w-xl text-center">
          <p className="font-script text-3xl text-[#984B3B] sm:text-4xl">Dalla città, con amore</p>
          <h2 className="font-roman mt-1 text-3xl font-normal uppercase tracking-wide text-[#38251F] sm:text-4xl">
            A little local affection
          </h2>
          <div className="filigree-rule mx-auto my-3 max-w-[250px]">
            <span className="text-xs text-[#B59A68]">✦</span>
          </div>
          <p className="font-serif text-sm italic leading-relaxed text-[#38251F]/75 sm:text-base">
            An emerging gelateria in the old heart of Lucknow, made for unhurried afternoons,
            favourite flavours, and a table worth lingering at.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {guestNotes.map((note, index) => (
            <motion.blockquote
              key={note}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative border border-[#B59A68]/35 bg-[#FAF5E8]/80 px-5 py-6 text-center shadow-[0_5px_18px_rgba(56,37,31,0.08)]"
            >
              <span className="font-script absolute -top-5 left-1/2 -translate-x-1/2 text-5xl leading-none text-[#B59A68]">
                “
              </span>
              <p className="font-serif text-base italic leading-relaxed text-[#38251F]">{note}</p>
              <footer className="mt-4 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-[#737A5A]">
                Guestbook note · Demo preview
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden border border-[#B59A68]/40 bg-[#38251F] sm:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-between p-7 sm:p-8">
            <div>
              <p className="font-sans text-[0.65rem] uppercase tracking-[0.22em] text-[#E6C280]">Google reviews</p>
              <h3 className="font-roman mt-2 text-xl tracking-wide text-[#FAF5E8]">Tell us about your visit.</h3>
              <p className="font-serif mt-3 text-sm leading-relaxed text-[#FAF5E8]/75">
                Follow the latest notes from guests, then leave a little love after your own
                afternoon in Hazratganj.
              </p>
            </div>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 border border-[#E6C280]/60 px-4 py-2.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#FAF5E8] transition-colors hover:bg-[#E6C280] hover:text-[#38251F]"
            >
              Google reviews <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="relative min-h-[220px] border-t border-[#B59A68]/30 sm:border-t-0 sm:border-l">
            <Image
              src="/cafe/salon_mirrors_tables.jpg"
              alt="Mirrored bistro tables inside Mio Marito Gelato"
              fill
              className="object-cover opacity-90"
              sizes="(max-width: 640px) 100vw, 360px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#251611]/65 to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 font-serif text-sm italic text-[#FAF5E8]">
              Every visit leaves a small story behind.
            </p>
          </div>
        </div>

        <div className="mt-12 border-y border-[#B59A68]/35 py-8 sm:py-10">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-sans text-[0.64rem] uppercase tracking-[0.2em] text-[#737A5A]">Seen around Lucknow</p>
              <h3 className="font-roman mt-1 text-lg tracking-wide text-[#38251F]">In the press</h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
              <a
                href="https://timesofindia.indiatimes.com/city/lucknow/from-street-food-to-startups-gen-z-is-flexing-on-lucknows-food-scene/articleshow/134908771.cms"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#B59A68]/50 bg-[#FAF5E8]/60 px-4 py-2 font-roman text-[0.68rem] tracking-[0.12em] text-[#38251F] transition-colors hover:border-[#984B3B] hover:text-[#984B3B]"
              >
                The Times of India ↗
              </a>
              <a
                href="https://www.lucknowwants.com/new-in-town"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#B59A68]/50 bg-[#FAF5E8]/60 px-4 py-2 font-roman text-[0.68rem] tracking-[0.12em] text-[#38251F] transition-colors hover:border-[#984B3B] hover:text-[#984B3B]"
              >
                Lucknow Wants ↗
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-script text-3xl text-[#984B3B] sm:text-4xl">Dal nostro diario</p>
          <h3 className="font-roman mt-1 text-2xl uppercase tracking-wide text-[#38251F] sm:text-3xl">Follow the gelateria</h3>
          <p className="font-serif mx-auto mt-3 max-w-md text-sm italic text-[#38251F]/75">
            Fresh scoops, small rituals, and the evolving story of Mio Marito in Hazratganj.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {instagramFrames.map((frame, index) => (
              <a
                key={frame.src}
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden border border-[#B59A68]/40 bg-[#D8CEBA]"
                aria-label={`Open Mio Marito on Instagram, photograph ${index + 1}`}
              >
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 185px"
                />
                <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-[#251611]/70 via-transparent to-transparent pb-3 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white opacity-0 transition-opacity group-hover:opacity-100">
                  @miomaritogelato.india
                </span>
              </a>
            ))}
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#984B3B] transition-colors hover:text-[#38251F]"
          >
            Follow @miomaritogelato.india <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
