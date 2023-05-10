/** @format */

"use client";
import React from "react";

const skills = [
	{ skill: "Agile Methodology" },
	{ skill: "Team Work" },
	{ skill: "UX Fundamentals" },
	{ skill: "Pair Programming" },
];
const AboutSection = () => {
	return (
		<section id="about">
			<div className="my-12 pb-12 md:pt-16">
				<div>
					<h1 className="text-center font-semibold text-4xl">
						{" "}
						About Me
					</h1>
				</div>
				<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
					<div className="md:w-1/2">
						<h1 className="text-center text-2xl font-semibold mb-6 md:text-left">
							{" "}
							Get to know me
						</h1>
						<p>
							{" "}
							I have a wide range of
							hobbies and passions that
							keep me busy. From
							traveling, going shopping
							to trying out new food
							recipies, I am always
							seeking new experiences
							and love to keep myself
							engaged in learning new
							things.
						</p>
					</div>
					<div className="md:w-1/2">
						<h1 className="text-center text-2xl font-semibold mb-6 md:text-left">
							My skills
						</h1>
						<div>
							{skills.map(
								(item, idx) => {
									return (
										<p key={idx}>
											{item.skill}
										</p>
									);
								}
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
