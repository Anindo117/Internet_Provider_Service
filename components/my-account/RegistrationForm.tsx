"use client";

import { useToast } from "@/hooks/use-toast";
import { MapPin, Package, User } from "lucide-react";
import router from "next/router";
import { useState } from "react";

const packages = [
  {
    id: 1,
    name: "Basic Internet",
    speed: "50 Mbps",
    price: 1000,
    description: "Perfect for browsing and streaming",
  },
  {
    id: 2,
    name: "Premium Internet",
    speed: "100 Mbps",
    price: 3000,
    description: "Ideal for 4K streaming",
  },
  {
    id: 3,
    name: "Ultimate Bundle",
    speed: "120 Mbps",
    price: 4000,
    description: "Internet + Game + Phone services",
  },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipCode: string;
  selectedPackage: string;
}

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    selectedPackage: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Registration failed");

      toast({
        title: "Registration successful",
        description: "We will contact you to schedule the installation.",
        duration: 5000,
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        zipCode: "",
        selectedPackage: "",
      });
      router.push("/")
    } catch (err: any) {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Package Selection */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Package className="w-5 h-5 text-[#709D06]" />
          Select Package
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <label
              key={pkg.id}
              className={`relative flex flex-col p-4 border-2 rounded-lg cursor-pointer transition-all ${
                formData.selectedPackage === pkg.name
                  ? "border-[#709D06] bg-red-50"
                  : "border-gray-200 hover:border-[#709D06]"
              }`}
            >
              <input
                type="radio"
                name="selectedPackage"
                value={pkg.name}
                checked={formData.selectedPackage === pkg.name}
                onChange={handleInputChange}
                className="absolute opacity-0"
              />
              <div className="text-lg font-bold mb-2">{pkg.name}</div>
              <div className="text-[#709D06] font-bold mb-1">{pkg.speed}</div>
              <div className="text-2xl font-bold mb-2">{pkg.price} Tk/mo</div>
              <div className="text-sm text-gray-600">{pkg.description}</div>
            </label>
          ))}
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <User className="w-5 h-5 text-[#709D06]" />
          Personal Information
        </h2>
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
              className="w-full px-4 py-1 border rounded-md focus:ring-2  focus:border-transparent"
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent"
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent"
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Installation Address */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#709D06]" />
          Installation Address
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Street Address
            </label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent"
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent"
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !formData.selectedPackage}
        className="px-9 py-4 bg-[#709D06] text-white rounded-md flex items-center justify-center gap-2 hover:bg-[#688720] transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? "Processing..." : <>Submit Registration</>}
      </button>
    </form>
  );
}
