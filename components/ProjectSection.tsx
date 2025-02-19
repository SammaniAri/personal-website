/** @format */

"use client";
import React from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import SplitType from "split-type";
import { useRef, useEffect } from "react";
import { BsGithub, BsArrowRightSquare } from "react-icons/bs";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "An e-commerce web app",
    description:
      "I Developed a responsive e-commerce platform optimized for mobile devices,featuring dynamic UI for product listings, orders, and user profiles. Implemented state management and integrated secure authentication to enhance userexperience. Achieved cross-device compatibility and user interface responsiveness. Practised state management, responsive design, and Firebase's real-time capabilities for backend services.",
    image: "/pizza.jpg",
    github: "https://github.com/SammaniAri/PizzaRestaurant",
    gitAria: "View the e-commerce web app project on GitHub",
    link: "https://react-pizza-restaurant-vert.vercel.app/",
    websiteAria: "View the deployed e-commerce web app",
    technologies: " React, Firebase, Firestore, Tailwind CSS, Vercel",
  },
  {
    name: "Pokémon Explorer Web App",
    description:
      "This project is a React and TypeScript-based web application that allows users to explore Pokémon characters. Key functionalities include pagination, the Context API for seamless data flow across the app, dynamic routing with React Router, and a responsive design. This project highlights my skills in React, state management with Context API, asynchronous data fetching, and UI design using Material-UI.",
    image: "/poke.jpg",
    github: "https://github.com/SammaniAri/pokemon",
    gitAria: "View Pokémon Explorer Web App project on GitHub",
    link: "https://master--pokemon-generator-react-typescript.netlify.app/",
    websiteAria: "View the deployed Pokémon Explorer Web App web app",
    technologies: " React, TypeScript, MUI, Netlify",
  },

  {
    name: "A to-do app",
    description:
      "As part of a data interaction course at the vocational school, I successfully completed my first Full Stack project by developing a To-Do application. For the frontend development, I utilized React and Bootstrap to create a modern and intuitive user interface. On the backend, I used Express.js and Node.js to build a server-side application. These technologies enabled me to handle routing, API endpoints, and data management, ensuring communication between the frontend and backend components. For data storage, I used PostgreSQL.",
    image: "/todo.jpg",
    github: "https://github.com/orgs/project-on-data-interaction/repositories",
    gitAria: "View the to-do app project on GitHub",
    link: "",
    technologies: " Express.js, Node.js, Bootstrap, PostgreSQL ",
  },
];

const ProjectSection = () => {
  const fontRef = useRef(null);
  useEffect(() => {
    const el = fontRef.current;
    const myText = new SplitType("#my-text2");
    gsap.to(".char", {
      y: 0,
      stagger: 0.25,
      delay: 0.3,
      duration: 1.5,
      scrollTrigger: { trigger: el },
    });
  }, []);
  return (
    <section id="Projects">
      <div className="text-lime-950 ">
        {" "}
        <h1 className=" text-center font-semibold text-4xl text-lime-950 ">
          {" "}
          <div
            id="my-text2"
            ref={fontRef}>
            Projects
          </div>
        </h1>
        <div className="flex flex-col space-y-28 mt-12">
          {projects.map((project, idx) => {
            return (
              <div key={idx}>
                <div className="flex flex-col md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={1000}
                          height={1000}
                          className="rounded-xl shadow-xl hover:opacity-70 mb-8"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl mb-8"
                      />
                    )}

                    <p className="text-2xl leading-7 mt-12 mb-8 text-neutral-600 dark:text-neutral-400 text-center rounded font-semibold bg-lime-100 shadow-xl">
                      {project.technologies}
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="text-center text-2xl font-semibold mb-6 md:text-left">
                      {project.name}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link
                        href={project.github}
                        target="_blank"
                        aria-label={project.gitAria}>
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>

                      {project.link && (
                        <Link
                          href={project.link}
                          target="_blank"
                          aria-label={project.websiteAria}>
                          <BsArrowRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
