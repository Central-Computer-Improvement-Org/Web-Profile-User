"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Nav() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navRef = useRef(null);
  const router = useRouter();
  const toggleMenu = () => setIsSideBarOpen(!isSideBarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSideBarOpen(false);
        setIsDropdownOpen(false);
      }
    };
    const handleClickOutside = (event) => {
      if (
        isDropdownOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      } else if (
        isSideBarOpen &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsSideBarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize),
        document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen, isSideBarOpen]);
  return (
    <nav className={`fixed w-full bg-white z-50`}>
      <div
        className={`relative flex justify-between px-24 h-[70px] md:h-[92px] border-b-[1px] border-blue-lightActive md:px-96`}
      >
        <Image
          src="assets/global/svgs/logo.svg"
          alt="Logo CCI"
          className="my-auto w-[64px] h-[64px] md:w-80 md:h-80"
          width={0}
          height={0}
        />
        <Links
          ref={navRef}
          isSideBarOpen={isSideBarOpen}
          isDropdownOpen={isDropdownOpen}
          toggleMenu={toggleMenu}
          toggleDropdown={toggleDropdown}
          router={router}
        />
        <button
          ref={navRef}
          className={`${isSideBarOpen ? "block" : "block"} md:hidden`}
          onClick={toggleMenu}
        >
          <Image
            src={"assets/nav/svgs/burgermenu.svg"}
            alt="menu"
            width={24}
            height={24}
          />
        </button>
      </div>
    </nav>
  );
}

function Links({
  isSideBarOpen,
  isDropdownOpen,
  toggleMenu,
  toggleDropdown,
  navRef,
  router,
}) {
  const sideBar = isSideBarOpen ? "block" : "hidden";
  const Button = ({ onClick, children }) => {
    return (
      <li className="md:hover:bg-blue-lightHover md:rounded-[10px] md:py-2 md:px-10 m-2">
        <button onClick={onClick}>{children}</button>
      </li>
    );
  };

  return (
    <div
      className={`${
        isSideBarOpen
          ? "absolute top-0 left-0 bg-blue-darkActive h-screen text-white w-[65%]"
          : "my-auto text-[#6B6B6B]"
      }`}
    >
      <div className="flex flex-col gap-[6rem] md:gap-0">
        <button type={`button`} onClick={toggleMenu}>
          <Image
            src={`assets/nav/svgs/arrow-back.svg`}
            className={`${sideBar} mt-24 ml-24`}
            alt="dd"
            width={56}
            height={56}
          />
        </button>
        <ul
          className={`${sideBar} text-h4 md:font-medium mx-auto my-auto space-y-32 md:text-medium md:space-y-0 md:flex md:space-x-10`}
        >
          <li>
            <button
              ref={navRef}
              className={`${
                isDropdownOpen
                  ? "md:text-blue-normal"
                  : `${
                      isSideBarOpen ? "text-white" : "text-[#6B6B6B]"
                    } md:hover:text-blue-darkHover md:hover:underline md:hover:underline-offset-2`
              } flex items-center`}
              onClick={toggleDropdown}
            >
              About Us
              <Image
                src={`${
                  isDropdownOpen
                    ? isSideBarOpen
                      ? "assets/nav/svgs/dropdown-white-active.svg"
                      : "assets/nav/svgs/dropdown-active.svg"
                    : isSideBarOpen
                    ? "assets/nav/svgs/dropdown-white.svg"
                    : "assets/nav/svgs/dropdown.svg"
                }`}
                alt="dropdown"
                width={24}
                height={24}
              />
            </button>
            {isDropdownOpen && (
              <ul className="block mt-2 text-[28px] md:text-medium md:absolute md:mt-2 md:bg-white md:shadow-md md:rounded-[10px]">
                <Button onClick={() => router.push("/about")}>About</Button>
                <Button onClick={() => router.push("/divisi")}>Divisi</Button>
                <Button onClick={() => router.push("/contact")}>Contact</Button>
              </ul>
            )}
          </li>
          <li>
            <button
              onClick={() => router.push("/news")}
              className="md:hover:text-blue-darkHover md:hover:underline md:hover:underline-offset-2"
            >
              News
            </button>
          </li>
          <li>
            <button
              onClick={() => router.push("/projects")}
              className="md:hover:text-blue-darkHover md:hover:underline md:hover:underline-offset-2"
            >
              Projects
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
