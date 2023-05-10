/** @format */
"use client";
import React from "react";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
	return (
		<section id="Home">
			<div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-8 md:text-left md:py-52">
				<div className="md:w-1/2 md:mt-2">
					<img
						className="rounded-full shadow-2xl"
						src="/bike.jpg"
						alt=""
						width={400}
						height={400}
					/>
				</div>
				<div className="md:w-3/5 md:mt-2 text-lime-950">
					<h1 className="text-4xl mt-6 md:mt-0 md:text-7xl">
						Hej!
					</h1>
					<p className="text-lg mt-4 mb-6 md:text-2xl">
						I&aposm Sammani,
						<span className="font-semibold text-lime-800">
							a keen future-Frontend
							Developer.{" "}
						</span>{" "}
						I like to travel and try out
						new food recipies when8
						I&aposm not coding.{" "}
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
			<div className="flex flex-row justify-center animate-bounce">
				<Link
					to="about"
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
