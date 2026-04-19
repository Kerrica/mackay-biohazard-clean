"use client";

import { useEffect, useState } from "react";

export default function FloatingBackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > window.innerHeight);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-700 shadow-[0_12px_30px_rgba(23,49,88,0.12)] transition hover:border-slate-500 hover:text-[#2d99b3]"
    >
      ↑ Top
    </a>
  );
}
