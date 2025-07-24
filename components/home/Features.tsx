import {
  Cloud,
  DollarSign,
  Film,
  Gauge,
  Globe,
  HeadphonesIcon,
  Tv,
  Wifi,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Gauge className="w-16 h-16 text-[#709D06]" />,
    title: "Ultra-speed Connection",
    url: "http://www.speedtest.com.sg"
  },
  {
    icon: <Globe className="w-16 h-16 text-[#709D06]" />,
    title: "Domain",
    url:"https://mkzdcp.supersite2.srsportal.com"
  },
  {
    icon: <Cloud className="w-16 h-16 text-[#709D06]" />,
    title: "Hosting",
    url:"https://mkzdcp.supersite2.srsportal.com"
  },
  {
    icon: <Film className="w-16 h-16 text-[#709D06]" />,
    title: "4K and 8K Quality",
    url:"/"
  },
  {
    icon: <DollarSign className="w-16 h-16 text-[#709D06]" />,
    title: "Flexible Tariff Plans",
    url:"/pricing"
  },
  {
    icon: <HeadphonesIcon className="w-16 h-16 text-[#709D06]" />,
    title: "Fast Support 24/7",
    url:"/contacts"
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
              <Link href={feature.url} target={feature.url.startsWith('http') ? '_blank' : undefined} rel={feature.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <h6 className="font-semibold text-sm md:text-lg hover:text-[#709D06]">
                  {feature.title}
                </h6>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
