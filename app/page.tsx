/* eslint-disable @next/next/no-img-element */
import AddressForm from "@/components/home/AddressForm";
import FeaturedSection from "@/components/home/FeaturedSection";
import FeaturedShows from "@/components/home/FeaturedShows";
import Features from "@/components/home/Features";
import HeroSlider from "@/components/home/HeroSlider";
import Partners from "@/components/home/Partners";
import PricingPlans from "@/components/home/PricingPlans";
import ServiceBlocks from "@/components/home/ServiceBlocks";
import SpecialOffer from "@/components/home/SpecialOffer";
import Testimonials from "@/components/home/Testimonials";
import ProductList from "@/components/products/ProductList";

export default function Home() {
  return (
    <div>
      <HeroSlider />

      <div className="container mx-auto px-4 relative">
        <ServiceBlocks />
      </div>

      <FeaturedSection />
      <Features />
      <PricingPlans />
      {/* <AddressForm /> */}
      <Testimonials />
      <SpecialOffer />
      <FeaturedShows />

      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 lg:h-96 bg-black" />
        <div className="relative">
          <div className="container mx-auto px-4">
            <div className="flex justify-center">
              <img
                src="/images/sofa.png"
                alt="Comfortable viewing"
                className="max-w-full h-auto lg:-mb-40 -mt-12 z-10"
              />
            </div>
            <div>
              <img
                src="/images/sofa-popcorn.png"
                alt="popcorn over sofa"
                className="absolute bottom-10 z-10 left-1/2 hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <Partners /> */}
      <ProductList />
    </div>
  );
}
