/** @format */

"use client"; // this is a client component
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
//import { usePathname } from "next/navigation"
//import { useTheme } from "next-themes"
//import { RiMoonFill, RiSunLine } from "react-icons/ri"
import {
	IoMdMenu,
	IoMdClose,
} from "react-icons/io";
import { Interface } from "readline/promises";

//Assign the types of navbar items
interface NavItem {
	label: string;
	page: string;
}

const NAV_ITEMS: Array<NavItem> = [
	{
		label: "Home",
		page: "Home",
	},
	{
		label: "About",
		page: "About",
	},
	{
		label: "Projects",
		page: "Projects",
	},
];

const Navbar = () => {
	//controle Whether the mobile view is open or not
	//const {systemTheme, theme, setTheme}=useTheme()
	//const currentTheme = theme === "system" ? systemTheme : theme
	const [navbar, setNavbar] =
		useState(false);
	return (
		<header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600 text-lime-950">
			<div className="justify-between md:items-center md:flex">
				<div className="flex items-center justify-between py-3">
					<div className="md:py-5 md:block">
						<h2 className="text-2xl font-bold">
							{" "}
							Sammani Ariyarathne
						</h2>
					</div>
					<div className="md:hidden">
						<button
							onClick={() =>
								setNavbar(!navbar)
							}>
							{navbar ? (
								<IoMdClose size={30} />
							) : (
								<IoMdMenu size={30} />
							)}
						</button>
					</div>
				</div>
				<div
					className={`"flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
						navbar ? "block" : "hidden"
					}`}>
					<div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
						{NAV_ITEMS.map(
							(item, idx) => {
								return (
									<Link
										key={idx}
										to={item.page}
										className={
											"block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100"
										}
										activeClass="active"
										spy={true}
										smooth={true}
										offset={-100}
										duration={500}
										onClick={() =>
											setNavbar(!navbar)
										}>
										{item.label}
									</Link>
								);
							}
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
