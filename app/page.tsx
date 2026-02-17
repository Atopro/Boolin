"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  StarIcon,
  FlashIcon,
  CheckmarkCircle02Icon,
  ArrowUpRight01Icon,
  Cancel01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
  PaintBrush02Icon,
  WebDesign01Icon,
  PrinterIcon,
  CheckmarkBadge02Icon,
  Timer01Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
// Onboarding moved to dedicated page
import gallery from "./gallery.json";
// import { Unbounded } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { StarIcon as HeroStarIcon } from "@heroicons/react/20/solid";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function V4() {
  return (
    <div className={`relative min-h-dvh bg-white text-neutral-900`}>
      <Header />

      {/* hero */}
      <section className="page-pad pt-6  md:pt-10 ">
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

      {/* logos */}
      <LogosSection />

      {/* services */}
      <section id="sluzby" className="page-pad py-16 md:py-32 bg-neutral-50">
        <div className="page">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Služby, ktoré Vás posunú
            </h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Komplexné riešenia pre váš biznis od návrhu až po realizáciu
            </p>
          </div>
        </div>
        <div className="page mt-8 grid gap-8 md:grid-cols-3">
          {[
            {
              icon: PaintBrush02Icon,
              title: "Brand dizajn",
              desc: "Komplexný vizuálny systém vrátane loga, farebnej schémy, typografie a dizajn manuálu. Aplikácia identity na všetky firemné materiály.",
              examples: [
                "logo",
                "návrh vizitiek",
                "návrh letákov",
                "brand manuál",
                "firemná identita",
              ],
            },
            {
              icon: WebDesign01Icon,
              title: "Web dizajn",
              desc: "Moderné webové riešenia s dôrazom na používateľský zážitok. Tvorba konverzných alebo informačných webov.",
              examples: [
                "UI/UX",
                "wireframy",
                "e-shop",
                "osobná stránka",
                "landing page",
              ],
            },
            {
              icon: PrinterIcon,
              title: "Tlač a montáž",
              desc: "Profesionálna veľkoformátová tlač, výroba a inštalácia vonkajšej reklamy vrátane bannerov, billboardov a svetelných reklám.",
              examples: [
                "tlačoviny",
                "polepy áut",

                "billboardy",
                "svetelné reklamy",
                "montáž",
              ],
            },
          ].map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl p-6 md:p-7 border border-neutral-200 bg-white h-full flex flex-col gap-4 hover:shadow-sm hover:border-neutral-300 transition"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-neutral-100 text-neutral-900">
                <HugeiconsIcon icon={s.icon} size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-neutral-700 text-sm leading-relaxed">
                  {s.desc}
                </p>
                {Array.isArray(s.examples) && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {s.examples.map((x: string) => (
                      <span
                        key={x}
                        className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs"
                      >
                        {x}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-auto pt-4 border-t border-neutral-100">
                <Link
                  href="/onboarding"
                  className="px-4 py-2 rounded-full bg-[#d1fa1a] text-black font-semibold inline-block w-fit"
                >
                  <span className="sm:hidden">objednávka</span>
                  <span className="hidden sm:inline">Rýchla objednávka</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* work */}
      <StoriesCarousel />

      {/* process */}
      <section
        id="proces"
        className="page-pad py-16 md:py-32 bg-neutral-900 text-white relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 [background:radial-gradient(800px_400px_at_50%_50%,_rgb(132,204,22)_5%,_rgb(163,230,53)_15%,_transparent_70%)] opacity-10" />

        <div className="page">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Ako spolupracujeme
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Jednoduchý a transparentný proces, ktorý garantuje kvalitné
              výsledky
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  icon: WebDesign01Icon,
                  title: "Brief",
                  description: "Rýchla objednávka a ciele",
                  details:
                    "Vyplníte jednoduchý formulár s vašimi požiadavkami a cieľmi projektu.",
                  duration: "1-2 dni",
                },
                {
                  icon: StarIcon,
                  title: "Koncept",
                  description: "Návrhy a smerovanie",
                  details:
                    "Vytvoríme prvotné návrhy a konzultujeme smerovanie projektu.",
                  duration: "3-5 dní",
                },
                {
                  icon: ArrowUpRight01Icon,
                  title: "Iterácie",
                  description: "Zlepšenia podľa feedbacku",
                  details:
                    "Spoločne doladíme detaily a vylepšíme návrhy podľa vašich pripomienok.",
                  duration: "2-3 dni",
                },
                {
                  icon: CheckmarkCircle02Icon,
                  title: "Dodanie",
                  description: "Finálne výstupy a podpora",
                  details:
                    "Odovzdáme finálne súbory a poskytneme pokračujúcu podporu.",
                  duration: "1 deň",
                },
              ].map((step, i) => (
                <div key={step.title} className="group relative">
                  {/* Connecting arrow - only show between steps */}
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 z-20 transform -translate-y-1/2">
                      <div className="w-8 h-8 rounded-full bg-neutral-900 border-2 border-[#d1fa1a]/30 flex items-center justify-center">
                        <HugeiconsIcon
                          icon={ArrowRight01Icon}
                          size={16}
                          className="text-[#d1fa1a]"
                        />
                      </div>
                    </div>
                  )}

                  {/* Main card */}
                  <div className="rounded-2xl p-6 md:p-7 border border-white/10 bg-white/5 h-full flex flex-col gap-4 hover:shadow-sm hover:border-white/20 transition relative">
                    {/* Step number badge */}
                    <div className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-[#d1fa1a] text-black font-bold text-sm flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>

                    {/* Step indicator */}
                    <div className="text-sm text-white/60 font-medium">
                      Krok {i + 1}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d1fa1a]/10 text-white">
                      <HugeiconsIcon
                        icon={step.icon}
                        size={32}
                        className="text-[#d1fa1a]"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold leading-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[#d1fa1a] text-sm font-medium">
                        {step.description}
                      </p>
                      <p className="mt-3 text-white/70 text-sm leading-relaxed">
                        {step.details}
                      </p>
                    </div>

                    {/* Duration badge */}
                    <div className="mt-auto pt-4 border-t border-white/10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-[#d1fa1a]" />
                        <span className="text-xs text-white/80 font-medium">
                          {step.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 text-white/70">
              <HugeiconsIcon
                icon={FlashIcon}
                size={20}
                className="text-[#d1fa1a]"
              />
              <span className="font-medium">Prvý kontakt do 24 hodín</span>
            </div>
          </div>
        </div>
      </section>

      {/* packages */}
      <section id="ceny" className="page-pad py-16 md:py-32">
        <div className="page">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            Balíky pre rýchly štart
          </h2>
          <p className="mt-2 text-neutral-600 text-center max-w-[70ch] mx-auto">
            Vyberte si pripravený balík – jasný rozsah, férová cena a rýchle
            dodanie.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                id: "start",
                name: "Štart",
                price: "od 330€",
                desc: "Základný balík pre rýchly štart so silným základom značky.",
                badge: null as string | null,
                features: [
                  "Logo",

                  "300 ks vizitiek",
                  "100 ks letákov alebo 1 banner",
                  "Farebná paleta",
                  "Zdrojové súbory",
                  "Exporty na sociálne siete",
                ],
                img: "/mockup.webp",
                cta: "/onboarding?plan=start",
              },
              {
                id: "growth",
                name: "Rast",
                price: "od 950 €",
                desc: "Kompletná identita a jednoduchý web na mieru, pripravené na rast.",
                badge: "Najobľúbenejší" as string | null,
                features: [
                  "Všetko z balíka Štart",
                  "Mini manuál",
                  "500 ks vizitiek",
                  "200 ks letákov alebo 2 bannery",
                  "Jednoduchý web na mieru",
                  "Ľubovoľný počet e‑mailov",
                  "E‑mailový podpis",
                  "100 ks hlavičkový papier",
                ],
                img: "/mockup.webp",
                cta: "/onboarding?plan=rast",
              },
              {
                id: "scale",
                name: "Scale",
                price: "od 2 400 €",
                desc: "Všetko z balíka Rast + silná offline podpora a web na mieru.",
                badge: null as string | null,
                features: [
                  "Všetko z balíka Rast",
                  "Web na mieru (rozšírený)",
                  "1000 ks vizitiek",
                  "500 ks letákov alebo 5 bannerov",
                  "500 ks hlavičkový papier",
                  "100 ks obálok",
                  "1 ks roll‑up",
                  "Ľubovoľný reklamný predmet",
                  "Komplexný brand manuál",
                  "Billboard na 3 mesiace alebo polep auta",
                ],
                img: "/mockup.webp",
                cta: "/onboarding?plan=scale",
              },
            ].map((t) => (
              <article
                key={t.id}
                className={`group rounded-2xl overflow-hidden flex flex-col transition border h-fit ${
                  t.id === "scale"
                    ? "bg-neutral-900 text-white border-neutral-800 hover:border-neutral-700 hover:shadow"
                    : "bg-white text-neutral-900 border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
                }`}
              >
                <div className="relative aspect-[1/1] bg-neutral-100">
                  {/* placeholder mockup image */}
                  <Image
                    src={t.img}
                    alt={`${t.name} mockup`}
                    fill
                    className="object-cover"
                  />
                  {t.badge && (
                    <span className="absolute left-3 top-3 px-2 py-1 rounded-full bg-black/80 text-white text-xs">
                      {t.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 md:p-7 flex flex-col gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3
                        className={`text-xl font-semibold leading-tight ${
                          t.id === "scale"
                            ? "text-[#d1fa1a]"
                            : "text-neutral-900"
                        }`}
                      >
                        {t.name}
                      </h3>
                      <p
                        className={`mt-1 text-sm ${
                          t.id === "scale"
                            ? "text-white/70"
                            : "text-neutral-500"
                        }`}
                      >
                        Balík pripravený na okamžitý štart
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <div
                        className={`font-extrabold tracking-tight ${
                          t.id === "scale"
                            ? "text-base md:text-lg text-white"
                            : "text-base md:text-lg text-neutral-900"
                        }`}
                      >
                        {t.price}
                      </div>
                      <div
                        className={`text-xs ${
                          t.id === "scale"
                            ? "text-white/60"
                            : "text-neutral-500"
                        }`}
                      >
                        bez DPH
                      </div>
                    </div>
                  </div>
                  <p
                    className={`${
                      t.id === "scale" ? "text-white/90" : "text-neutral-700"
                    } text-sm leading-relaxed`}
                  >
                    {t.desc}
                  </p>
                  <ul
                    className={`mt-1 grid gap-2 text-sm ${
                      t.id === "scale" ? "text-white" : "text-neutral-800"
                    }`}
                  >
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span
                          className={`mt-0.5 ${
                            t.id === "scale"
                              ? "text-[#d1fa1a]"
                              : "text-neutral-800"
                          }`}
                        >
                          <HugeiconsIcon
                            icon={CheckmarkCircle02Icon}
                            size={16}
                          />
                        </span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className={`mt-2 pt-4 border-t ${
                      t.id === "scale"
                        ? "border-white/10"
                        : "border-neutral-100"
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <HugeiconsIcon icon={CheckmarkBadge02Icon} size={16} />
                      </div>
                      <p
                        className={`text-xs mb-6 ${
                          t.id === "scale"
                            ? "text-white/70"
                            : "text-neutral-500"
                        }`}
                      >
                        <strong>Bezstarostné riešenie.</strong> Nemusíte sa o
                        nič starať. Všetko vybavíme za Vás. Tlač a doprava
                        vybraných produktov je v cene. Prevádzkové náklady webu
                        na prvý rok sú zahrnuté.
                      </p>
                    </div>
                    <Link
                      href={t.cta}
                      className="mt-3 inline-block px-4 py-2 rounded-full bg-[#d1fa1a] text-black font-semibold"
                    >
                      Vybrať balík
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section className="page-pad py-10 md:py-16 bg-neutral-50">
        <div className="page">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Čo hovoria klienti
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <blockquote
                key={i}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="text-2xl">&quot;</div>
                <p className="text-neutral-700">
                  Spolupráca prebehla rýchlo a profesionálne. Výsledok prekonal
                  očakávania.
                </p>
                <div className="mt-3 text-sm text-neutral-500">
                  Klient · projekt {i}
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section id="faq" className="page-pad py-10 md:py-16">
        <div className="page">
          <h2 className="text-3xl md:text-5xl font-extrabold">FAQ</h2>
          <div className="mt-6 grid gap-4">
            {[
              "Ako rýchlo viete začať?",
              "Viete aj e‑shop?",
              "Robíte tlač a montáž?",
            ].map((q, i) => (
              <details
                key={i}
                className="rounded-2xl border border-neutral-200 bg-white p-5"
              >
                <summary className="cursor-pointer font-semibold">{q}</summary>
                <p className="mt-2 text-neutral-700">
                  Áno, podľa kapacít vieme začať už do niekoľkých dní. Po
                  rýchlej objednávke sa vám ozveme s potvrdením termínu.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* final cta */}
      <section className="page-pad pb-14">
        <div className="page rounded-3xl overflow-hidden bg-neutral-900 text-white p-8 md:p-12 relative">
          <div className="absolute inset-0 -z-10 [background:radial-gradient(800px_300px_at_10%_0%,_#d1fa1a_10%,_transparent_60%)] opacity-30" />
          <h2 className="text-3xl md:text-5xl font-extrabold">
            Pripravení rásť?
          </h2>
          <p className="mt-2 text-white/80 max-w-[60ch]">
            Vyplňte rýchlu objednávku — zvyšok nechajte na nás.
          </p>
          <div className="mt-6">
            <Link
              href="/onboarding"
              className="px-6 py-3 rounded-full bg-[#d1fa1a] text-black font-semibold"
            >
              <span className="sm:hidden">objednávka</span>
              <span className="hidden sm:inline">Rýchla objednávka</span>
            </Link>
          </div>
        </div>
      </section>

      {/* hero variations removed */}

      {/* filterable gallery */}
      <GallerySection />

      {/* past case studies */}
      <PastProjectsSection />

      {/* footer */}
      <Footer />

      {/* Wizard moved to /onboarding */}
    </div>
  );
}
function LogosSection() {
  "use client";
  const [logoFiles, setLogoFiles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    let isMounted = true;
    fetch("/api/logos")
      .then((res) => res.json())
      .then((data: { logos?: string[] }) => {
        if (!isMounted) return;
        setLogoFiles(Array.isArray(data.logos) ? data.logos : []);
      })
      .catch(() => {
        if (!isMounted) return;
        setLogoFiles([]);
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);
  const duplicatedFiles = [...logoFiles, ...logoFiles];
  return (
    <section className=" py-10 md:py-32">
      <div className="">
        <p className="text-md uppercase tracking-widest text-neutral-500 text-center mb-12">
          Dôverujú nám
        </p>
        {!isLoading && logoFiles.length === 0 ? (
          <div className="mt-6 text-center text-neutral-400">Žiadne logá</div>
        ) : (
          <div className="mt-6 relative overflow-hidden">
            <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
              <div
                className="flex items-center gap-28 will-change-transform"
                style={{ animation: "logos-marquee 30s linear infinite" }}
              >
                {duplicatedFiles.map((file, idx) => {
                  const name = file.replace(/\.svg$/i, "");
                  return (
                    <div
                      key={`${file}-${idx}`}
                      className="shrink-0 opacity-30 hover:opacity-60 transition"
                    >
                      <div className="relative w-32 md:w-40 h-10 md:h-12 flex items-center justify-center">
                        <Image
                          src={`/logos/${file}`}
                          alt={`${name} logo`}
                          fill
                          sizes="(min-width: 768px) 160px, 128px"
                          className="object-contain"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @keyframes logos-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
// Client-only sub sections
function RotatingHeadline() {
  "use client";
  const words = ["rastú", "inšpirujú", "predávajú", "vynikajú", "fungujú"];
  const [idx, setIdx] = useState(0);
  const spanRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;
    const handleIter = () => setIdx((i) => (i + 1) % words.length);
    el.addEventListener("animationiteration", handleIter);
    return () => el.removeEventListener("animationiteration", handleIter);
  }, [words.length]);
  return (
    <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.04] tracking-tight">
      Tvoríme značky, ktoré <br />
      <span
        className="text-[#d1fa1a] inline-block swipe-underline"
        style={{
          animation: "swipe var(--swipe-duration) ease-in-out infinite",
        }}
        ref={spanRef}
      >
        {words[idx]}
      </span>
    </h1>
  );
}

// swipe keyframes moved to app/globals.css for SSR compatibility

function GallerySection() {
  "use client";
  const [filter, setFilter] = useState<string>("vsetko");
  const [companyFilter, setCompanyFilter] = useState<string | null>(null);
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });
  type Item = (typeof gallery)[number];
  const categories = [
    { id: "vsetko", label: "Všetko" },
    { id: "3d-a-svetelne", label: "3D a svetelné" },
    { id: "montaze", label: "montáže" },
    { id: "polep-aut", label: "polep áut" },
    { id: "polepy-a-instalacie", label: "polepy a inštalácie" },
    { id: "reklamne-predmety", label: "reklamné predmety" },
    { id: "textil", label: "textil" },
    { id: "tlacoviny", label: "tlačoviny" },
    { id: "weby", label: "weby" },
  ];
  const base = gallery as Item[];
  const filtered = (
    companyFilter
      ? base.filter((i) => i.companySlug === companyFilter)
      : base.filter((i) => (filter === "vsetko" ? true : i.type === filter))
  ) as Item[];
  const visible = filtered.slice(0, visibleCount);
  function openLightbox(idx: number) {
    setLightbox({ open: true, index: idx });
  }
  function closeLightbox() {
    setLightbox({ open: false, index: 0 });
  }
  function nextImg() {
    setLightbox((s) => ({
      open: true,
      index: (s.index + 1) % filtered.length,
    }));
  }
  function prevImg() {
    setLightbox((s) => ({
      open: true,
      index: (s.index - 1 + filtered.length) % filtered.length,
    }));
  }
  return (
    <section className="page-pad py-16 bg-neutral-50">
      <div className="page">
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-3xl md:text-5xl font-extrabold">Galéria</h2>
          <div className="flex-1">
            <p className="text-neutral-600 md:text-base text-sm max-w-[70ch]">
              Vybrané ukážky našich prác naprieč kategóriami. Pre detail si
              rozkliknite fotografiu alebo filtrujte podľa značky či typu.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {companyFilter && (
            <button
              className="px-3 py-1.5 rounded-full text-sm border border-neutral-200 bg-white inline-flex items-center gap-2"
              onClick={() => {
                setCompanyFilter(null);
                setVisibleCount(9);
              }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#d1fa1a]" />
              Značka: {filtered[0]?.company}
              <HugeiconsIcon icon={Cancel01Icon} size={14} />
            </button>
          )}
          {(showAllFilters ? categories : categories.slice(0, 5)).map((f) => (
            <button
              key={f.id}
              onClick={() => {
                setFilter(f.id);
                setCompanyFilter(null);
                setVisibleCount(9);
              }}
              disabled={companyFilter !== null}
              className={`px-3 py-1.5 rounded-full text-sm border ${
                companyFilter
                  ? "border-neutral-200 bg-white opacity-50 cursor-not-allowed"
                  : filter === f.id
                  ? "bg-[#d1fa1a] text-black border-transparent"
                  : "border-neutral-200 bg-white"
              }`}
            >
              {f.label}
            </button>
          ))}
          {categories.length > 5 && (
            <button
              onClick={() => setShowAllFilters((v) => !v)}
              className="px-3 py-1.5 rounded-full text-sm border border-neutral-200 bg-white"
            >
              {showAllFilters ? "Menej filtrov" : "+ Ďalšie filtre"}
            </button>
          )}
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {visible.map((i, idx) => (
            <article
              key={`${i.type}-${i.company}-${i.filename}`}
              className="rounded-2xl overflow-hidden border border-neutral-200 bg-white"
            >
              <div className="relative aspect-[4/3] bg-neutral-100">
                <Image
                  src={i.src}
                  alt={`${i.company} · ${i.typeLabel}`}
                  fill
                  className="object-cover"
                  onClick={() => openLightbox(idx)}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <button
                    className="font-semibold capitalize hover:underline"
                    onClick={() => {
                      setCompanyFilter(i.companySlug);
                      setFilter("vsetko");
                      setVisibleCount(9);
                    }}
                  >
                    {i.company}
                  </button>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-100">
                    {i.typeLabel}
                  </span>
                </div>
                <div className="text-sm text-neutral-600 mt-1">
                  {i.filename}
                </div>
              </div>
            </article>
          ))}
        </div>
        {filtered.length > visibleCount && (
          <div className="mt-8 flex justify-center">
            <button
              className="px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-black"
              onClick={() => setVisibleCount((c) => c + 9)}
            >
              Zobraziť viac
            </button>
          </div>
        )}
        {lightbox.open && filtered[lightbox.index] && (
          <div className="fixed inset-0 z-50">
            <div
              className="absolute inset-0 bg-black/80"
              onClick={closeLightbox}
            />
            <div className="absolute inset-0 grid place-items-center p-4">
              <div className="relative w-full max-w-5xl aspect-[4/3]">
                <Image
                  src={filtered[lightbox.index].src}
                  alt={`${filtered[lightbox.index].company} · ${
                    filtered[lightbox.index].typeLabel
                  }`}
                  fill
                  className="object-contain"
                />
                <button
                  aria-label="Zavrieť"
                  onClick={closeLightbox}
                  className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white text-black grid place-items-center shadow"
                >
                  <HugeiconsIcon icon={Cancel01Icon} size={18} />
                </button>
                <button
                  aria-label="Predchádzajúca"
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-black grid place-items-center shadow"
                >
                  <HugeiconsIcon icon={ArrowLeft01Icon} size={18} />
                </button>
                <button
                  aria-label="Ďalšia"
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white text-black grid place-items-center shadow"
                >
                  <HugeiconsIcon icon={ArrowRight01Icon} size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function StoriesCarousel() {
  "use client";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rotationDirection, setRotationDirection] = useState(0); // -1 left, 0 stop, 1 right
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
  const rotationIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const stories = [
    {
      id: 1,
      title: "Brand Identity",
      description: "Komplexná vizuálna identita pre moderné firmy",
      image:
        "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    },
    {
      id: 2,
      title: "Web Design",
      description: "Moderné webové riešenia s dôrazom na UX",
      image:
        "https://images.pexels.com/photos/19845164/pexels-photo-19845164.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    },
    {
      id: 3,
      title: "Print Design",
      description: "Profesionálna tlač a veľkoformátová reklama",
      image:
        "https://images.pexels.com/photos/28267110/pexels-photo-28267110.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Efektívne marketingové kampane online",
      image:
        "https://images.pexels.com/photos/32302324/pexels-photo-32302324.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    },
    {
      id: 5,
      title: "Packaging Design",
      description: "Atraktívne balenie produktov",
      image:
        "https://images.pexels.com/photos/16451171/pexels-photo-16451171.png?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    },
    {
      id: 6,
      title: "Social Media",
      description: "Kreatívny obsah pre sociálne siete",
      image:
        "https://images.pexels.com/photos/16451169/pexels-photo-16451169.png?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    },
  ];

  // Fade in animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Rotation effect
  useEffect(() => {
    // Clear any existing interval
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
    }

    if (rotationDirection !== 0) {
      // Manual hover rotation - 800ms per step
      rotationIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          return rotationDirection === 1
            ? (prev + 1) % stories.length
            : (prev - 1 + stories.length) % stories.length;
        });
      }, 800);
    } else {
      // Check for inactivity - auto rotate after 10s
      const checkInactivity = setInterval(() => {
        const now = Date.now();
        if (now - lastInteractionTime > 10000) {
          setCurrentIndex((prev) => (prev + 1) % stories.length);
        }
      }, 5000);

      return () => clearInterval(checkInactivity);
    }

    return () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }
    };
  }, [rotationDirection, stories.length, lastInteractionTime]);

  return (
    <section id="projekty" className="page-pad py-16 md:py-32">
      <div className="page">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Vybrané projekty
          </h2>
          <p className="text-neutral-700 text-lg max-w-2xl mx-auto">
            Pozrite si ukážky našich projektov a výsledkov
          </p>
        </div>

        <div
          className={`relative h-[450px] md:h-[550px] overflow-visible p-8 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left hover zone */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[40%] z-30"
            onMouseEnter={() => {
              setRotationDirection(-1);
              setLastInteractionTime(Date.now());
            }}
            onMouseLeave={() => {
              setRotationDirection(0);
              setLastInteractionTime(Date.now());
            }}
          />

          {/* Right hover zone */}
          <div
            className="absolute right-0 top-0 bottom-0 w-[40%] z-30"
            onMouseEnter={() => {
              setRotationDirection(1);
              setLastInteractionTime(Date.now());
            }}
            onMouseLeave={() => {
              setRotationDirection(0);
              setLastInteractionTime(Date.now());
            }}
          />

          {/* Carousel cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {stories.map((story, index) => {
              const isCenter = index === currentIndex;
              const isLeft =
                index === (currentIndex - 1 + stories.length) % stories.length;
              const isRight = index === (currentIndex + 1) % stories.length;
              const isLeft2 =
                index === (currentIndex - 2 + stories.length) % stories.length;
              const isRight2 = index === (currentIndex + 2) % stories.length;

              // Show 3 on mobile, 5 on desktop
              const isVisible =
                isCenter ||
                isLeft ||
                isRight ||
                (isDesktop && (isLeft2 || isRight2));

              if (!isVisible) return null;

              return (
                <div
                  key={story.id}
                  className={`absolute transition-all duration-500 ease-out cursor-pointer group ${
                    isCenter
                      ? "w-[280px] md:w-[350px] h-[450px] md:h-[550px] z-20"
                      : isLeft
                      ? "w-[240px] md:w-[300px] h-[400px] md:h-[500px] -translate-x-[130px] md:-translate-x-[162px] z-10"
                      : isRight
                      ? "w-[240px] md:w-[300px] h-[400px] md:h-[500px] translate-x-[130px] md:translate-x-[162px] z-10"
                      : isLeft2
                      ? "w-[200px] md:w-[250px] h-[350px] md:h-[450px] -translate-x-[260px] md:-translate-x-[325px] z-5"
                      : isRight2
                      ? "w-[200px] md:w-[250px] h-[350px] md:h-[450px] translate-x-[260px] md:translate-x-[325px] z-5"
                      : ""
                  }`}
                >
                  <div
                    className={`relative w-full h-full rounded-2xl overflow-hidden bg-white transition-all duration-500 ${
                      isCenter
                        ? "shadow-2xl"
                        : "shadow-xl group-hover:shadow-2xl"
                    }`}
                  >
                    {/* Image - top 70% */}
                    <div className="relative w-full h-[75%]">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className={`object-cover transition-all duration-500 ${
                          isCenter ? "" : "grayscale"
                        }`}
                        sizes="(min-width: 768px) 400px, 320px"
                        quality={90}
                        priority={isCenter}
                      />
                    </div>

                    {/* Text - bottom 30% */}
                    <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-neutral-900 p-6 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-sm md:text-base mb-1 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {story.description}
                      </p>
                    </div>

                    {/* White overlay for fade effect - different intensities */}
                    {!isCenter && (
                      <div
                        className={`absolute inset-0 rounded-2xl transition-all duration-500 pointer-events-none ${
                          isLeft || isRight ? "bg-white/40" : "bg-white/60"
                        }`}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress indicators - moved below carousel */}
        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === currentIndex
                  ? "w-8 bg-neutral-900"
                  : "w-2 bg-neutral-900/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PastProjectsSection() {
  return (
    <section className="page-pad py-16">
      <div className="page">
        <h2 className="text-3xl md:text-5xl font-extrabold">Case studies</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden border border-neutral-200 bg-white"
            >
              <div className="h-48 bg-gradient-to-br from-neutral-200 to-neutral-100" />
              <div className="p-5">
                <div className="text-xl font-semibold">Projekt {i}</div>
                <p className="text-neutral-600 mt-1">
                  Stručný popis výsledkov, metriky a kľúčové prínosy pre
                  klienta.
                </p>
                <div className="mt-3 text-sm text-neutral-500">
                  Brand · Web · Tlač
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer moved to components/Footer
