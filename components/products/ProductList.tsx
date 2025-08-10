"use client";

import { Product, useCartStore } from "@/lib/store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products: Product[] = [
  {
    id: 1,
    name: "TP-Link TL-WR840N 300Mbps Wireless Router",
    description: "High-speed WiFi router for seamless streaming and gaming experience",
    price: 1400.0,
    originalPrice: 1580.0,
    image: "/images/router-1.jpg",
  },
  {
    id: 2,
    name: "D-Link R04 N300 300mbps Smart Router",
    description: "High-speed WiFi router for seamless streaming and gaming experience",
    price: 12700.0,
    originalPrice: 1350.0,
    image: "/images/router-2.jpg",
  },
  {
    id: 3,
    name: "Mercusys MW306R 300Mbps WiFi Router",
    description: "High-speed WiFi router for seamless streaming and gaming experience",
    price: 1000.0,
    originalPrice: 1109.0,
    image: "/images/router-3.jpg",
  },
  {
    id: 4,
    name: "TP-Link TL-WR850N WiFi Router",
    description: "High-speed WiFi router for seamless streaming and gaming experience",
    price: 1390.0,
    originalPrice: 0.0,
    image: "/images/router-1.jpg",
  },
  {
    id: 5,
    name: "Tenda F3 300mbps Wireless Router",
    description: "High-speed WiFi router for seamless streaming and gaming experience",
    price: 1300.0,
    originalPrice: 1500.0,
    image: "/images/router-5.webp",
  },
  
  
];

export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const displayedProducts = products.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="container mx-auto relative lg:my-48">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
          >
            <div className="relative h-56">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
              {/* {product.originalPrice && (
                <div className="absolute top-4 left-0 bg-red-600 text-white px-4 py-1">
                  Sale!
                </div>
              )} */}
            </div>

            <div className="p-4 text-center">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <div className="space-y-4">
                <div className="text-sm flex items-center justify-center gap-2 mb-4">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-sm font-bold">
                    Tk. {product.price.toFixed(2)}
                  </span>
                </div>

                <Link href="/contacts">
                  <button
                    className="w-full py-2 bg-[#709D06] text-white hover:bg-[#688720] transition-colors"
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="w-10 h-10 rounded-full bg-[#709D06] text-white hover:bg-[#688720] transition-all shadow-md flex items-center justify-center disabled:opacity-50"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages - 1}
          className="w-10 h-10 rounded-full bg-[#709D06] text-white hover:bg-[#688720] transition-all shadow-md flex items-center justify-center disabled:opacity-50"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
