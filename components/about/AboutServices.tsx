import { Radio, Tv, Wifi } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: <Wifi className="w-12 h-12 text-red-600" />,
    title: "Broadband Connection",
    description:
      "Consectetur adipiscing elit duis tristique sollicitudin nibh purus viverra sit.",
    link: "/services/broadband",
  },
  {
    icon: <Tv className="w-12 h-12 text-red-600" />,
    title: "DTH TV Connections",
    description:
      "Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet.",
    link: "/services/tv",
  },
  {
    icon: <Radio className="w-12 h-12 text-red-600" />,
    title: "Wifi Connection",
    description:
      "Gravida quis blandit turpis cursus in hac habitasse in iaculis nunc sed augue lacus.",
    link: "/services/wifi",
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
                <span className="text-red-600">|</span> {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="inline-flex items-center text-black font-semibold hover:text-red-600 transition-colors"
              >
                Read More
                <span className="ml-2"> →</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
