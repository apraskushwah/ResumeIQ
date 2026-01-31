"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-black/30 border-b border-white/10"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div className="text-lg font-bold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            ResumeIQ
          </span>
        </div>

        {/* CTA */}
        <a
          href="#analyze"
          className="
            px-4 py-2 rounded-lg text-sm font-medium
            bg-white/10 border border-white/20
            hover:bg-white/20
            transition-all
          "
        >
          Analyze Resume
        </a>
      </div>
    </header>
  );
}
