"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const shows = [
  {
    id: 1,
    title: "Bambi",
    year: "2012",
    rating: "8.4",
    image: "/images/show-1.jpg",
  },
  {
    id: 2,
    title: "M-25",
    year: "2014",
    rating: "7.7",
    image: "/images/show-2.jpg",
  },
  {
    id: 3,
    title: "Scream",
    year: "2016",
    rating: "8.7",
    image: "/images/show-3.jpg",
  },
  {
    id: 4,
    title: "The Lovers",
    year: "2014",
    rating: "8.2",
    image: "/images/show-4.jpg",
  },
  {
    id: 5,
    title: "Afganistan",
    year: "2017",
    rating: "7.7",
    image: "/images/show-5.jpg",
  },
  {
    id: 6,
    title: "Road to the Mountains",
    year: "2016",
    rating: "7.1",
    image: "/images/show-6.jpg",
  },
];

export default function FeaturedShows() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      setMaxScroll(
        sliderRef.current.scrollWidth - sliderRef.current.clientWidth
      );
    }

    const handleResize = () => {
      if (sliderRef.current) {
        setMaxScroll(
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        );
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(maxScroll, scrollPosition + scrollAmount);

      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });

      setScrollPosition(newPosition);
    }
  };

  return (
    <div className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#709D06] font-semibold mb-2">Interesting</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Featured Shows
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in
            elementum urna est ut ligula.
          </p>
        </div>

        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 -mx-4 px-4 gap-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {shows.map((show) => (
              <div
                key={show.id}
                className="flex-none w-64 md:w-72 snap-start transform transition-transform duration-300 hover:scale-105"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg h-full">
                  <div className="relative h-[400px]">
                    <Image
                      src={show.image}
                      alt={show.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg">
                      {show.title}
                    </h3>
                    <div className="flex justify-between mt-2 text-sm">
                      <span className="text-gray-400">Year: {show.year}</span>
                      <span className="text-yellow-500">
                        Rating: {show.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#709D06] text-white hover:bg-[#688720] transition-all"
            disabled={scrollPosition <= 0}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#709D06] text-white hover:bg-[#688720] transition-all"
            disabled={scrollPosition >= maxScroll}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
