import Image from "next/image";

export default function FeaturedSection() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-red-600">Live Sport</span> and TV-shows for
              best friends
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Etiam euismod eros in nisl iaculis venenatis. Aenean venenatis
              turpis et gravida interdum. Nulla facilisi. Pellentesque
              imperdiet, sem et commodo interdum, justo velit sagittis metus
              erat sed purus.
            </p>

            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="flex items-center">
                <div className="text-red-600 flex items-center justify-center font-extrabold text-2xl mr-3">
                  4K
                </div>
                <h6 className="font-semibold">Ultra HD Quality</h6>
              </div>

              <div className="flex items-center">
                <div className="text-red-600 flex items-center justify-center font-extrabold text-2xl mr-3">
                  200+
                </div>
                <h6 className="font-semibold">Online Channels</h6>
              </div>
            </div>

            <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-300">
              Read more
            </button>
          </div>

          <div className="order-1 md:order-2">
            <Image
              src="/images/live-sport.png"
              alt="Live sport streaming"
              width={687}
              height={623}
              className="w-full h-auto max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
