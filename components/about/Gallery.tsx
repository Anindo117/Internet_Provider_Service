import Image from "next/image";

const images = [
  {
    id: 1,
    src: "/images/gallery-1.jpg",
    alt: "Broadband",
  },
  {
    id: 2,
    src: "/images/gallery-2.jpg",
    alt: "Online TV",
  },
  {
    id: 3,
    src: "/images/gallery-3.jpg",
    alt: "Connection",
  },
  {
    id: 4,
    src: "/images/gallery-4.jpg",
    alt: "Streaming",
  },
  {
    id: 5,
    src: "/images/gallery-3.jpg",
    alt: "Gaming",
  },
];

const Gallery = () => {
  return (
    <>
      <div className="text-center mb-12">
        <p className="text-[#709D06] font-semibold mb-2">Gallery</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our satisfaction
        </h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 my-14 lg:my-32 px-4">
        {images.map((image) => (
          <div key={image.id} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              height={500}
              width={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
              {image.alt}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
