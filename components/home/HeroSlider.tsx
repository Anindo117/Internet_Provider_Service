'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Your Favorite',
    subtitle: 'Shows and Movies',
    description: 'Duis eu commodo massa. Integer volutpat imperdiet libero vel laoreet. Sed euismod a ligula quis suscipit. Suspendisse potenti. Proin porta tristique urna, id commodo.',
    image: '/images/Slide01.jpg'
  },
  {
    id: 2,
    title: 'UEFA & Worldcup',
    subtitle: 'Football Stream',
    description: 'Duis eu commodo massa. Integer volutpat imperdiet libero vel laoreet. Sed euismod a ligula quis suscipit. Suspendisse potenti. Proin porta tristique urna, id commodo.',
    image: '/images/Slide02.jpg'
  },
  {
    id: 3,
    title: 'Online Cinema',
    subtitle: 'in Your Smartphone',
    description: 'Duis eu commodo massa. Integer volutpat imperdiet libero vel laoreet. Sed euismod a ligula quis suscipit. Suspendisse potenti. Proin porta tristique urna, id commodo.',
    image: '/images/Slide03.jpg'
  },
  {
    id: 4,
    title: 'Last Seasons',
    subtitle: 'of Popular Shows',
    description: 'Duis eu commodo massa. Integer volutpat imperdiet libero vel laoreet. Sed euismod a ligula quis suscipit. Suspendisse potenti. Proin porta tristique urna, id commodo.',
    image: '/images/Slide04.jpg'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  const goToPrevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 1000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 6500);

    return () => clearInterval(interval);
  }, [currentSlide, isAnimating]);

  return (
    <div className="relative w-full h-screen max-h-[100vh] overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${slide.image})`,
          }}
        >
          <div className="container mx-auto px-4 h-full flex flex-col justify-center">
            <div className="max-w-3xl mt-20 lg:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 ease-in-out       transform translate-y-0">
                <span className="text-red-600">{slide.title}</span>
                <br />
                {slide.subtitle}
              </h1>
              <p className="text-white opacity-75 mb-8 max-w-xl transition-all duration-700 ease-in-out transform translate-y-0">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition duration-300">
                  Read more
                </button>
                <button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-700 transition duration-300">
                  Start now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
      >
        <ArrowLeft size={20} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}