import Image from "next/image";

const partners = [
  { id: 1, logo: "/images/partners-1.png", alt: "Partner 1" },
  { id: 2, logo: "/images/partners-2.png", alt: "Partner 2" },
  { id: 3, logo: "/images/partners-3.png", alt: "Partner 3" },
  { id: 4, logo: "/images/partners-4.png", alt: "Partner 4" },
  { id: 5, logo: "/images/partners-5.png", alt: "Partner 5" },
  { id: 6, logo: "/images/partners-6.png", alt: "Partner 6" },
];

export default function Partners() {
  return (
    <div className="py-36 lg:mt-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={120}
                height={60}
                className="max-h-24 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
