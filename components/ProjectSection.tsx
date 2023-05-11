/** @format */

"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
	BsGithub,
	BsArrowRightSquare,
} from "react-icons/bs";

const projects = [
	{
		name: "A single page web app",
		description:
			"Me and my team developed a single-page web application as a part of a React course at the vocational school, using a Figma prototype as a basis. This project enabled me to acquire key competencies in React and Next.js, while paying attention to search engine optimization,responsiveness and acccebility achieving the learning outcomes of the course.",
		image: "/photo.jpg",
		github:
			"https://github.com/SammaniAri/react-app-g8",
		link: "https://monakinft.vercel.app/",
	},
	{
		name: "A Simple Game inspired by Game of Thrones",
		description:
			"I developed an interactive game using a public API that allows users to guess Game of Thrones characters within a given time limit. Utilized Firebase to store the scores after completion and displayed a leaderboard at the end of the game. Demonstrated  skills in API integration, game design, and data management through this project.",
		image: "/photo.jpg",
		github:
			"https://github.com/SammaniAri/react-app-g8",
		link: "https://game-of-thrones-character-guessing.netlify.app/",
	},
	{
		name: " To-do App",
		description:
			"Lorem ipsum dolor sit amet. Sed voluptates quia sed officia sint nam exercitationem velit est tempora reiciendis sed corrupti sunt ut eveniet repudiandae ut delectus internos. Aut quos architecto et vero facere et totam provident sit illum velit in perspiciatis autem et corrupti placeat et impedit illo?",
		image: "/photo.jpg",
		github:
			"https://github.com/orgs/project-on-data-interaction/repositories",
		link: " ",
	},
];

const ProjectSection = () => {
	return (
		<section id="projects">
			<h1 className="text-center font-semibold text-4xl">
				{" "}
				Projects
			</h1>
			<div className="flex flex-col space-y-28">
				{projects.map(
					(project, idx) => {
						return (
							<div key={idx}>
								<div className="flex flex-col md:flex-row md:space-x-12">
									<div className="md:w-1/2">
										<Image
											src={
												project.image
											}
											alt=""
											width={1000}
											height={1000}
											className="rounded-xl shadow-xl hover:opacity-70"
										/>
									</div>
									<div className="md:w-1/2">
										<h1 className="text-center text-2xl font-semibold mb-6 md:text-left">
											{project.name}
										</h1>
										<p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
											{
												project.description
											}
										</p>
										<div className="flex flex-row align-bottom space-x-4">
											<Link
												href={
													project.github
												}
												target="_blank">
												<BsGithub
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
											<Link
												href={
													project.link
												}
												target="_blank">
												<BsArrowRightSquare
													size={30}
													className="hover:-translate-y-1 transition-transform cursor-pointer"
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					}
				)}
			</div>
		</section>
	);
};

export default ProjectSection;
