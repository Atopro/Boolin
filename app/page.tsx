import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LogosSection from "./components/LogosSection";
import StoriesCarousel from "./components/StoriesCarousel";
import GallerySection from "./components/GallerySection";
import PastProjectsSection from "./components/PastProjectsSection";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUpRight01Icon,
  CheckmarkCircle02Icon,
  FlashIcon,
  PaintBrush02Icon,
  PrinterIcon,
  StarIcon,
  WebDesign01Icon,
  CheckmarkBadge02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

export default function HomePage() {
  return (
    <div className="relative min-h-dvh bg-white text-neutral-900">
      <Header />

      <HeroSection />

      <LogosSection />

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

      <StoriesCarousel />

      <section
        id="proces"
        className="page-pad py-16 md:py-32 bg-neutral-900 text-white relative overflow-hidden"
      >
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

                  <div className="rounded-2xl p-6 md:p-7 border border-white/10 bg-white/5 h-full flex flex-col gap-4 hover:shadow-sm hover:border-white/20 transition relative">
                    <div className="absolute -top-3 -right-3 z-10 w-8 h-8 rounded-full bg-[#d1fa1a] text-black font-bold text-sm flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>

                    <div className="text-sm text-white/60 font-medium">
                      Krok {i + 1}
                    </div>

                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#d1fa1a]/10 text-white">
                      <HugeiconsIcon
                        icon={step.icon}
                        size={32}
                        className="text-[#d1fa1a]"
                      />
                    </div>

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
                price: "od 950 €",
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
                price: "od 2 400 €",
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

      <GallerySection />

      <PastProjectsSection />

      <Footer />
    </div>
  );
}
