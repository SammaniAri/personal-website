/** @format */
"use client";

import React from "react";
import {
	useRef,
	useEffect,
} from "react";
import {
	useForm,
	ValidationError,
} from "@formspree/react";
import { gsap } from "gsap";
import SplitType from "split-type";

const ContactSection = () => {
	const fontRef = useRef(null);
	useEffect(() => {
		const el = fontRef.current;
		const myText = new SplitType(
			"#my-text1"
		);
		gsap.to(".char", {
			y: 0,
			stagger: 0.25,
			delay: 0.3,
			duration: 1.5,
			scrollTrigger: { trigger: el },
		});
	}, []);
	return (
		<section id="Contact">
			<div className="my-12 pb-12 md:pt-16">
				<div
					className="text-lime-950 text-center font-semibold text-4xl"
					id="my-text1"
					ref={fontRef}>
					Contact Me
				</div>
				<div className="text-lime-950 text-center font-semibold text-4xl">
					<form
						className="border-2 rounded-md mx-auto w-96 flex flex-col justify-center"
						action="https://formspree.io/f/xjvnapkw"
						method="POST">
						<div className="mx-4 my-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-black">
								Your Name:
							</label>
							<input
								name="name"
								className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-lime-700 focus:border-lime-700 sm:text-sm"></input>
						</div>
						<div className="mx-4 my-4">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-black">
								Your Email:
							</label>
							<input
								name="email"
								className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-lime-700 focus:border-lime-700 sm:text-sm"></input>
						</div>
						<div className="mx-4 my-4">
							<label
								htmlFor="message"
								className="block text-sm font-medium text-black">
								Your Message:
							</label>
							<textarea
								name="message"
								className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-lime-700 focus:border-lime-700 sm:text-sm"></textarea>
						</div>
						<button
							className="text-neutral-100 font-semibold text-sm px-6 py-3 bg-lime-600 rounded shadow hover:bg-lime-700 w-1/2 mx-auto my-4"
							type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
