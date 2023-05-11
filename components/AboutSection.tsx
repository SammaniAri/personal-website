/** @format */

"use client";
import React from "react";

const skills = [
	{ skill: "Agile Methodology" },
	{ skill: "Team Work" },
	{ skill: "UX Fundamentals" },
	{ skill: "Pair Programming" },
	{ skill: "Communication Skills" },
	{ skill: " VS Code" },
	{ skill: " GitHub" },
];
const AboutSection = () => {
	return (
		<section id="About">
			<div className="my-12 pb-12 md:pt-16">
				<div>
					<h1 className="text-lime-950 text-center font-semibold text-4xl">
						{" "}
						About Me
					</h1>
				</div>
				<div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
					<div className="md:w-1/2 mt-12 text-lime-950 ">
						<h1 className="text-center text-2xl font-semibold mb-6 md:text-left text-lime-950">
							{" "}
							Get to know me
						</h1>

						<p className="text-xl leading-7 mb-4  text-lime-950 dark:text-neutral-400">
							I&#39;m a{" "}
							<span className="font-bold text-lime-800">
								resilient, goal oriented{" "}
							</span>
							person who believes in in{" "}
							<span className="font-bold text-lime-800">
								life-long education.
								&nbsp;
							</span>
							With a passion for
							technology and a desire to
							continuously grow, I&#39;m
							currently studying
							Frontend Development at
							Hyper Island in Stockholm,
							taking one step closer to
							achieving my dream.
						</p>
						<br></br>
						<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
							I love to see the designs
							come to life on the web.
							Probably that is why{" "}
							<span className="font-bold text-lime-800">
								I love Frontend.&nbsp;
							</span>
							I love to be where{" "}
							<span className="font-bold text-lime-800">
								creativity and
								technology meet.
							</span>{" "}
							I&#39;m always up for new
							experiences and I truly
							believe that growth should
							never stop, and that&#39;s
							what keeps me going. I am
							excited to see where{" "}
							<span className="font-bold text-lime-800">
								my passion for
								technology &nbsp;
							</span>
							takes me in the future.
						</p>
					</div>
					<div className="md:w-1/2">
						<h1 className="text-center text-2xl font-semibold mb-6 md:text-left mt-12 ">
							My skills
						</h1>
						<div className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
							{skills.map(
								(item, idx) => {
									return (
										<p
											key={idx}
											className="bg-lime-100 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
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
