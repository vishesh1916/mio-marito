"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Entrance", href: "#entrance" },
  { label: "Our Story", href: "#story" },
  { label: "The Art of Café", href: "#art-of-cafe" },
  { label: "Il Menù", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export default function EditorialNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section based on scroll position
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMobile = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "translate-y-0 opacity-100 pointer-events-auto bg-[#1E140F]/97 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.5)]"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Accent Line */}
        <div
          className={`w-full h-[1px] transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, #B59A68 30%, #E6C280 50%, #B59A68 70%, transparent 95%)",
          }}
        />

        <div className="max-w-[900px] mx-auto px-5 sm:px-6">
          {/* Main Navbar Row */}
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-[52px]" : "h-[60px]"
            }`}
          >
            {/* Brand Mark */}
            <a
              href="#top"
              className="flex items-center gap-2.5 group flex-shrink-0"
              aria-label="Mio Marito Gelato Home"
            >
              <div
                className={`relative rounded-full border flex items-center justify-center bg-[#FAF5E8] overflow-hidden flex-shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_12px_rgba(230,194,128,0.3)] ${
                  isScrolled
                    ? "w-7 h-7 border-[#E6C280]/70 shadow-sm"
                    : "w-8 h-8 border-[#E6C280]/80 shadow-md"
                }`}
              >
                <Image
                  src="/logo/gelato_cup_emblem.png"
                  alt="Mio Marito Emblem"
                  width={28}
                  height={28}
                  className="object-contain p-0.5"
                />
              </div>

              <div
                className={`relative transition-all duration-500 ${
                  isScrolled ? "h-6 w-[115px]" : "h-7 w-[130px]"
                }`}
              >
                <Image
                  src="/logo/logo_wordmark_light_2x.png"
                  alt="Mio Marito Gelato"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation — Clean Centered Links */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-1.5 text-[0.68rem] tracking-[0.15em] uppercase font-sans font-medium transition-all duration-300 rounded-sm group ${
                      isActive
                        ? "text-[#E6C280]"
                        : "text-[#FAF5E8]/80 hover:text-[#E6C280]"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Active indicator dot */}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#E6C280] transition-all duration-300 ${
                        isActive
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-0"
                      }`}
                    />
                    {/* Hover underline */}
                    <span
                      className={`absolute bottom-0 left-1/2 h-[1px] bg-[#B59A68]/60 transition-all duration-300 -translate-x-1/2 ${
                        isActive
                          ? "w-0"
                          : "w-0 group-hover:w-[70%]"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Right Side: CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Directions CTA */}
              <a
                href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&amp;g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:inline-flex items-center gap-1.5 text-[0.68rem] tracking-[0.12em] uppercase font-sans font-semibold transition-all duration-300 rounded-[3px] border ${
                  isScrolled
                    ? "text-[#FAF5E8] bg-[#984B3B] hover:bg-[#B25F4E] px-4 py-1.5 border-[#FAF5E8]/20 shadow-sm hover:shadow-md"
                    : "text-[#FAF5E8] bg-[#984B3B]/90 hover:bg-[#984B3B] px-4 py-1.5 border-[#FAF5E8]/15 shadow-md hover:shadow-lg"
                }`}
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Directions</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <div className="w-[18px] h-[14px] flex flex-col justify-between relative">
                  <span
                    className={`block h-[1.5px] bg-[#FAF5E8] rounded-full transition-all duration-300 origin-center ${
                      mobileMenuOpen
                        ? "rotate-45 translate-y-[6px]"
                        : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-[#FAF5E8] rounded-full transition-all duration-300 ${
                      mobileMenuOpen
                        ? "opacity-0 scale-x-0"
                        : ""
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] bg-[#FAF5E8] rounded-full transition-all duration-300 origin-center ${
                      mobileMenuOpen
                        ? "-rotate-45 -translate-y-[6px]"
                        : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div
          className={`w-full h-[1px] transition-opacity duration-500 ${
            isScrolled ? "opacity-60" : "opacity-20"
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent 10%, rgba(181,154,104,0.5) 50%, transparent 90%)",
          }}
        />
      </header>

      {/* ================================================================
          MOBILE FULL-SCREEN DRAWER
          ================================================================ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#0E0906]/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobile}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-[53px] bottom-0 bg-[#1E140F]/98 backdrop-blur-2xl z-40 lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col items-center justify-center min-h-full py-12 px-8">
                {/* Logo in drawer */}
                <div className="flex flex-col items-center gap-3 mb-10">
                  <div className="relative w-12 h-12 rounded-full border-2 border-[#E6C280]/60 flex items-center justify-center bg-[#FAF5E8] overflow-hidden shadow-lg">
                    <Image
                      src="/logo/gelato_cup_emblem.png"
                      alt="Mio Marito Emblem"
                      width={40}
                      height={40}
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div className="relative h-8 w-[170px]">
                    <Image
                      src="/logo/logo_wordmark_light_2x.png"
                      alt="Mio Marito Gelato"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[0.6rem] tracking-[0.35em] uppercase text-[#B59A68]/70 font-sans mt-0.5">
                    Gelateria · Hazratganj
                  </p>
                </div>

                {/* Navigation Links with staggered animation */}
                <nav className="flex flex-col items-center w-full max-w-[280px]">
                  {navItems.map((item, i) => {
                    const isActive = activeSection === item.href;
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={closeMobile}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.05 + i * 0.04,
                          ease: "easeOut",
                        }}
                        className={`w-full text-center py-3 text-[0.82rem] tracking-[0.2em] uppercase font-roman transition-colors border-b border-white/[0.06] ${
                          isActive
                            ? "text-[#E6C280]"
                            : "text-[#FAF5E8]/85 hover:text-[#E6C280]"
                        }`}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.35 }}
                  className="flex items-center gap-3 mt-8"
                >
                  <a
                    href="#menu"
                    onClick={closeMobile}
                    className="btn-editorial-primary text-xs py-2.5 px-6"
                  >
                    Il Menù
                  </a>
                  <a
                    href="https://maps.google.com/?q=Hazratganj,+Lucknow,+Uttar+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMobile}
                    className="btn-editorial-secondary text-xs py-2.5 px-6 !text-[#FAF5E8] !bg-white/10 !border-white/15"
                  >
                    Directions
                  </a>
                </motion.div>

                {/* Contact info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.45 }}
                  className="mt-8 flex items-center gap-4 text-[0.65rem] text-[#FAF5E8]/50 font-sans"
                >
                  <a
                    href="tel:+919876543210"
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                  <span className="text-[#B59A68]/30">·</span>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#E6C280] transition-colors"
                  >
                    @miomaritogelato
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
