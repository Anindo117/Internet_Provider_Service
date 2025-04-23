export default function AddressForm() {
  return (
    <div className="py-16 md:py-24 bg-red-600 bg-[url('/images/globus-bg.png')] bg-no-repeat bg-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          <span className="text-black">Check ability</span> to connect our services in your area
        </h2>
        
        <div className="max-w-md mx-auto">
          <form className="flex flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Enter your address"
              className="flex-grow px-4 py-3 rounded-l-md sm:rounded-r-none rounded-r-md sm:mb-0 mb-3"
            />
            <button 
              type="submit" 
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 font-semibold rounded-r-md sm:rounded-l-none rounded-l-md transition duration-300"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}