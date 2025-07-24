import { InstagramLogoIcon } from "@radix-ui/react-icons";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-gray-200 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-start">
            <Image
              src="/logo/logo.png"
              alt="Creator's Development Ltd."
              width={120}
              height={120}
              className="mb-4"
              priority
            />
            <p className="mb-4 text-white/40 text-sm">
              There are many variations of passages of Lorem Ipsum available
              majority have suffered alteration some .
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2 text-white">
              Quick Links
            </h3>
            <ul className="space-y-1 mt-4 text-white/50 text-sm">
              <li>
                <Link href="/" className="text-[#709D06] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2 text-white">
              Contacts
            </h3>
            <div className="mt-4 space-y-2">
              <div className="text-white/50 text-sm">
                <span>Address : </span>
                House#57, Sabdar Hossain Road, Priyanka Runway Socity, Uttara,
                Dhaka
              </div>
              <div className="text-white/50 text-sm">
                <p>Phone : (+880) 1816-335714</p>
              </div>
              <div className="text-white/50 text-sm">
                <span>Email : </span>
                <a href="mailto:info@mkz.com" className="hover:underline">
                  info@mkz.com
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="font-bold text-xl mb-2 flex items-center gap-2 text-white">
              Working Hours
            </h3>
            <div className="mt-4 space-y-2 text-white/50 text-sm">
              <div>Monday - Sunday 09:00 - 6:00</div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Copyright & Socials */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between py-4 gap-4">
        <div className="text-white/30 text-sm text-center md:text-left">
          © 2025 All rights reserved by{" "}
          <a href="https://anindoahmed.vercel.app/" target="_blank">
            solo developer
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-white/30">
          <a href="#" aria-label="Instagram" className="hover:text-[#709D06]">
            <Instagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#709D06]">
            <Linkedin />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-[#709D06]">
            <Facebook />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-[#709D06]">
            <TwitterIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Social icon SVGs
function InstagramIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1-4.5 0zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.325-1.325-1.325z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.664 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z" />
    </svg>
  );
}
