/** @format */
"use client";
import React from "react";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import AnimatedFont from "./AnimatedFont";
import { motion } from "framer-motion";

const technology = [
	{ technology: "Vanilla JavaScript" },
	{ technology: "React" },
	{ technology: "Next,Js" },
	{ technology: "TypeScript" },
	{
		technology: "Sass",
	},
	{ technology: "CSS" },
	{ technology: "Tailwind CSS" },
	{ technology: "HTML" },
	{ technology: "Firebase" },
	{ technology: "Figma" },
	{ technology: "Bootstrap" },
	{ technology: "Typescript" },
	{ technology: " Postgres" },
];
const HeroSection = () => {
	return (
		<section id="Home">
			<div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-8 md:text-left md:py-52">
				<div className="md:w-1/2 md:mt-2">
					<img
						className="rounded-xl shadow-2xl"
						src="/bike.jpg"
						alt=""
						width={400}
						height={400}
					/>
				</div>
				<div className="md:w-3/5 md:mt-2 text-lime-950">
					<div className="text-4xl mt-6 md:mt-0 md:text-7xl my-5">
						<AnimatedFont
							text={"Hej!"}
						/>
					</div>

					<p className="text-lg mt-4 mb-6 md:text-2xl my-5">
						I&#39;m Sammani,{" "}
						<span></span>
						<span className="font-semibold text-lime-800">
							a keen future-Frontend
							Developer.{" "}
						</span>{" "}
						I like to travel and try out
						new food recipes when
						I&#39;m not coding.{" "}
					</p>
					<Link
						to="Projects"
						className="text-neutral-100 font-semibold px-6 py-3 bg-lime-600 rounded shadow hover:bg-lime-700"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}>
						{" "}
						Projects
					</Link>
					<div>
						<h1 className="text-center text-2xl font-semibold mb-6 md:text-left mt-12 ml-1">
							{" "}
							My Skills
						</h1>
						<div className="flex flex-wrap md:flex-row text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
							{technology.map(
								(item, idx) => {
									return (
										<p
											key={idx}
											className="bg-lime-100 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
											{item.technology}
										</p>
									);
								}
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-center animate-bounce">
				<Link
					to="About"
					activeClass="active"
					spy={true}
					smooth={true}
					offset={-100}
					duration={500}>
					<HiArrowDown size={40} />
				</Link>
			</div>
		</section>
	);
};
export default HeroSection;
