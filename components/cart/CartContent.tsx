"use client";

import { useCartStore } from "@/lib/store";
import { CreditCard, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartContent() {
  const { items, removeItem, updateQuantity, total, clearCart } =
    useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Here you would typically integrate with a payment provider
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);
      alert("Thank you for your purchase!");
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link
          href="/products"
          className="inline-block px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
          </div>

          <div className="p-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center py-6 border-b border-gray-200 last:border-0"
              >
                <div className="relative w-24 h-24 flex-shrink-0 bg-gray-50 rounded">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <div className="ml-6 flex-grow">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(0, item.quantity - 1))
                      }
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-gray-400 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-6">Order Summary</h3>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${total().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full py-4 bg-red-600 text-white rounded flex items-center justify-center gap-2 hover:bg-red-700 transition-colors disabled:bg-gray-400"
          >
            <CreditCard className="w-5 h-5" />
            {isProcessing ? "Processing..." : "Proceed to Payment"}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
}
