import AboutHero from "@/components/about/AboutHero";
import AboutServices from "@/components/about/AboutServices";
import Testimonials from "@/components/home/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - ISP Service Provider",
  description: "Learn more about our company and the services we provide.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutHero />
      <AboutServices />
      <div>
        <Testimonials />
      </div>
    </div>
  );
}
