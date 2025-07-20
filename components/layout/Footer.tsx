import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="ltx-footer-wrapper bg-black text-white">
      <div className="subscribe-wrapper py-10 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h6 className="text-yellow-500 text-sm mb-1">
                Want to know about our offers first?
              </h6>
              <h4 className="text-xl font-bold">Subscribe our newsletter</h4>
            </div>

            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email..."
                  required
                  className="px-4 py-3 rounded-l-md sm:rounded-r-none rounded-r-md sm:mb-0 mb-3 text-black"
                />
                <button
                  type="submit"
                  className="bg-[#709D06] hover:bg-yellow-500 hover:text-black text-white px-6 py-3 font-semibold rounded-r-md sm:rounded-l-none rounded-l-md transition duration-300"
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-widgets py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto">
            <Link href="/">
              <Image
                src="/logo/logo.png"
                alt="mkz online"
                width={200}
                height={200}
                className="mx-auto mb-4"
                priority
              />
            </Link>
            <p className="text-gray-400 mb-8">
              Integer maximus accumsan nunc, sit amet tempor lectus facilisis
              eu. Cras vel elit felis. Vestibulum convallis ipsum id aliquam
              varius.
            </p>

            <div className="flex justify-center space-x-4">
              <SocialIcon icon={<Twitter className="w-5 h-5" />} />
              <SocialIcon icon={<Facebook className="w-5 h-5" />} />
              <SocialIcon icon={<Instagram className="w-5 h-5" />} />
              <SocialIcon icon={<Youtube className="w-5 h-5" />} />
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-block py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>
            © All Rights Reserved - {new Date().getFullYear()} -
            <Link href="/" className="ml-1 hover:text-[#709D06]">
              MKZ Online
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#709D06] transition duration-300"
    >
      {icon}
    </a>
  );
}
