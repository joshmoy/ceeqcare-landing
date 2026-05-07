"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#platform", label: "Platform" },
  { href: "#signals", label: "Signals" },
  { href: "#story", label: "Story" },
  { href: "#contact", label: "Book a pilot", cta: true },
];

export function MobileNav({
  theme,
  onToggleTheme,
}: {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const isLight = theme === "light";

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        aria-label="Open navigation"
        onClick={() => setIsOpen((open) => !open)}
        className={`flex h-12 w-12 items-center justify-center rounded-full border shadow-[0_20px_40px_rgba(0,0,0,0.12)] ${
          isLight
            ? "border-black/10 bg-white/80"
            : "border-white/10 bg-white/[0.06] shadow-[0_20px_40px_rgba(0,0,0,0.22)]"
        }`}
      >
        <span className="sr-only">Menu</span>
        <div className="space-y-1">
          <span className={`block h-0.5 w-4 ${isLight ? "bg-[#102225]" : "bg-white"}`} />
          <span className={`block h-0.5 w-4 ${isLight ? "bg-[#102225]" : "bg-white"}`} />
        </div>
      </button>

      {isOpen ? (
        <nav
          id="site-nav"
          className={`mt-3 grid gap-2 rounded-[24px] border p-3 ${
            isLight
              ? "border-black/10 bg-[rgba(255,251,245,0.98)] shadow-[0_24px_60px_rgba(25,44,38,0.14)]"
              : "border-white/10 bg-[rgba(10,23,25,0.96)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={
                item.cta
                  ? `rounded-full px-4 py-3 text-center text-sm font-medium ${
                      isLight
                        ? "bg-[#102225] text-[#f7f1e8]"
                        : "bg-[#f3ebdf] text-[#081315]"
                    }`
                  : `rounded-2xl px-3 py-2 text-sm ${
                      isLight ? "text-[#425a55]" : "text-white/74"
                    }`
              }
            >
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              onToggleTheme();
            }}
            className={`rounded-full px-4 py-3 text-center text-sm font-medium ${
              isLight
                ? "border border-black/10 bg-white text-[#102225]"
                : "border border-white/10 bg-white/[0.04] text-white/82"
            }`}
          >
            {isLight ? "Dark mode" : "Light mode"}
          </button>
        </nav>
      ) : null}
    </div>
  );
}
