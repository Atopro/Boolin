"use client";

import { useEffect, useRef, useState } from "react";

export default function RotatingHeadline() {
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
