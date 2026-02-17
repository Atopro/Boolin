"use client";

import OnboardingWizard from "../OnboardingWizard";
import Footer from "../components/Footer";

import Header from "../components/Header";

export default function OnboardingPage() {
  return (
    <div className={`min-h-dvh bg-white text-neutral-900`}>
      <Header />

      <main className="page-pad pt-6 pb-14 md:pt-10 md:pb-20">
        <div className="page rounded-3xl border border-neutral-200 bg-neutral-50 p-6 md:p-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">Nový dopyt</h1>
          <p className="mt-3 text-neutral-600 max-w-[60ch]">
            Vyplňte krátke kroky a vytvoríme vám ponuku na mieru. Zaberie to pár
            minút.
          </p>
          <div className="mt-6">
            <OnboardingWizard inline />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
