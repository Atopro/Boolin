"use client";

import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  FlashIcon,
  CheckmarkCircle02Icon,
  Timer01Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { StarIcon as HeroStarIcon } from "@heroicons/react/20/solid";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import RotatingHeadline from "./RotatingHeadline";

export default function HeroSection() {
  return (
    <section className="page-pad pt-6 md:pt-10">
      <div className="page relative overflow-hidden rounded-3xl bg-neutral-900 text-white">
        <div className="absolute inset-0 -z-10 [background:radial-gradient(800px_400px_at_20%_10%,_#d1fa1a_10%,_transparent_60%),radial-gradient(600px_300px_at_110%_0%,_#22d3ee_10%,_transparent_60%)] opacity-30" />
        <div className="grid md:grid-cols-2 gap-8 items-center p-6 md:p-12">
          <div>
            <RotatingHeadline />
            <p className="mt-4 text-lg text-white/80 max-w-[60ch]">
              Sme fullservisová reklamná agentúra a ponúkame komplexné
              brandingové, webové a tlačové riešenia pre firmy, ktoré chcú
              rásť. Bezstarostne a všetko pod jednou strechou.
            </p>
            <div className="flex items-center gap-3 text-sm mt-8">
              <div className="inline-flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <HeroStarIcon
                      key={i}
                      className="h-3.5 w-3.5 text-yellow-400"
                    />
                  ))}
                </div>
                <span>5.0 na </span>
                <a
                  href="https://maps.app.goo.gl/ro6GtopD6gJMv1xu8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  Google
                </a>
              </div>
              <span className="text-white/50">·</span>
              <span>Viac ako 80 spokojných klientov</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/onboarding"
                className="px-5 py-3 rounded-full bg-[#d1fa1a] text-black font-semibold hover:brightness-95"
              >
                <span className="inline-flex items-center gap-2">
                  <HugeiconsIcon icon={Timer01Icon} size={18} />
                  <span className="hidden sm:inline">Rýchla objednávka</span>
                </span>
              </Link>
              <Link
                href="#projekty"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15"
              >
                <span className="inline-flex items-center gap-2">
                  <HugeiconsIcon icon={ViewIcon} size={18} />
                  <span>Pozrieť práce</span>
                </span>
              </Link>
            </div>
            <div className="mt-6 text-sm text-white/70 flex items-center gap-8 whitespace-nowrap">
              <span className="inline-flex items-center gap-2">
                <HugeiconsIcon icon={StarIcon} size={16} /> Garantovaná
                spokojnosť
              </span>
              <span className="inline-flex items-center gap-2">
                <HugeiconsIcon icon={FlashIcon} size={16} /> Prvý kontakt do
                24 hodín
              </span>
              <span className="inline-flex items-center gap-2">
                <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} />{" "}
                Transparentné ceny
              </span>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[520px]">
            <DotLottieReact
              src="https://lottie.host/c575c9af-22c5-4c03-8eb3-39578946b568/Tl2sN0ia01.lottie"
              loop
              autoplay
              speed={0.25}
              className="w-full h-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
