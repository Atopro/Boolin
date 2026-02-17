"use client";

import Link from "next/link";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="page-pad">
      <div className="page py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-extrabold tracking-tight">boolin</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          {[
            { href: "#sluzby", label: "Služby" },
            { href: "#projekty", label: "Práca" },
            { href: "#proces", label: "Proces" },
            { href: "#ceny", label: "Cenník" },
            { href: "#faq", label: "FAQ" },
          ].map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="inline-flex items-center gap-2 text-neutral-700 hover:text-black"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d1fa1a]" />
              <span>{i.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            className="rounded-full px-5 py-2.5 bg-neutral-900 text-white font-semibold hover:bg-black"
          >
            Kontakt
          </Link>
          <Link
            href="/onboarding"
            className="rounded-full px-5 py-2.5 bg-[#d1fa1a] text-black font-semibold hover:brightness-95"
          >
            <span className="sm:hidden">Objednávka</span>
            <span className="hidden sm:inline">Rýchla objednávka</span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="lg:hidden ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HugeiconsIcon
              icon={isMenuOpen ? Cancel01Icon : Menu01Icon}
              size={24}
            />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isMenuOpen && (
        <nav className="lg:hidden fixed inset-0 z-50 bg-white">
          <button
            aria-label="Zavrieť menu"
            className="absolute top-5 right-6 h-10 w-10 rounded-full bg-neutral-900 text-white grid place-items-center shadow"
            onClick={() => setIsMenuOpen(false)}
          >
            <HugeiconsIcon icon={Cancel01Icon} size={18} />
          </button>
          <div className="page-pad py-20">
            <div className="flex flex-col gap-6">
              {[
                { href: "#sluzby", label: "Služby" },
                { href: "#projekty", label: "Práca" },
                { href: "#proces", label: "Proces" },
                { href: "#ceny", label: "Cenník" },
                { href: "#faq", label: "FAQ" },
              ].map((i) => (
                <a
                  key={i.href}
                  href={i.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-semibold inline-flex items-center gap-2 text-neutral-700 hover:text-black"
                >
                  <span className="inline-block h-2 w-2 rounded-full bg-[#d1fa1a]" />
                  <span>{i.label}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
