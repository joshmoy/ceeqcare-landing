"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AudienceSection } from "@/components/landing/audience-section";
import { ContactSection } from "@/components/landing/contact-section";
import { FeatureMarquee } from "@/components/landing/feature-marquee";
import { HeroSection } from "@/components/landing/hero-section";
import { PlatformSection } from "@/components/landing/platform-section";
import { SiteHeader } from "@/components/landing/site-header";
import { StorySection } from "@/components/landing/story-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { scrubCopy } from "@/data/landing-content";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  const root = useRef<HTMLElement | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-hero-item]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
        },
      );

      gsap.utils.toArray<HTMLElement>("[data-story-card]").forEach((card) => {
        gsap.fromTo(
          card,
          { scale: 0.84, opacity: 0.28, filter: "brightness(0.7)" },
          {
            scale: 1,
            opacity: 1,
            filter: "brightness(1)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 82%",
              end: "bottom 28%",
              scrub: true,
            },
          },
        );
      });

      const words = gsap.utils.toArray<HTMLElement>("[data-word]");
      gsap.fromTo(
        words,
        { opacity: 0.12 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: "[data-scrub-copy]",
            start: "top 75%",
            end: "bottom 38%",
            scrub: true,
          },
        },
      );
    },
    { scope: root },
  );

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("ceeqcare-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("ceeqcare-theme", theme);
  }, [theme]);

  const isLight = theme === "light";

  return (
    <main
      ref={root}
      className={`landing-shell w-full max-w-full overflow-x-hidden ${
        isLight
          ? "bg-[#f6f0e6] text-[#102225]"
          : "bg-[#071214] text-[#f5efe6]"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-[42rem] ${
          isLight
            ? "bg-[radial-gradient(circle_at_20%_15%,rgba(227,119,59,0.16),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(72,123,107,0.14),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.55),rgba(246,240,230,0))]"
            : "bg-[radial-gradient(circle_at_20%_15%,rgba(227,119,59,0.28),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(72,123,107,0.22),transparent_24%),linear-gradient(180deg,rgba(7,18,20,0.1),rgba(7,18,20,0))]"
        }`}
      />

      <SiteHeader
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
      />
      <HeroSection isLight={isLight} />
      <FeatureMarquee isLight={isLight} />
      <PlatformSection isLight={isLight} />
      <StorySection isLight={isLight} />
      <AudienceSection isLight={isLight} />
      <TestimonialsSection isLight={isLight} />
      <ContactSection isLight={isLight} />
    </main>
  );
}
