"use client";

/**
 * BotanicalAccents Component
 * Hand-drawn antique botanical vector illustrations matching the reference screenshot's
 * delicate floral accents beside the timeline photo and around the When/Where section.
 */

export function BotanicalFlower({ className = "w-12 h-16" }) {
  return (
    <svg
      className={`inline-block select-none pointer-events-none ${className}`}
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Delicate curved green stem */}
      <path
        d="M38 115 C 38 90, 42 60, 40 38"
        stroke="#737A5A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Side leaf left */}
      <path
        d="M39 85 C 22 80, 15 95, 12 90 C 22 75, 34 78, 39 82"
        fill="#737A5A"
        opacity="0.85"
      />
      <path
        d="M39 82 Q 24 82 12 90"
        stroke="#585F42"
        strokeWidth="0.8"
      />
      {/* Side leaf right */}
      <path
        d="M40 65 C 55 58, 62 70, 68 64 C 58 52, 48 58, 40 63"
        fill="#8E9672"
        opacity="0.85"
      />
      <path
        d="M40 63 Q 56 60 68 64"
        stroke="#585F42"
        strokeWidth="0.8"
      />
      {/* Calyx */}
      <path
        d="M36 40 C 35 32, 45 32, 44 40 Z"
        fill="#585F42"
      />
      {/* Sepals */}
      <path
        d="M33 37 Q 30 26 26 28 Q 33 33 36 38"
        fill="#737A5A"
      />
      <path
        d="M47 37 Q 50 26 54 28 Q 47 33 44 38"
        fill="#737A5A"
      />
      {/* Flower Petals (Blush Terracotta / Rose) */}
      <ellipse cx="40" cy="22" rx="16" ry="14" fill="#C48375" opacity="0.9" />
      <ellipse cx="32" cy="20" rx="12" ry="12" fill="#D3978A" opacity="0.85" />
      <ellipse cx="48" cy="20" rx="12" ry="12" fill="#D3978A" opacity="0.85" />
      <circle cx="40" cy="18" r="9" fill="#B25F4E" opacity="0.95" />
      <circle cx="40" cy="16" r="5" fill="#E6C280" opacity="0.9" />
    </svg>
  );
}

export function BotanicalOlive({ className = "w-14 h-14" }) {
  return (
    <svg
      className={`inline-block select-none pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main branch */}
      <path
        d="M10 85 C 35 70, 60 50, 90 20"
        stroke="#737A5A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Olive leaves */}
      <path
        d="M30 73 C 25 60, 35 50, 42 56 C 45 65, 38 75, 30 73 Z"
        fill="#737A5A"
        opacity="0.8"
      />
      <path
        d="M50 56 C 58 42, 70 45, 68 55 C 62 65, 52 62, 50 56 Z"
        fill="#8E9672"
        opacity="0.85"
      />
      <path
        d="M68 40 C 65 26, 76 20, 82 28 C 84 38, 75 44, 68 40 Z"
        fill="#737A5A"
        opacity="0.8"
      />
      {/* Small olive fruit */}
      <ellipse cx="48" cy="67" rx="4.5" ry="6" transform="rotate(-20 48 67)" fill="#444C30" />
      <ellipse cx="72" cy="48" rx="4" ry="5.5" transform="rotate(30 72 48)" fill="#444C30" />
    </svg>
  );
}

export function BotanicalSprig({ className = "w-10 h-10" }) {
  return (
    <svg
      className={`inline-block select-none pointer-events-none ${className}`}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M10 50 Q 30 35 50 10" stroke="#8E9672" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M22 41 C 16 35, 20 28, 26 33 C 28 38, 25 43, 22 41 Z" fill="#8E9672" opacity="0.8" />
      <path d="M35 29 C 42 22, 46 28, 42 34 C 37 36, 33 32, 35 29 Z" fill="#737A5A" opacity="0.8" />
      <circle cx="48" cy="14" r="3.5" fill="#C48375" opacity="0.85" />
    </svg>
  );
}
