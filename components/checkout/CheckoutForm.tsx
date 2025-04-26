"use client";

import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/lib/store";
import { CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
}

export default function CheckoutForm() {
  const router = useRouter();
  const { toast } = useToast();
  const { items, total, clearCart } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    setTimeout(() => {
      clearCart();
      setIsProcessing(false);

      toast({
        title: "Order Confirmed!",
        description:
          "Thank you for your purchase. You will receive an email confirmation shortly.",
        duration: 5000,
      });

      router.push("/checkout/success");
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      {/* Billing Information */}
      <div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">Billing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                name="city"
                required
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                name="state"
                required
                value={formData.state}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                name="zipCode"
                required
                value={formData.zipCode}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment, order summary & button Information */}
      <div>
        {/* Payment Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">Payment Information</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                required
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="cardExpiry"
                  required
                  placeholder="MM/YY"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  name="cardCvc"
                  required
                  placeholder="123"
                  value={formData.cardCvc}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-lg lg:my-10">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          disabled={isProcessing}
          className="px-8 py-2 bg-red-600 text-white rounded-md flex items-center justify-center gap-2 hover:bg-red-700 transition-colors disabled:bg-gray-400"
        >
          {isProcessing ? (
            <>Processing...</>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Confirm Order
            </>
          )}
        </button>
      </div>
    </form>
  );
}
