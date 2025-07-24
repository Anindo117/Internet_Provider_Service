import { cn } from "@/lib/utils";
import { Check, Wifi } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    type: "Internet",
    title: "Easy Surfing",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 30Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "700 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Impression",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 40Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "800 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Home Comfort",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 50Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "1000 Tk",
    popular: true,
  },
  {
    type: "Internet",
    title: "Premium Plan",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 60Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "1200 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Craving",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 70Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "1500 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Swift Surfing",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 80Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "2000 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Endless Game",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 90Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "2500 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Super Impression",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 100Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "3000 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Supreme Impression",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 110Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "3500 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Extreme Surfing",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 120Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "4000 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Mild",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 20Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "500 Tk",
    popular: false,
  },
  {
    type: "Internet",
    title: "Gentle",
    icons: [<Wifi key="wifi" className="w-6 h-6 text-[#709D06]" />],
    features: [
      "Up to 25Mbps",
      "Night Turbo-Speed",
      "Extra Speed on VAS",
      "Buffer less Unlimited devices",
      "24/7 support",
    ],
    price: "600 Tk",
    popular: false,
  },
];

export default function PricingPlans({ limit }: { limit?: number } = {}) {
  const displayedPlans = limit ? plans.slice(0, limit) : plans;
  return (
    <div className="py-16 md:py-24 bg-[#FAF7F3] text-[#709D06]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#709D06] font-semibold mb-2">Packages</p>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Choose your plan
          </h2>
          <p className="lg:max-w-3xl text-sm md:text-base mx-auto text-gray-400">
            Selecting the right internet plan is essential to match your
            lifestyle and online needs. Whether you are a casual browser, a
            remote worker, or a hardcore gamer, we offer a variety of tailored
            packages to suit every user. Our flexible plans are designed with
            speed, reliability, and affordability in mind—so you get the best
            value without compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedPlans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "bg-gray-900 rounded-lg p-6 relative overflow-hidden transition-transform hover:-translate-y-1 duration-300",
                plan.popular
                  ? "border-2 border-yellow-600"
                  : "border border-gray-800"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-yellow-600 text-black text-xs font-bold px-3 py-1 transform rotate-45 translate-x-2 -translate-y-1">
                    popular
                  </div>
                </div>
              )}

              <div className="mb-6 text-center">
                <p className="text-gray-400 text-sm">{plan.type}</p>
                <h4 className="text-xl font-bold mt-1">{plan.title}</h4>
                <div className="flex justify-center mt-3 space-x-2">
                  {plan.icons.map((icon, iconIndex) => (
                    <div key={iconIndex}>{icon}</div>
                  ))}
                </div>
              </div>

              <ul className="mb-6 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                  >
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center mb-6">
                <span className="text-2xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-1">| month</span>
              </div>

              <Link href="/my-account">
                <button className="w-full py-3 hover:bg-[#709D06] bg-white text-black hover:text-white font-semibold rounded-md transition duration-300">
                  Get started
                </button>
              </Link>
            </div>
          ))}
        </div>

        {displayedPlans.length < plans.length && (
          <div className="flex justify-center mt-12">
            <Link href="/pricing">
              <button className="px-9 py-3 bg-[#709D06] hover:bg-[#688720] text-white font-semibold rounded-md transition duration-300">
                Explore More
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
