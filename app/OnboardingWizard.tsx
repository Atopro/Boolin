"use client";

import { useMemo, useState } from "react";

type ClientType = "novy" | "existujuci" | null;
type Service = "brand" | "web" | "tlac" | null;

type WizardState = {
  clientType: ClientType;
  service: Service;
  styleTags: string[];
  files: File[];
  links: string[];
  colors: string[];
  items: string[];
  notes: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
};

const defaultState: WizardState = {
  clientType: null,
  service: null,
  styleTags: [],
  files: [],
  links: [""],
  colors: ["#d1fa1a", "#111111", "#ffffff"],
  items: ["Logo"],
  notes: "",
  contact: { name: "", email: "", phone: "" },
};

export default function OnboardingWizard({
  open,
  onClose,
  inline,
}: {
  open?: boolean;
  onClose?: () => void;
  inline?: boolean;
}) {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<WizardState>(defaultState);
  const steps = useMemo(
    () => [
      "Začiatok",
      "Služba",
      "Štýl",
      "Inšpirácie",
      "Farby",
      "Položky",
      "Poznámky",
      "Zhrnutie",
    ],
    []
  );

  function next() {
    setStep((s) => Math.min(s + 1, steps.length - 1));
  }
  function prev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function update<K extends keyof WizardState>(key: K, value: WizardState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  const isInline = Boolean(inline);
  const isOpen = isInline ? true : open !== false;
  if (!isOpen) return null;

  const Shell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
      className={
        isInline
          ? "rounded-3xl border border-white/10 bg-neutral-950 text-white shadow"
          : "relative z-10 w-[min(980px,94vw)] max-h-[88vh] overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 text-white shadow-2xl"
      }
      style={isInline ? undefined : undefined}
    >
      {children}
    </div>
  );

  if (isInline) {
    return (
      <Shell>
        {/* Header */}
        <div className="px-6 md:px-8 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-[#d1fa1a]" />
            <div className="text-lg font-semibold">Rýchla objednávka</div>
          </div>
          <div />
        </div>

        {/* Progress */}
        <div className="px-6 md:px-8 py-3 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2 shrink-0">
                <div
                  className={`h-2 w-10 rounded-full ${
                    i <= step ? "bg-[#d1fa1a]" : "bg-white/10"
                  }`}
                />
                <div
                  className={`text-xs ${
                    i === step ? "text-white" : "text-white/60"
                  }`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 py-6">
          {step === 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              <CardRadio
                title="Som nový klient"
                desc="Ešte s nami nemáte projekt. Začneme od nuly."
                active={state.clientType === "novy"}
                onClick={() => update("clientType", "novy")}
              />
              <CardRadio
                title="Som existujúci klient"
                desc="Pokračujeme na ďalších výstupoch pre vašu značku."
                active={state.clientType === "existujuci"}
                onClick={() => update("clientType", "existujuci")}
              />
            </div>
          )}

          {step === 1 && (
            <div className="grid md:grid-cols-3 gap-6">
              <CardRadio
                title="Brand dizajn"
                desc="Identita, logo, manuál, aplikácie"
                active={state.service === "brand"}
                onClick={() => update("service", "brand")}
              />
              <CardRadio
                title="Web dizajn"
                desc="UI/UX, konverzie, Next.js"
                active={state.service === "web"}
                onClick={() => update("service", "web")}
              />
              <CardRadio
                title="Tlač a montáž"
                desc="Polepy, billboardy, bannery, inštalácia"
                active={state.service === "tlac"}
                onClick={() => update("service", "tlac")}
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <p className="text-sm text-white/70 mb-3">
                Vyberte štýly, ktoré sa vám páčia
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Minimal",
                  "Odvážny",
                  "Elegantný",
                  "Hravo-moderný",
                  "Monochromatický",
                  "Neon / Lime",
                  "Organický",
                  "Tech",
                ].map((tag) => {
                  const active = state.styleTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() =>
                        update(
                          "styleTags",
                          active
                            ? state.styleTags.filter((t) => t !== tag)
                            : [...state.styleTags, tag]
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-sm border ${
                        active
                          ? "bg-[#d1fa1a] text-black border-transparent"
                          : "border-white/20 hover:bg-white/5"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-6">
              <div>
                <label className="block text-sm mb-2">
                  Nahrajte inšpirácie (obrázky, PDF)
                </label>
                <input
                  multiple
                  type="file"
                  onChange={(e) =>
                    update("files", Array.from(e.target.files ?? []))
                  }
                  className="block w-full rounded-md border border-white/15 bg-white/5 file:mr-4 file:rounded-md file:border-0 file:bg-[#d1fa1a] file:px-3 file:py-2 file:text-black"
                />
                {state.files.length > 0 && (
                  <div className="mt-3 text-sm text-white/70">
                    Vybrané: {state.files.map((f) => f.name).join(", ")}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Odkazy na inšpirácie (Dribbble, Behance, Pinterest…)
                </label>
                <div className="space-y-2">
                  {state.links.map((link, i) => (
                    <input
                      key={i}
                      value={link}
                      onChange={(e) => {
                        const nextLinks = [...state.links];
                        nextLinks[i] = e.target.value;
                        update("links", nextLinks);
                      }}
                      placeholder="https://…"
                      className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                    />
                  ))}
                  <button
                    onClick={() => update("links", [...state.links, ""])}
                    className="text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15"
                  >
                    Pridať odkaz
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <p className="text-sm text-white/70 mb-3">
                Zvoľte farby alebo vložte vlastné HEX
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {state.colors.map((hex, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="h-8 w-8 rounded-full border border-white/10"
                      style={{ background: hex }}
                    />
                    <input
                      value={hex}
                      onChange={(e) => {
                        const next = [...state.colors];
                        next[i] = e.target.value;
                        update("colors", next);
                      }}
                      className="w-28 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-sm"
                    />
                  </div>
                ))}
                <button
                  onClick={() => update("colors", [...state.colors, "#000000"])}
                  className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-sm"
                >
                  + Pridať farbu
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <p className="text-sm text-white/70 mb-3">
                Čo potrebujete navrhnúť?
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Logo",
                  "Vizitky",
                  "Hlavičkový papier",
                  "Obálky",
                  "Roll‑up",
                  "Billboard",
                  "Banner",
                  "Web stránka",
                ].map((item) => {
                  const has = state.items.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() =>
                        update(
                          "items",
                          has
                            ? state.items.filter((i) => i !== item)
                            : [...state.items, item]
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-sm border ${
                        has
                          ? "bg-[#d1fa1a] text-black border-transparent"
                          : "border-white/20 hover:bg-white/5"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">
                  Poznámky k projektu
                </label>
                <textarea
                  rows={6}
                  value={state.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                />
              </div>
              <div className="grid gap-3">
                <div>
                  <label className="block text-sm mb-1">
                    Meno a priezvisko
                  </label>
                  <input
                    value={state.contact.name}
                    onChange={(e) =>
                      update("contact", {
                        ...state.contact,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">E‑mail</label>
                  <input
                    type="email"
                    value={state.contact.email}
                    onChange={(e) =>
                      update("contact", {
                        ...state.contact,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Telefón</label>
                  <input
                    value={state.contact.phone}
                    onChange={(e) =>
                      update("contact", {
                        ...state.contact,
                        phone: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 7 && (
            <div className="grid gap-4 text-sm">
              <Row label="Klient">{state.clientType ?? "—"}</Row>
              <Row label="Služba">{state.service ?? "—"}</Row>
              <Row label="Štýl">{state.styleTags.join(", ") || "—"}</Row>
              <Row label="Farby">
                <div className="flex items-center gap-2">
                  {state.colors.map((hex, i) => (
                    <div
                      key={i}
                      className="h-5 w-5 rounded-full border border-white/10"
                      style={{ background: hex }}
                    />
                  ))}
                </div>
              </Row>
              <Row label="Položky">{state.items.join(", ") || "—"}</Row>
              <Row label="Odkazy">
                {state.links.filter(Boolean).join(", ") || "—"}
              </Row>
              <Row label="Súbory">
                {state.files.length > 0
                  ? `${state.files.length} súbor(y)`
                  : "—"}
              </Row>
              <Row label="Kontakt">
                {state.contact.name ||
                state.contact.email ||
                state.contact.phone
                  ? `${state.contact.name} · ${state.contact.email} · ${state.contact.phone}`
                  : "—"}
              </Row>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 md:px-8 py-5 border-t border-white/10 flex items-center justify-between">
          <div className="text-sm text-white/60">
            Krok {step + 1} / {steps.length}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={step === 0}
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 disabled:opacity-40"
            >
              Späť
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="px-4 py-2 rounded-md bg-[#d1fa1a] text-black hover:brightness-95"
              >
                Pokračovať
              </button>
            ) : (
              <button
                onClick={async () => {
                  try {
                    const response = await fetch("/api/projects", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        clientType: state.clientType,
                        service: state.service,
                        styleTags: state.styleTags,
                        colors: state.colors,
                        items: state.items,
                        notes: state.notes,
                        links: state.links.filter(Boolean),
                        contactName: state.contact.name,
                        contactEmail: state.contact.email,
                        contactPhone: state.contact.phone,
                      }),
                    });

                    if (response.ok) {
                      onClose?.();
                      setStep(0);
                      setState(defaultState);
                      // Redirect to login or show success message
                      window.location.href = "/login";
                    } else {
                      console.error("Failed to submit project");
                    }
                  } catch (error) {
                    console.error("Error submitting project:", error);
                  }
                }}
                className="px-4 py-2 rounded-md bg-[#d1fa1a] text-black hover:brightness-95"
              >
                Odoslať dopyt
              </button>
            )}
          </div>
        </div>
      </Shell>
    );
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <Shell>
        {/* Header */}
        <div className="px-6 md:px-8 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full bg-[#d1fa1a]" />
            <div className="text-lg font-semibold">Rýchla objednávka</div>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15"
          >
            Zavrieť
          </button>
        </div>

        {/* Progress */}
        <div className="px-6 md:px-8 py-3 border-b border-white/10">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2 shrink-0">
                <div
                  className={`h-2 w-10 rounded-full ${
                    i <= step ? "bg-[#d1fa1a]" : "bg:white/10"
                  }`}
                />
                <div
                  className={`text-xs ${
                    i === step ? "text-white" : "text-white/60"
                  }`}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 py-6 overflow-y-auto max-h-[64vh]">
          {step === 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              <CardRadio
                title="Som nový klient"
                desc="Ešte s nami nemáte projekt. Začneme od nuly."
                active={state.clientType === "novy"}
                onClick={() => update("clientType", "novy")}
              />
              <CardRadio
                title="Som existujúci klient"
                desc="Pokračujeme na ďalších výstupoch pre vašu značku."
                active={state.clientType === "existujuci"}
                onClick={() => update("clientType", "existujuci")}
              />
            </div>
          )}
          {step === 1 && (
            <div className="grid md:grid-cols-3 gap-6">
              <CardRadio
                title="Brand dizajn"
                desc="Identita, logo, manuál, aplikácie"
                active={state.service === "brand"}
                onClick={() => update("service", "brand")}
              />
              <CardRadio
                title="Web dizajn"
                desc="UI/UX, konverzie, Next.js"
                active={state.service === "web"}
                onClick={() => update("service", "web")}
              />
              <CardRadio
                title="Tlač a montáž"
                desc="Polepy, billboardy, bannery, inštalácia"
                active={state.service === "tlac"}
                onClick={() => update("service", "tlac")}
              />
            </div>
          )}
          {/* other steps preserved below */}
          {step === 2 && (
            <div>
              <p className="text-sm text-white/70 mb-3">
                Vyberte štýly, ktoré sa vám páčia
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Minimal",
                  "Odvážny",
                  "Elegantný",
                  "Hravo-moderný",
                  "Monochromatický",
                  "Neon / Lime",
                  "Organický",
                  "Tech",
                ].map((tag) => {
                  const active = state.styleTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      onClick={() =>
                        update(
                          "styleTags",
                          active
                            ? state.styleTags.filter((t) => t !== tag)
                            : [...state.styleTags, tag]
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-sm border ${
                        active
                          ? "bg-[#d1fa1a] text-black border-transparent"
                          : "border-white/20 hover:bg-white/5"
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="grid gap-6">
              <div>
                <label className="block text-sm mb-2">
                  Nahrajte inšpirácie (obrázky, PDF)
                </label>
                <input
                  multiple
                  type="file"
                  onChange={(e) =>
                    update("files", Array.from(e.target.files ?? []))
                  }
                  className="block w-full rounded-md border border-white/15 bg:white/5 file:mr-4 file:rounded-md file:border-0 file:bg-[#d1fa1a] file:px-3 file:py-2 file:text-black"
                />
                {state.files.length > 0 && (
                  <div className="mt-3 text-sm text-white/70">
                    Vybrané: {state.files.map((f) => f.name).join(", ")}
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm mb-2">
                  Odkazy na inšpirácie (Dribbble, Behance, Pinterest…)
                </label>
                <div className="space-y-2">
                  {state.links.map((link, i) => (
                    <input
                      key={i}
                      value={link}
                      onChange={(e) => {
                        const nextLinks = [...state.links];
                        nextLinks[i] = e.target.value;
                        update("links", nextLinks);
                      }}
                      placeholder="https://…"
                      className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                    />
                  ))}
                  <button
                    onClick={() => update("links", [...state.links, ""])}
                    className="text-sm px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15"
                  >
                    Pridať odkaz
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Remaining steps unchanged ... */}
          {step === 4 && (
            <div>
              <p className="text-sm text-white/70 mb-3">
                Zvoľte farby alebo vložte vlastné HEX
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {state.colors.map((hex, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="h-8 w-8 rounded-full border border-white/10"
                      style={{ background: hex }}
                    />
                    <input
                      value={hex}
                      onChange={(e) => {
                        const next = [...state.colors];
                        next[i] = e.target.value;
                        update("colors", next);
                      }}
                      className="w-28 rounded-md border border-white/15 bg-white/5 px-2 py-1 text-sm"
                    />
                  </div>
                ))}
                <button
                  onClick={() => update("colors", [...state.colors, "#000000"])}
                  className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/15 text-sm"
                >
                  + Pridať farbu
                </button>
              </div>
            </div>
          )}
          {step === 5 && (
            <div>
              <p className="text-sm text-white/70 mb-3">
                Čo potrebujete navrhnúť?
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Logo",
                  "Vizitky",
                  "Hlavičkový papier",
                  "Obálky",
                  "Roll‑up",
                  "Billboard",
                  "Banner",
                  "Web stránka",
                ].map((item) => {
                  const has = state.items.includes(item);
                  return (
                    <button
                      key={item}
                      onClick={() =>
                        update(
                          "items",
                          has
                            ? state.items.filter((i) => i !== item)
                            : [...state.items, item]
                        )
                      }
                      className={`px-3 py-1.5 rounded-full text-sm border ${
                        has
                          ? "bg-[#d1fa1a] text-black border-transparent"
                          : "border-white/20 hover:bg-white/5"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {step === 6 && (
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm mb-2">
                  Poznámky k projektu
                </label>
                <textarea
                  rows={6}
                  value={state.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                />
              </div>
              <div className="grid gap-3">
                <div>
                  <label className="block text-sm mb-1">
                    Meno a priezvisko
                  </label>
                  <input
                    value={state.contact.name}
                    onChange={(e) =>
                      update("contact", {
                        ...state.contact,
                        name: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">E‑mail</label>
                  <input
                    type="email"
                    value={state.contact.email}
                    onChange={(e) =>
                      update("contact", {
                        ...state.contact,
                        email: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1">Telefón</label>
                  <input
                    value={state.contact.phone}
                    onChange={(e) =>
                      update("contact", {
                        ...state.contact,
                        phone: e.target.value,
                      })
                    }
                    className="w-full rounded-md border border-white/15 bg-white/5 px-3 py-2"
                  />
                </div>
              </div>
            </div>
          )}
          {step === 7 && (
            <div className="grid gap-4 text-sm">
              <Row label="Klient">{state.clientType ?? "—"}</Row>
              <Row label="Služba">{state.service ?? "—"}</Row>
              <Row label="Štýl">{state.styleTags.join(", ") || "—"}</Row>
              <Row label="Farby">
                <div className="flex items-center gap-2">
                  {state.colors.map((hex, i) => (
                    <div
                      key={i}
                      className="h-5 w-5 rounded-full border border-white/10"
                      style={{ background: hex }}
                    />
                  ))}
                </div>
              </Row>
              <Row label="Položky">{state.items.join(", ") || "—"}</Row>
              <Row label="Odkazy">
                {state.links.filter(Boolean).join(", ") || "—"}
              </Row>
              <Row label="Súbory">
                {state.files.length > 0
                  ? `${state.files.length} súbor(y)`
                  : "—"}
              </Row>
              <Row label="Kontakt">
                {state.contact.name ||
                state.contact.email ||
                state.contact.phone
                  ? `${state.contact.name} · ${state.contact.email} · ${state.contact.phone}`
                  : "—"}
              </Row>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 md:px-8 py-5 border-t border-white/10 flex items-center justify-between">
          <div className="text-sm text-white/60">
            Krok {step + 1} / {steps.length}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={step === 0}
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/15 disabled:opacity-40"
            >
              Späť
            </button>
            {step < steps.length - 1 ? (
              <button
                onClick={next}
                className="px-4 py-2 rounded-md bg-[#d1fa1a] text-black hover:brightness-95"
              >
                Pokračovať
              </button>
            ) : (
              <button
                onClick={async () => {
                  try {
                    const response = await fetch("/api/projects", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        clientType: state.clientType,
                        service: state.service,
                        styleTags: state.styleTags,
                        colors: state.colors,
                        items: state.items,
                        notes: state.notes,
                        links: state.links.filter(Boolean),
                        contactName: state.contact.name,
                        contactEmail: state.contact.email,
                        contactPhone: state.contact.phone,
                      }),
                    });

                    if (response.ok) {
                      onClose?.();
                      setStep(0);
                      setState(defaultState);
                      // Redirect to login or show success message
                      window.location.href = "/login";
                    } else {
                      console.error("Failed to submit project");
                    }
                  } catch (error) {
                    console.error("Error submitting project:", error);
                  }
                }}
                className="px-4 py-2 rounded-md bg-[#d1fa1a] text-black hover:brightness-95"
              >
                Odoslať dopyt
              </button>
            )}
          </div>
        </div>
      </Shell>
    </div>
  );
}

function CardRadio({
  title,
  desc,
  active,
  onClick,
}: {
  title: string;
  desc: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`text-left rounded-2xl border p-5 md:p-6 transition ${
        active
          ? "border-transparent bg-[#d1fa1a] text-black"
          : "border-white/15 bg-white/5 hover:bg-white/10 text-white"
      }`}
    >
      <div className="text-base md:text-lg font-semibold">{title}</div>
      <div className="mt-1 text-sm opacity-80">{desc}</div>
    </button>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[120px_1fr] gap-4">
      <div className="text-white/60">{label}</div>
      <div className="text-white">{children}</div>
    </div>
  );
}
