"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navOutsideRef = useRef();
	
  const handleNav = () => {
    setIsClick(!isClick);
  };

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navOutsideRef.current &&
        !navOutsideRef.current.contains(event.target)
      ) {
        setIsClick(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <nav
        ref={navOutsideRef}
        className="top-0 inset-x-0 py-5 fixed shadow-shadowNav md:shadow-none bg-white"
      >
        <div className="lg:max-w-7xl md:max-w-3xl sm:max-w-xl mx-auto">
          <div className="h-full w-full flex justify-between items-center px-4 sm:px-0 2xl:px-16">
            <Link href="/">
              <Image
                src="/svgs/logo.svg"
                alt="Logo CCI"
                width={90}
                height={90}
                className="w-14 h-8 md:w-20 md:h-12 cursor-pointer"
              />
            </Link>
            <div className="md:flex items-center space-x-16 hidden">
              <ul className="md:flex items-center space-x-16 hidden">
                {/* Dropdown menu */}
                <div className="relative">
                  <button
                    className="flex flex-row items-center p-4 text-[#6B6B6B] hover:text-bluePallete-700"
                    onClick={toggleDropdown}
                  >
                    About Us
                    <svg
                      className={`ml-2 transition duration-300 ease-in-out hover:fill-bluePallete-700 ${
                        isDropdownOpen
                          ? "transform rotate-180 ease-in-out duration-400 "
                          : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 40 40"
                    >
                      <path
                        fill="#6b6b6b"
                        d="M4.659 11.833h30.682L20 32.167z"
                      ></path>
                    </svg>
                  </button>
                  {isDropdownOpen && (
                    <div className="w-40 top-full left-0 absolute shadow-md rounded-md bg-white">
                      <ul className="">
                        <li className="pt-2 px-4">
                          <Link
                            href="/about"
                            className="block px-4 py-2 rounded text-[#6B6B6B] hover:bg-bluePallete-200"
                            onClick={toggleNavbar}
                          >
                            About
                          </Link>
                        </li>
                        <li className="pt-2 px-4">
                          <Link
                            href="/divisi"
                            className="block px-4 py-2 rounded text-[#6B6B6B] hover:bg-bluePallete-200"
                            onClick={toggleNavbar}
                          >
                            Divisi
                          </Link>
                        </li>
                        <li className="pt-2 pb-2 px-4">
                          <Link
                            href="/contact"
                            className="block px-4 py-2 rounded text-[#6B6B6B] hover:bg-bluePallete-200"
                            onClick={toggleNavbar}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link href="">
                  <li className="p-4 text-[#6B6B6B] hover:text-bluePallete-700">
                    News
                  </li>
                </Link>
                <Link href="">
                  <li className="p-4 text-[#6B6B6B] hover:text-bluePallete-700">
                    Project
                  </li>
                </Link>
              </ul>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
