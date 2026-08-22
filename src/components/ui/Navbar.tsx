"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "./Button";
import NavbarAnimations from "./NavbarAnimations";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Work" },
  { href: "#location", label: "Areas" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [homeHref, setHomeHref] = useState<string>("/");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (pathname === "/quote") return;
    sessionStorage.setItem("loc", pathname);
  }, [pathname]);

  useEffect(() => {
    const saved = sessionStorage.getItem("loc");
    if (saved) setHomeHref(saved);
  }, []);

  // The quote page has no dark hero behind the nav, so it starts solid.
  const alwaysSolid = pathname === "/quote";
  const solid = alwaysSolid || scrolled;

  return (
    <nav
      className={`navbar fixed top-0 left-0 z-50 w-full transition-colors duration-500 ${
        solid
          ? "bg-white/95 text-neutral-900 backdrop-blur-sm"
          : "bg-transparent text-white"
      }`}
    >
      <NavbarAnimations onScrolledChange={setScrolled} />
      <div className="mx-auto flex h-[68px] w-full max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link
          href={homeHref}
          className="flex min-w-0 items-center gap-2.5"
          aria-label={siteConfig.name}
        >
          <Logo className="h-7 w-7 shrink-0" />
          <span className="eyebrow truncate">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button href="/quote" variant="outline" size="sm" className="shrink-0">
          Get a Quote
        </Button>
      </div>

      <div
        className={`h-px w-full transition-opacity duration-500 ${
          solid ? "bg-neutral-900/10 opacity-100" : "opacity-0"
        }`}
      />
    </nav>
  );
}
