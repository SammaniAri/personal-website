/** @format */

"use client";
import React from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/all";

import {
	useRef,
	useEffect,
} from "react";
const skills = [
  { skill: "Version Control & Git" },
  { skill: "Responsive & Accessible Design" },
  { skill: "User Experience (UX) Awareness" },
  { skill: "Communication & Collaboration" },
  { skill: "Agile & Scrum Methodology" },
  { skill: "Problem-Solving & Debugging" },
  { skill: "Attention to Detail" },
  { skill: "Adaptability & Continuous Learning" },
  { skill: "Language skills - English / Swedish" },
];
gsap.registerPlugin(ScrollTrigger);
const AboutSection = () => {
  const fontRef = useRef(null);
  useEffect(() => {
    const el = fontRef.current;
    const myText = new SplitType("#my-text4");
    gsap.to(".char", {
      y: 0,
      stagger: 0.25,
      delay: 0.3,
      duration: 1.5,
      scrollTrigger: { trigger: el },
    });
  }, []);
  return (
    <section id="About">
      <div className="my-12 pb-12 md:pt-16">
        <div className="text-lime-950 text-center font-semibold text-4xl">
          <h1 className="text-lime-950 text-center font-semibold text-4xl ">
            {" "}
            <div
              id="my-text4"
              ref={fontRef}>
              About Me
            </div>
          </h1>
        </div>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 mt-12 text-lime-950 ">
            <h1 className="text-center text-2xl font-semibold mb-6 md:text-left text-lime-950">
              {" "}
              Get to know me
            </h1>

            <p className="text-xl leading-7 mb-4  text-lime-950 dark:text-neutral-400">
              <p className="mb-4">
                I’m a frontend developer passionate about crafting seamless,
                user-friendly web applications. After graduating from{" "}
                <span className="font-bold text-lime-800">
                  Hyper Island in Stockholm
                </span>
                , I gained hands-on experience developing{" "}
                <span className="font-bold text-lime-800">
                  SaaS platforms and B2B applications,
                </span>{" "}
                collaborating in{" "}
                <span className="font-bold text-lime-800">agile teams</span> to
                enhance UI/UX, improve performance, and integrate backend
                services.
              </p>

              <p>
                <span className="font-bold text-lime-800">
                  I love seeing designs come to life
                </span>{" "}
                on the web—that’s what draws me to frontend development. I enjoy
                working where{" "}
                <span className="font-bold text-lime-800">
                  creativity and technology meet,
                </span>{" "}
                blending technical precision with an intuitive approach to
                design. As{" "}
                <span className="font-bold text-lime-800">
                  a team player with strong communication skills,
                </span>{" "}
                I collaborate effectively with designers and developers to
                create meaningful digital experiences. I’m also{" "}
                <span className="font-bold text-lime-800">
                  adaptable and always eager to learn,
                </span>{" "}
                continuously refining my skills to stay ahead in an
                ever-evolving tech landscape.
              </p>
            </p>
            <br></br>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-semibold mb-6 md:text-left mt-12 ">
              My skills
            </h1>
            <div className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-lime-100 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold">
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
