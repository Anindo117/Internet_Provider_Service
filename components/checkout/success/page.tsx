import Link from "next/link";
import { Check } from "lucide-react";

export default function CheckoutSuccessPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-600 mb-8">
            Your order has been successfully placed. You will receive an email
            confirmation shortly.
          </p>
          <Link
            href="/products"
            className="inline-block px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
