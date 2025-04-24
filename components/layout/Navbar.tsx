import { Menu, Search, ShoppingBasket, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
    children: [
      { title: "Shop", route: "/shop" },
      { title: "My account", route: "/my-account" },
    ],
  },
  {
    title: "Blog",
    route: "/blog",
  },
  {
    title: "Contacts",
    route: "/contacts",
  },
  {
    title: "Get Started",
    route: "/get-started",
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

  const pathName = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="header-wrapper header-h1 header-parallax wrapper-navbar-layout-transparent bg-gray-950 text-white">
      <div id="nav-wrapper" className="navbar-layout-transparent">
        <nav className="navbar">
          <div className="container mx-auto px-4 lg:py-5 flex items-center justify-between">
            <div className="navbar-logo">
              <Link href="/" className="logo">
                <Image
                  src="/images/logo.png"
                  alt="IPS Company"
                  width={100}
                  height={50}
                  className="h-14 w-auto"
                />
              </Link>
            </div>

            <div
              className={`navbar-collapse ${
                isMenuOpen ? "block" : "hidden"
              }  lg:flex lg:items-center lg:justify-between`}
              id="navbar"
            >
              <div className="lg:hidden toggle-wrap flex justify-between items-center w-full pb-4">
                <Link href="/" className="logo">
                  <Image
                    src="/images/logo_1x.png"
                    alt="ISP Company"
                    width={120}
                    height={60}
                    className="h-14 w-auto"
                    priority
                  />
                </Link>
                <button className="navbar-toggle" onClick={toggleMenu}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div>
                <ul className="nav navbar-nav font-semibold flex flex-col lg:flex-row">
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
                          ? "text-red-600"
                          : "hover:text-red-600"
                      }
                    />
                  ))}
                </ul>
              </div>
            </div>

            <div className="ltx-navbar-icons hidden lg:block">
              <ul className="flex items-center gap-3">
                <li className="ltx-fa-icon ltx-nav-profile mx-1">
                  <Link href="/my-account">
                    <User className="w-5 h-5" />
                  </Link>
                </li>
                <li className="ltx-fa-icon ltx-nav-cart mx-1">
                  <Link
                    href="/cart"
                    className="ltx-cart flex justify-center items-center"
                    title="View your shopping cart"
                  >
                    <ShoppingBasket className="w-5 h-5" />
                    <span className="cart-contents header-cart-count count h-5 w-5 flex justify-center items-center rounded-full bg-red-500">
                      0
                    </span>
                  </Link>
                </li>
                <li className="ltx-fa-icon ltx-nav-search mx-1">
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
                </li>
              </ul>
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
  );
}
