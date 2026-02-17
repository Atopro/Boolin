"use client";

import { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cancel01Icon,
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import gallery from "../gallery.json";

export default function GallerySection() {
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
