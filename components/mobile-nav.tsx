"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#platform", label: "Platform" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#contact", label: "Book a pilot", cta: true },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="site-nav"
        aria-label="Open navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,250,243,0.86)] shadow-[0_10px_30px_rgba(25,44,38,0.08)]"
      >
        <span className="sr-only">Menu</span>
        <div className="space-y-1">
          <span className="block h-0.5 w-4 bg-pine" />
          <span className="block h-0.5 w-4 bg-pine" />
        </div>
      </button>

      {isOpen ? (
        <nav
          id="site-nav"
          className="mt-3 grid gap-2 rounded-[24px] border border-white/70 bg-[rgba(255,250,243,0.86)] p-3 shadow-soft"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={
                item.cta
                  ? "rounded-full bg-deep px-4 py-3 text-center text-sm font-medium text-[#f5f1e9]"
                  : "rounded-2xl px-3 py-2 text-sm text-moss"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
