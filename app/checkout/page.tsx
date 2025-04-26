import CheckoutForm from "@/components/checkout/CheckoutForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout - ISP Service Provider",
  description: "Complete your purchase securely.",
};

export default function CheckoutPage() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}
