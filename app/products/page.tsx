import ProductList from "@/components/products/ProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - ISP Service Provider",
  description: "Browse our selection of networking and entertainment devices.",
};

export default function ProductsPage() {
  return (
    <div className="py-16 bg-[#FFF8F3]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#709D06] font-semibold mb-2">Online Store</p>
          <h1 className="text-4xl md:text-5xl font-bold">Popular Routers</h1>
        </div>
        <ProductList />
      </div>
    </div>
  );
}
