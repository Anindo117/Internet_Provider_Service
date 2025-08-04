import { Expand, Radio, Target, Tv, Wifi } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Expand className="w-12 h-12 text-[#709D06]" />,
    title: "Our Mission",
    description:
      "All clients are important to us. Our mission is to serve you with an efficient, top-quality implementation at the lowest cost. Our purpose is to deliver and keep quality all over the entire process. We are committed to providing the best possible service to our clients.",
  },
  {
    icon: <Target className="w-12 h-12 text-[#709D06]" />,
    title: "Our Vision",
    description:
      "To be the leading provider of communication solutions in the region, offering innovative and reliable services that meet the evolving needs of our clients.",
  },
  {
    icon: <Radio className="w-12 h-12 text-[#709D06]" />,
    title: "Our Values",
    description:
      "Achieve from you a high-level understanding of your requirements. Empathize your business and its value intention. Empathize on your business model & your competitor or customer environment. Work with you to identify your exact desires and build a process-driven framework to lodge each and every requirement you may have within the service terms proposed.",
  },
];

export default function AboutServices() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center hover:bg-[#FFF8F3] rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-[#709D06]">|</span> {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
