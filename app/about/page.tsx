import AboutHero from "@/components/about/AboutHero";
import AboutServices from "@/components/about/AboutServices";
import Clients from "@/components/about/Clients";
import Gallery from "@/components/about/Gallery";
import Testimonials from "@/components/home/Testimonials";
import { ClientRequest } from "http";
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
      <Clients />
      <Testimonials />
      <Gallery />
    </div>
  );
}
