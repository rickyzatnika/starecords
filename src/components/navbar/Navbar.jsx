"use client";
import "./navbar.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { ImBlogger } from "react-icons/im";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdDashboardCustomize, MdOutlineDashboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/legacy/image";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: "1",
    title: "Home",
    src: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: "2",
    title: "About",
    src: "/about",
    icon: <BiCommentDetail />,
  },
  {
    id: "3",
    title: "Portfolio",
    src: "/portfolio",
    icon: <MdOutlineDashboard />,
  },
  {
    id: "4",
    title: "Merch",
    src: "/merch",
    icon: <MdOutlineDashboard />,
  },
  {
    id: "5",
    title: "News",
    src: "/news",
    icon: <ImBlogger />,
  },
  {
    id: "6",
    title: "Contact",
    src: "/contact",
    icon: <BsPersonWorkspace />,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const ref = useRef(null);
  const pathname = usePathname();

  const handleBurger = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open, ref]);

  return (
    <nav className="w-full bg-[#040608]  overflow-hidden fixed top-0 left-0 right-0 z-[999] flex h-[90px] items-center px-4 md:px-24 justify-between">
      <Link href="/" passHref prefetch={true} as="/">
        <Image
          src="/sre_logo.png"
          alt="SRE-Logo"
          width={130}
          height={130}
          objectFit="contain"
          priority={true}
          className="relative z-50"
        />
      </Link>

      <ul className="hidden navLinks md:flex  items-center">
        <li className="flex items-center gap-6">
          {links.map((link, i) => (
            <Link
              key={i}
              as={link.src}
              passHref
              href={link.src}
              className={`relative text-[0.725rem] uppercase ${
                pathname === link.src
                  ? "text-zinc-200 active  "
                  : "text-zinc-400 hover:text-zinc-300"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <DarkModeToggle />
      </div>
      {/* Mobile Navigation */}
      <div
        className={` h-full w-full bg-black/80  opacity-100 fixed left-0 top-0 block md:hidden transition-all duration-300 ease-linear ${
          open ? "-translate-x-0 opacity-0" : "-translate-x-[200%] opacity-100"
        }`}
      >
        <ul
          ref={ref}
          className="bg-[#040608] px-4 relative w-64 h-full items-center"
        >
          <li className="space-y-8 pt-32 text-zinc-200/90 ">
            {links.map((link) => (
              <Link
                onClick={() => setOpen(false)}
                key={link.id}
                passHref
                href={link.src}
                as={link.src}
                className="flex items-center gap-2"
              >
                <span>{link.icon}</span>
                {link.title}
              </Link>
            ))}
          </li>
        </ul>
      </div>

      <div
        className="rounded-md z-[9999] cursor-pointer top-0 flex md:hidden relative  gap-1.5 flex-col justify-between items-end"
        onClick={handleBurger}
      >
        <span
          className={`h-0.5 w-6 bg-blend-color origin-center rounded-lg  transform transition duration-300 ease-out ${
            open ? "rotate-45 translate-y-2 bg-white " : "bg-white "
          }`}
        ></span>
        <span
          className={`h-0.5 w-4 bg-blend-color  bg-red-600 rounded-lg transform transition duration-500 ease-out ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-blend-color origin-center rounded-lg  transform transition duration-300  ease-out ${
            open ? "-rotate-45 -translate-y-2  bg-white " : "bg-white "
          }`}
        ></span>
      </div>
    </nav>
  );
};

export default Navbar;
