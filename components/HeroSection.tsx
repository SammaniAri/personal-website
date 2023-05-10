/** @format */
"use client";
import React from "react";
import { Link } from "react-scroll/modules";

const HeroSection = () => {
	return (
		<section id="Home">
			<div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
				<div className=" ">
					<img
						className="rounded-full shadow-2xl"
						src="/bike.jpg"
						alt=""
						width={400}
						height={400}
					/>
				</div>
				<div>
					<h1 className="text-4xl mt-6 md:mt-0 md:text-7xl">
						Hej!
					</h1>
					<p className="text-lg mt-4 mb-6 md:text-2xl">
						I'm Sammani, a keen
						future-Frontend Developer. I
						like to travel and try out
						new food recipies when i'm
						not coding.{" "}
					</p>
					<Link
						to="projects"
						className="text-neutral-100 font-semibold px-6 py-3 bg-lime-600 rounded shadow hover:bg-lime-700"
						activeClass="active"
						spy={true}
						smooth={true}
						offset={-100}
						duration={500}>
						{" "}
						Projects
					</Link>
				</div>
			</div>
		</section>
	);
};
export default HeroSection;
