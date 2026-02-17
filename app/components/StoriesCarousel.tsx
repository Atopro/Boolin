"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";

export default function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [rotationDirection, setRotationDirection] = useState(0);
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

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
    }

    if (rotationDirection !== 0) {
      rotationIntervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          return rotationDirection === 1
            ? (prev + 1) % stories.length
            : (prev - 1 + stories.length) % stories.length;
        });
      }, 800);
    } else {
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

          <div className="relative w-full h-full flex items-center justify-center">
            {stories.map((story, index) => {
              const isCenter = index === currentIndex;
              const isLeft =
                index === (currentIndex - 1 + stories.length) % stories.length;
              const isRight = index === (currentIndex + 1) % stories.length;
              const isLeft2 =
                index === (currentIndex - 2 + stories.length) % stories.length;
              const isRight2 = index === (currentIndex + 2) % stories.length;

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

                    <div className="absolute bottom-0 left-0 right-0 h-[25%] bg-neutral-900 p-6 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-sm md:text-base mb-1 line-clamp-2">
                        {story.title}
                      </h3>
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {story.description}
                      </p>
                    </div>

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
