export function Footer() {
  return (
    <footer className="px-6 md:px-10 py-14 bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[#d1fa1a]" />
            <div className="text-xl font-extrabold">Boolin</div>
          </div>
          <p className="mt-3 text-white/70">
            Slovenská agentúra pre brand, web a tlač. Robíme dizajn, ktorý
            funguje.
          </p>
        </div>
        <div>
          <div className="font-semibold">Navigácia</div>
          <ul className="mt-2 space-y-1 text-white/80 text-sm">
            <li>
              <a href="#sluzby" className="hover:underline">
                Služby
              </a>
            </li>
            <li>
              <a href="#projekty" className="hover:underline">
                Projekty
              </a>
            </li>
            <li>
              <a href="#proces" className="hover:underline">
                Proces
              </a>
            </li>
            <li>
              <a href="#ceny" className="hover:underline">
                Cenník
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Kontakt</div>
          <ul className="mt-2 space-y-1 text-white/80 text-sm">
            <li>ahoj@boolin.sk</li>
            <li>+421 000 000 000</li>
            <li>Bratislava, Slovensko</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Začať</div>
          <button className="mt-2 px-4 py-2 rounded-full bg-[#d1fa1a] text-black font-semibold">
            Rýchla objednávka
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 text-sm text-white/60">
        © {new Date().getFullYear()} Boolin
      </div>
    </footer>
  );
}

export default Footer;
