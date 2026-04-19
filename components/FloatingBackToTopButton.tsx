"use client";

export default function FloatingBackToTopButton() {
  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-[9999] inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
    >
      Top
    </a>
  );
}
