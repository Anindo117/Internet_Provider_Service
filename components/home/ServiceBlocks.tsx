import { Wifi, Tv, Phone } from "lucide-react";

const services = [
  {
    icon: <Wifi className="w-12 h-12 text-red-600" />,
    title: "Broadband",
    description:
      "Unlimited high speed internet for the whole family and devices",
    price: "from $24.99",
  },
  {
    icon: <Tv className="w-12 h-12 text-red-600" />,
    title: "Satelite TV",
    description:
      "Over 200 entertainment channels with movies, cartoons, sport and shows",
    price: "from $18",
  },
  {
    icon: <Phone className="w-12 h-12 text-red-600" />,
    title: "Mobility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum.",
    price: "from $29.99",
  },
];

export default function ServiceBlocks() {
  return (
    <div className="bg-gray-100 py-8 md:py-12 lg:-mt-20 relative z-20 rounded-lg shadow-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 mr-4">{service.icon}</div>
              <div>
                <h4 className="text-lg md:text-xl font-bold mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-2 text-sm md:text-base">
                  {service.description}
                </p>
                <p className="text-red-600 font-semibold">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
