import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";

export default function NavbarComponent() {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setHasScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", checkScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <div
      className={`z-50 h-20 fixed w-full top-0 ${
        hasScrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div
        className={`text-[--navbar-text] flex justify-between items-center w-full h-full px-6 mr-4 2xl:px-64 transition duration-300 ease-in ${
          hasScrolled ? "bg-[--navbar-primary]" : "bg-transparent"
        }`}
      >
        <Link href="/">
          <span className="text-l font-semibold">Longstay Achterhoek</span>
        </Link>
        <ul className="hidden lg:flex">
          <Link href="/#about">
            <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
              Over Ons
            </li>
          </Link>
          <Link href="/#suites">
            <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
              Suites
            </li>
          </Link>
          <Link href="/#faciliteiten">
            <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
              Faciliteiten
            </li>
          </Link>
          <Link href="/#zakelijk">
            <li className="ml-10 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out">
              Zakelijk
            </li>
          </Link>
        </ul>
        <div onClick={handleToggleNav} className="lg:hidden p-3 cursor-pointer">
          <AiOutlineMenu size={20} />
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={
          toggleNav
            ? "lg:hidden fixed right-0 top-0 w-full h-screen bg-black/40 ease-in-out duration-150"
            : ""
        }
      >
        <div
          className={
            toggleNav
              ? "fixed right-0 top-0 w-[70%] sm:w-[65%] h-screen bg-[--color-bg] p-4 ease-in-out duration-500"
              : "fixed right-[-100%] top-0 h-screen p-10 ease-in duration-300"
          }
        >
          <div className="flex w-full items-center pb-4 justify-between border-b border-gray-300 ">
            <Link href="/">
              <span className="text-l tracking-widest font-semibold">
                Longstay LOGO
              </span>
            </Link>
            <div className="p-3 mr-4 cursor-pointer">
              <AiOutlineClose size={20} onClick={handleToggleNav} />
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/#about">
                <li
                  onClick={() => setToggleNav(false)}
                  className="py-4 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out"
                >
                  Over Ons
                </li>
              </Link>
              <Link href="/#suites">
                <li
                  onClick={() => setToggleNav(false)}
                  className="py-4 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out"
                >
                  Suites
                </li>
              </Link>
              <Link href="/#faciliteiten">
                <li
                  onClick={() => setToggleNav(false)}
                  className="py-4 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out"
                >
                  Faciliteiten
                </li>
              </Link>
              <Link href="/#zakelijk">
                <li
                  onClick={() => setToggleNav(false)}
                  className="py-4 text-l tracking-widest font-semibold uppercase hover:text-[--navbar-text-hover] duration-300 ease-in-out"
                >
                  Zakelijk
                </li>
              </Link>
            </ul>
            <div className="pt-48">
              <p className="uppercase tracking-widest font-semibold text-l">
                Volg ons op
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link href="https://instagram.com/longstayachterhoek">
                  <div className="rounded-full shadow-md shadow-gray-400 p-3">
                    <FaInstagram />
                  </div>
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=61557442225259">
                  <div className="rounded-full shadow-md shadow-gray-400 p-3">
                    <FaFacebookF />
                  </div>
                </Link>
                <Link href="https://www.booking.com">
                  <div className="rounded-full shadow-md shadow-gray-400 p-3">
                    <TbBrandBooking />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
