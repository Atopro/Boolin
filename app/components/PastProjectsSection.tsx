export default function PastProjectsSection() {
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
