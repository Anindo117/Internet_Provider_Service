import offerImage from "/public/images/test-now-bg.jpg";

export default function SpecialOffer() {
  return (
    <div
      className="py-16 lg:min-h-[90vh] md:py-24 bg-cover bg-center bg-no-repeat px-4 flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${offerImage.src})`,
      }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              Test our TV and Internet
              <br />
              just for <span className="text-red-600">1$ per month</span>
            </h2>

            <p className="text-gray-200 mb-6">
              Etiam euismod eros in nisl iaculis venenatis. Aenean venenatis
              turpis et gravida interdum. Nulla facilisi. Pellentesque
              imperdiet, sem et commodo interdum, justo velit sagittis metus
              erat sed purus.
            </p>

            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  />
                </svg>
              </div>
              <h6 className="text-white font-semibold">
                Free WiFi router included
              </h6>
            </div>

            <button className="px-4 py-2 md:px-6 md:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition duration-300">
              Test now
            </button>
          </div>

          <div className="hidden lg:flex justify-end ">
            <div className="relative">
              <div className="bg-yellow-600 text-black font-bold px-10 py-10 rounded-full absolute bottom-28 right-16 -rotate-12 text-center">
                <p className="text-2xl uppercase">
                  special
                  <br />
                  offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
