"use client"
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
	const [isClick, setIsClick] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const navOutsideRef = useRef();

	const toggleNavbar = () => {
		setIsClick(!isClick);
	};

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (navOutsideRef.current && !navOutsideRef.current.contains(event.target)) {
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
			<nav ref={navOutsideRef} className="top-0 inset-x-0 py-5 fixed z-50 shadow-shadowNav md:shadow-none bg-white transition-all duration-300">
				<div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md sm:px-0 px-5 mx-auto">
					<div className="h-full w-full flex justify-between items-center">
						<Link href="/">
							<Image
								src="/assets/images/logo.svg"
								alt="Logo CCI"
								width={90}
								height={90}
								className="w-14 h-8 md:w-20 md:h-12 cursor-pointer"
							/>
						</Link>
						<div className="md:flex items-center space-x-16 hidden">
							<ul className="md:flex items-center space-x-16 hidden">
								{/* Dropdown Menu */}
								<div className="relative">
									<button
										className="flex flex-row items-center p-4 text-[#6B6B6B] hover:text-bluePallete-700"
										onClick={toggleDropdown}
									>
										About Us
										<svg
											className={`ml-2 transition duration-300 ease-in-out hover:fill-bluePallete-700 ${isDropdownOpen ? "transform rotate-180 ease-in-out duration-400" : ""}`}
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
										<div className="absolute w-40 top-full left-0 shadow-md rounded-md bg-white">
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
								<Link href="/news">
									<li className="p-4 text-[#6B6B6B] hover:text-bluePallete-700">
										News
									</li>
								</Link>
								<Link href="/project">
									<li className="p-4 text-[#6B6B6B] hover:text-bluePallete-700">
										Project
									</li>
								</Link>
							</ul>
						</div>
						{/* Toggle Hamburger */}
						<div
							onClick={toggleNavbar}
							className="md:hidden cursor-pointer pl-24"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={30}
								height={30}
								viewBox="0 0 48 48"
							>
								<path
									fill="none"
									stroke="#205290"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={4}
									d="M7.95 11.95h32m-32 12h32m-32 12h32"
								></path>
							</svg>
						</div>
					</div>
					{/* Mobile menu */}
					<div
						className={
							isClick
								? "fixed w-[65%] md:hidden h-screen flex flex-col flex-start left-0 top-0 p-7 sm:p-10 ease-in duration-400 transition-all bg-bluePallete-700"
								: "fixed left-[-100%] top-0 p-10 ease-out duration-400 transition-all"
						}
					>
						<div className="w-full flex items-center justify-start">
							<div onClick={toggleNavbar} className="cursor-pointer">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={70}
									height={70}
									viewBox="0 0 24 24"
								>
									<g fill="none" stroke="white" strokeWidth={1.5}>
										<circle cx={12} cy={12} r={10}></circle>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M16 12H8m0 0l3-3m-3 3l3 3"
										></path>
									</g>
								</svg>
							</div>
						</div>
						<div className="h-full flex flex-col py-4">
							<ul className="pt-32">
								{/* Dropdown Menu in Mobile */}
								<div className="relative">
									<button
										className="flex flex-row items-center text-[28px] sm:text-[32px] text-white"
										onClick={toggleDropdown}
									>
										About Us{" "}
										<svg
											className={`ml-2 transition duration-300 ease-in-out hover:fill-bluePallete-700 ${isDropdownOpen ? "transform rotate-180 ease-in-out duration-400" : ""
												}`}
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 40 40"
										>
											<path
												fill="white"
												d="M4.659 11.833h30.682L20 32.167z"
											></path>
										</svg>
									</button>
									{isDropdownOpen && (
										<div className="block w-40 top-full left-0 rounded-md">
											<ul>
												<li className="pt-2 px-4">
													<Link
														href="/about"
														className="block px-4 py-2 text-[24px] rounded text-white"
														onClick={toggleNavbar}
													>
														About
													</Link>
												</li>
												<li className="pt-2 px-4">
													<Link
														href="/divisi"
														className="block px-4 py-2 text-[24px] rounded text-white"
														onClick={toggleNavbar}
													>
														Divisi
													</Link>
												</li>
												<li className="pt-2 pb-2 px-4">
													<Link
														href="/contact"
														className="block px-4 py-2 text-[24px] rounded text-white"
														onClick={toggleNavbar}
													>
														Contact
													</Link>
												</li>
											</ul>
										</div>
									)}
								</div>
								<Link href="/news">
									<li
										onClick={() => setIsClick(false)}
										className="py-4 text-[28px] sm:text-[32px] cursor-pointer text-white"
									>
										News
									</li>
								</Link>
								<Link href="/project">
									<li
										onClick={() => setIsClick(false)}
										className="text-[28px] sm:text-[32px] cursor-pointer text-white"
									>
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