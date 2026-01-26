"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Container } from "./Container";
import { Button } from "./Button";
import NavbarAnimations from "../NavbarAnimations";

export default function Navbar() {
  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <NavbarAnimations />
      <Container>
        <div className="flex h-[70px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-neutral-900">
              {siteConfig.name}
            </span>
          </Link>

          <Button href="/quote" size="sm">
            Get a Quote
          </Button>
        </div>
      </Container>
    </nav>
  );
}
