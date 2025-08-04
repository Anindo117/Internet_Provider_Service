import { useAuthStore, useCartStore } from "@/lib/store";
import {
  LogOut,
  Menu,
  Search,
  ShoppingBasket,
  UserRoundPlus,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LoginModal from "../auth/LoginModal";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

interface NavItemProps {
  href: string;
  text: string;
  active?: boolean;
  dropdown?: Array<{ href: string; text: string }>;
  className?: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About us",
    route: "/about",
  },
  {
    title: "Pricing",
    route: "/pricing",
  },
  {
    title: "Products",
    route: "/products",
  },
  // {
  //   title: "Blog",
  //   route: "/blog",
  // },
  {
    title: "Contact",
    route: "/contacts",
  },
];

function NavItem({ href, text, active, dropdown, className }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`menu-item ${active ? "current-menu-item" : ""} ${
        dropdown ? "menu-item-has-children" : ""
      } ${className || ""} px-4 py-2 lg:py-0`}
    >
      {dropdown ? (
        <>
          <a className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span>{text}</span>
          </a>
          {dropdown && (
            <ul
              className={`sub-menu ${
                isOpen ? "block" : "hidden"
              } lg:absolute lg:bg-white lg:shadow-md lg:rounded-md lg:mt-2 lg:min-w-[200px]`}
            >
              {dropdown.map((item, idx) => (
                <li key={idx} className="px-4 py-2 hover:bg-gray-100">
                  <Link href={item.href}>
                    <span>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <Link href={href}>
          <span>{text}</span>
        </Link>
      )}
    </li>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isLoggedIn, logout } = useAuthStore();
  const items = useCartStore((state) => state.items);

  const cartQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = () => {
    logout();
    setIsLoginModalOpen(false);
  };

  const pathName = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="header-wrapper header-h1 header-parallax wrapper-navbar-layout-transparent bg-gray-950 text-white">
        <div id="nav-wrapper" className="navbar-layout-transparent">
          <nav className="navbar">
            <div className="container mx-auto px-4 lg:py-5 flex items-center justify-between">
              {/* Logo */}
              <div className="navbar-logo">
                <Link href="/" className="logo">
                  <Image
                    src="/logo/logo.png"
                    alt="IPS Company"
                    width={130}
                    height={150}
                  />
                </Link>
              </div>

              {/* Mobile Side Drawer Navigation */}
              <div>
                {/* Overlay */}
                {isMenuOpen && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
                    onClick={toggleMenu}
                  />
                )}
                {/* Side Drawer */}
                <div
                  className={`
                    fixed top-0 left-0 h-full w-64 bg-gray-950 text-white z-50 transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
                    lg:static lg:translate-x-0 lg:w-auto lg:bg-transparent lg:relative lg:h-auto
                  `}
                  id="navbar"
                >
                  <div className="lg:hidden flex justify-between items-center w-full px-4 py-4 border-b border-gray-800">
                    <span className="font-bold text-lg">
                      <Link href="/" className="logo">
                      <Image
                        src="/logo/logo.png"
                        alt="IPS Company"
                        width={100}
                        height={100}
                      />
                    </Link>
                    </span>
                    <button className="navbar-toggle" onClick={toggleMenu}>
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="px-4 py-4 lg:p-0">
                    <ul className="nav navbar-nav text-sm font-semibold flex flex-col lg:flex-row">
                      {menuItems.map((item) => (
                        <NavItem
                          key={item.title}
                          href={item.route || "#"}
                          text={item.title}
                          dropdown={item.children?.map((child) => ({
                            href: child.route || "#",
                            text: child.title,
                          }))}
                          className={
                            pathName === item.route
                              ? "text-[#709D06]"
                              : "hover:text-[#709D06]"
                          }
                        />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="ltx-navbar-icons hidden lg:flex gap-3">
                <ul className="flex items-center gap-3">
                  <li className="ltx-fa-icon ltx-nav-profile mx-1">
                    <Link href="/my-account">
                      <UserRoundPlus className="w-5 h-5" />
                    </Link>
                  </li>
                  {/* <li className="ltx-fa-icon ltx-nav-search mx-1">
                    <div className="top-search">
                      <a href="#" className="top-search-ico">
                        <Search className="w-5 h-5" />
                      </a>
                      <input
                        placeholder="Search"
                        value=""
                        type="text"
                        className="hidden"
                      />
                    </div>
                  </li> */}
                </ul>
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-red-600 hover:text-red-700 border rounded-md border-red-500 hover:scale-95 transition-colors flex gap-3"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => setIsLoginModalOpen(true)}
                    className="px-4 py-2 hover:text-[#709D06] text-sm text-white border rounded-md border-white hover:scale-95 transition-colors"
                  >
                    Sign In
                  </button>
                )}
              </div>

              <div className="navbar-controls lg:hidden">
                <button
                  type="button"
                  className="navbar-toggle"
                  onClick={toggleMenu}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
}
