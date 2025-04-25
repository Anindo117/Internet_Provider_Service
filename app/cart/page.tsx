import { Metadata } from "next";
import CartContent from "@/components/cart/CartContent";

export const metadata: Metadata = {
  title: "Shopping Cart - ISP Service Provider",
  description: "View your shopping cart and proceed to checkout.",
};

export default function CartPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <CartContent />
      </div>
    </div>
  );
}
