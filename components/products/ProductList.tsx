"use client";

import { Product, useCartStore } from "@/lib/store";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products: Product[] = [
  {
    id: 1,
    name: "WiFi Streaming Router",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...",
    price: 3500.0,
    originalPrice: 4000.0,
    image: "/images/router-1.jpg",
  },
  {
    id: 2,
    name: "Waterproof Bluetooth Speaker",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...",
    price: 1900.0,
    image: "/images/speaker-1.jpg",
  },
  {
    id: 3,
    name: "Dual Antenna Home Router",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...",
    price: 1900.0,
    image: "/images/router-2.jpg",
  },
  {
    id: 4,
    name: "Top TV box with Remote Control",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...",
    price: 3200.0,
    image: "/images/tv-box-1.jpg",
  },
  {
    id: 5,
    name: "Virtual Reality Glasses",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...",
    price: 1900.0,
    image: "/images/vr-1.jpg",
  },
  {
    id: 6,
    name: "Smartphone Virtual Reality Glasses",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...",
    price: 1900.0,
    image: "/images/vf-2.jpg",
  },
  {
    id: 7,
    name: "Pocket Bluetooth Speaker",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium...",
    price: 1900.0,
    image: "/images/speaker-2.jpg",
  },
];

export default function ProductList() {
  const addItem = useCartStore((state) => state.addItem);
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
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
              {product.originalPrice && (
                <div className="absolute top-4 left-0 bg-red-600 text-white px-4 py-1">
                  Sale!
                </div>
              )}
            </div>

            <div className="p-6 text-center">
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2">
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-xl font-bold">
                    Tk. {product.price.toFixed(2)}
                  </span>
                </div>

                <Link href="/cart">
                  <button
                    onClick={() => addItem(product)}
                    className="w-full py-2 bg-[#709D06] text-white hover:bg-[#688720] transition-colors"
                  >
                    Add to cart
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
