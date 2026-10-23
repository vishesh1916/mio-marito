"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1A0E0A] text-warm-white border-t border-gold/15 pt-16 pb-28 md:pb-16 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-24 bg-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="space-y-4 lg:col-span-1">
            <a href="#home" className="inline-block group">
              <span
                className="text-2xl font-bold tracking-[0.15em] text-white block uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                MIO MARITO
              </span>
              <span
                className="text-xs tracking-[0.35em] text-gold-light uppercase block mt-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Gelato &middot; Caffè
              </span>
            </a>

            <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
              A little taste of <em className="text-gold-light italic">la dolce vita</em> in the historic heart of Hazratganj, Lucknow. Fresh authentic Italian gelato made with passion.
            </p>

            <p className="text-xs text-gold/70 italic" style={{ fontFamily: "var(--font-cormorant)" }}>
              &ldquo;Una piccola angolo d&apos;Italia&rdquo;
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold text-gold-light tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#home" className="hover:text-gold-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-gold-light transition-colors">
                  Step Inside (Gallery)
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-light transition-colors">
                  Digital Menu
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-gold-light transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-gold-light transition-colors">
                  Location &amp; Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Gelato Categories */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold text-gold-light tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Our Offerings
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a href="#menu" className="hover:text-gold-light transition-colors">
                  Artisanal Gelato Cups
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-light transition-colors">
                  Crispy Waffle Cones
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-light transition-colors">
                  Signature Shakes &amp; Smoothies
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-light transition-colors">
                  Authentic Italian Caffè &amp; Affogato
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-gold-light transition-colors">
                  Specialty Seasonal Batches
                </a>
              </li>
            </ul>
          </div>

          {/* Visit & Connect */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold text-gold-light tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Visit Hazratganj
            </h4>
            <div className="space-y-2 text-sm text-white/70 leading-relaxed">
              <p>Heritage Arcade, MG Marg,</p>
              <p>Hazratganj, Lucknow 226001</p>
              <p className="text-white font-medium pt-1">Open 11:00 AM – 11:00 PM Daily</p>
              <p className="text-xs text-white/50 pt-2">
                Questions or group visits?
              </p>
              <a
                href="tel:+919876543210"
                className="inline-block text-gold-light hover:underline font-medium"
              >
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>
            &copy; 2026 Mio Marito Gelato &middot; Caffè. All rights reserved. Hazratganj, Lucknow.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.google.com/maps/dir//Mio+Marito+Gelato,+84,+Ashok+Marg,+Hazratganj,+Lucknow,+Uttar+Pradesh+226001/@26.8488988,80.9503807,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x399bfdea37ac3ead:0x64ee65da18deb79f!2m2!1d80.9466053!2d26.8474713?entry=ttu&amp;g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light transition-colors"
            >
              Google Maps
            </a>
            <span>&middot;</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light transition-colors"
            >
              Instagram
            </a>
            <span>&middot;</span>
            <button
              onClick={scrollToTop}
              className="hover:text-gold-light inline-flex items-center gap-1 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
