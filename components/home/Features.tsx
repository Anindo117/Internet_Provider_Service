import {
  DollarSign,
  Film,
  Gauge,
  HeadphonesIcon,
  Tv,
  Wifi,
} from "lucide-react";

const features = [
  {
    icon: <Gauge className="w-16 h-16 text-[#709D06]" />,
    title: "Ultra-speed Connection",
  },
  {
    icon: <Tv className="w-16 h-16 text-[#709D06]" />,
    title: "250+ World Channels",
  },
  {
    icon: <Wifi className="w-16 h-16 text-[#709D06]" />,
    title: "Free Installation",
  },
  {
    icon: <Film className="w-16 h-16 text-[#709D06]" />,
    title: "4K and 8K Quality",
  },
  {
    icon: <DollarSign className="w-16 h-16 text-[#709D06]" />,
    title: "Flexible Tariff Plans",
  },
  {
    icon: <HeadphonesIcon className="w-16 h-16 text-[#709D06]" />,
    title: "Fast Support 24/7",
  },
];

export default function Features() {
  return (
    <div className="py-6 md:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{feature.icon}</div>
              <h6 className="font-semibold text-sm md:text-lg">
                {feature.title}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
