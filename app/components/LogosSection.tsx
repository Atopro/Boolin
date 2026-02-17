"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LogosSection() {
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
    <section className="py-10 md:py-32">
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
