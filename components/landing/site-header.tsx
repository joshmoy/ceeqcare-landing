"use client";

import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { navItems } from "@/data/landing-content";
import type { ThemeMode } from "@/components/landing/types";

type SiteHeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function SiteHeader({ theme, onToggleTheme }: SiteHeaderProps) {
  const isLight = theme === "light";

  return (
    <header className="sticky top-0 z-30 px-4 py-4 md:px-8">
      <div
        className={`mx-auto flex w-full max-w-[86rem] items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-xl md:px-6 ${
          isLight
            ? "border-black/8 bg-[rgba(255,251,245,0.76)]"
            : "border-white/10 bg-[rgba(10,23,25,0.72)]"
        }`}
      >
        <Link href="#top" className="flex items-center gap-3" aria-label="CareSight AI home">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-[linear-gradient(135deg,#e37a45,#f0b18c)] text-base font-semibold text-[#0b1719]">
            C
          </span>
          <span>
            <span
              className={`block text-sm uppercase tracking-[0.24em] ${
                isLight ? "text-[#6f5b4d]" : "text-white/56"
              }`}
            >
              CeeqCare
            </span>
            <strong className="block text-[1.02rem] tracking-[-0.03em]">CareSight AI</strong>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                isLight ? "text-[#516864] hover:text-[#102225]" : "text-white/72 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className={`rounded-full border px-4 py-3 text-sm font-medium transition-colors duration-300 ${
              isLight
                ? "border-black/10 bg-white/70 text-[#102225]"
                : "border-white/12 bg-white/[0.04] text-white/82"
            }`}
          >
            {isLight ? "Dark mode" : "Light mode"}
          </button>
          <Link
            href="#contact"
            className={`rounded-full px-5 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
              isLight ? "bg-[#102225] text-[#f7f1e8]" : "bg-[#f3ebdf] text-[#081315]"
            }`}
          >
            Book a pilot
          </Link>
        </nav>

        <MobileNav theme={theme} onToggleTheme={onToggleTheme} />
      </div>
    </header>
  );
}
