"use client" // this is a client component
import React from "react"
import { useState } from "react"
import { Link } from "react-scroll/modules"
//import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"
import { Interface } from "readline/promises"

//Assign the types of navbar items
interface NavItem {
	label:string
	page:string
}

const NAV_ITEMS: Array<NavItem>=[
	{
	label:"Home",
	page: "Home"
	},
	{
	label:"About",
	page: "About"
	},
	{
	label:"Projects",
	page: "Projects"
	},
]


const Navbar = () => {
	//controle Whether the mobile view is open or not
	const {systemTheme, theme, setTheme}=useTheme()
	const currentTheme = theme === "system" ? systemTheme : theme
	const [navbar, setNavbar] = useState(false)
	return (
		 <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-stone-900 dark:border-b dark:border-stone-600 ">
			<div className="justify-between md:items-center md:flex">
  
			<div  className="md:py-5 md:block"><h2 className="text-2xl font-bold"> Sammani Ariyarathne</h2></div>
			<div className="md:spac-x-6"> {NAV_ITEMS.map((item,idx)=> {
				return <a key={idx}>{item.label} </a>
			})}

			{currentTheme === "dark" ? ( <button onClick={()=>setTheme("light")} className="bg-slate-100 p-2 rounded-xl"> <RiSunLine size={25} color= "black"/> </button>): (<button onClick={()=>setTheme("dark")} className="bg-slate-100 p-2 rounded-xl" > <RiMoonFill size={25}  /> </button>)}
			</div>	
		 
			</div>
		 </header>
	)
}

export default Navbar