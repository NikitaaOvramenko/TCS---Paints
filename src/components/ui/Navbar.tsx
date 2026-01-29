"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";
import { Button } from "./Button";
import NavbarAnimations from "./NavbarAnimations";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.svg";

import { locations } from "@/data/locations";

export default function Navbar() {
  const [location, setLocation] = useState<string>("");
  const pathname = usePathname();
  const [homeHref, setHomeHref] = useState<string>("/");

  useEffect(() => {
    const saved = pathname;
    if (saved == "/quote") {
      return;
    }
    sessionStorage.setItem("loc", saved);
  }, [pathname]);

  useEffect(() => {
    const saved = sessionStorage.getItem("loc");

    if (saved) setHomeHref(saved);
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <NavbarAnimations />
      <Container>
        <div className="flex h-[70px] items-center justify-between">
          <div className="left flex gap-2">
            <Logo className="logo h-10 w-10"></Logo>
            <Link href={homeHref} className="flex items-center gap-2">
              <span className="text-xl font-bold text-neutral-900">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          <Button href="/quote" size="sm">
            Get a Quote
          </Button>
        </div>
      </Container>
    </nav>
  );
}
