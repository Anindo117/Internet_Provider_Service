"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Patric Stone",
    image: "/images/testimonial-1.jpg",
    text: "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Etiam mattis laoreet leo sed accumsan. Fusce tincidunt in leo lacinia condimentum.",
  },
  {
    id: 2,
    name: "Hugo James",
    image: "/images/testimonial-2.jpg",
    text: "Maecenas ultricies felis sit amet libero scelerisque, ut eleifend leo mattis. Aliquam porta facilisis metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  },
  {
    id: 3,
    name: "Stefanie Rashford",
    image: "/images/testimonial-3.jpg",
    text: "Morbi viverra volutpat ex, id pellentesque felis volutpat eu. Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Integer euismod elit vel nibh commodo, at consequat nisl rhoncus. Etiam mattis laoreet leo sed accumsan. Aliquam tempor lorem odio, non aliquam nunc egestas in.",
  },
  {
    id: 4,
    name: "Cassie Carleton",
    image: "/images/testimonial-4.jpg",
    text: "Nullam orci dui, dictum et magna sollicitudin, tempor blandit erat. Maecenas suscipit tellus sit amet augue placerat fringilla a id lacus. Fusce tincidunt in leo lacinia condimentum. Donec placerat, orci vel consequat mattis, sapien lacus pretium mi, sed lacinia dolor nibh non mi.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((current) =>
        current === testimonials.length - 1 ? 0 : current + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((current) =>
        current === 0 ? testimonials.length - 1 : current - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our clients say
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            ref={testimonialsRef}
            className="relative overflow-hidden"
            style={{ height: "320px" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute inset-0 flex flex-col items-center transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={110}
                        height={110}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  </div>
                  <p className="text-gray-600 text-center">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-all"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:bg-red-700 focus:outline-none transition-all"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
