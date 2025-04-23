import { Wifi, Tv, Phone, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    type: 'Internet',
    title: 'Easy Surfing',
    icons: [<Wifi key="wifi" className="w-6 h-6 text-red-600" />],
    features: [
      'Up to 50Mbps',
      'Night Turbo-Speed',
      'WiFi router',
      'Unlimited devices'
    ],
    price: '$24.99',
    popular: false
  },
  {
    type: 'TV',
    title: 'Impression',
    icons: [<Tv key="tv" className="w-6 h-6 text-red-600" />],
    features: [
      '200+ chanels',
      '5 adult chanels',
      'TV-Box',
      'Unlimited rooms'
    ],
    price: '$18.00',
    popular: false
  },
  {
    type: 'Internet + TV',
    title: 'Home Comfort',
    icons: [
      <Wifi key="wifi" className="w-6 h-6 text-red-600" />,
      <Tv key="tv" className="w-6 h-6 text-red-600" />
    ],
    features: [
      'Up to 100Mbps',
      '200+ chanels',
      'WiFi router',
      'Unlimited devices'
    ],
    price: '$37.99',
    popular: true
  },
  {
    type: 'Internet + TV + Phone',
    title: 'Premium Plan',
    icons: [
      <Wifi key="wifi" className="w-6 h-6 text-red-600" />,
      <Tv key="tv" className="w-6 h-6 text-red-600" />,
      <Phone key="phone" className="w-6 h-6 text-red-600" />
    ],
    features: [
      'Up to 1000Mbps',
      '250+ chanels',
      'WiFi router and TV Box',
      'Phone'
    ],
    price: '$49.00',
    popular: false
  }
];

export default function PricingPlans() {
  return (
    <div className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold mb-2">Tariffs</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose your plan</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac
            faucibus hendrerit, mauris ante viverra urna, in elementum urna est ut ligula.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-gray-900 rounded-lg p-6 relative overflow-hidden transition-transform hover:-translate-y-1 duration-300",
                plan.popular ? "border-2 border-yellow-600" : "border border-gray-800"
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
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center mb-6">
                <span className="text-2xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-1">| month</span>
              </div>
              
              <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300">
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}