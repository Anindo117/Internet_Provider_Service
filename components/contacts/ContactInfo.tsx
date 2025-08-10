import { Clock, Mail, MapPin, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-8 h-8 text-red-600" />,
    title: "Location",
    details: "Priyanka Runway City, Uttara, Dhaka",
  },
  {
    icon: <Phone className="w-8 h-8 text-red-600" />,
    title: "Phones",
    details: ["0(800) 890-90-609", "0(800) 890-90-620"],
  },
  {
    icon: <Mail className="w-8 h-8 text-red-600" />,
    title: "Email",
    details: ["sale@like-themes.com", "president@like-themes.com"],
  },
  {
    icon: <Clock className="w-8 h-8 text-red-600" />,
    title: "Working hours",
    details: ["Wednesday - Sunday", "7:00 AM - 5:00 PM"],
  },
];

export default function ContactInfo() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h6 className="text-lg font-bold mb-2">{item.title}</h6>
              <div className="text-gray-600">
                {Array.isArray(item.details) ? (
                  item.details.map((detail, idx) => (
                    <div key={idx}>{detail}</div>
                  ))
                ) : (
                  <div>{item.details}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
