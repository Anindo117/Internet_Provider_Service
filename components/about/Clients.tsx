import Image from "next/image";

const clients = [
  { id: 1, logo: "/images/partners-1.png", alt: "Partner 1" },
  { id: 2, logo: "/images/partners-2.png", alt: "Partner 2" },
  { id: 3, logo: "/images/partners-3.png", alt: "Partner 3" },
  { id: 4, logo: "/images/partners-4.png", alt: "Partner 4" },
  { id: 5, logo: "/images/partners-5.png", alt: "Partner 5" },
  { id: 6, logo: "/images/partners-6.png", alt: "Partner 6" },
];

export default function Clients() {
  return (
    <div className="lg:py-36 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold mb-2">Clients</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our valued clients
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={client.logo}
                alt={client.alt}
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
