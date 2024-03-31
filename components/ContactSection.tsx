/** @format */
"use client";

import React from "react";
import {
	useForm,
	ValidationError,
} from "@formspree/react";

const ContactSection = () => {
	return (
		<div className="flex justify-center items-center min-h-screen">
			<form
				className="border-2 rounded-md m-12 mx-6 w-96 flex flex-col justify-center"
				action="https://formspree.io/f/mbjngadw"
				method="POST">
				<div className="mx-4 my-4">
					<label
						htmlFor="name"
						className="block text-sm font-medium text-black">
						Name:
					</label>
					<input
						name="name"
						className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-lime-700 focus:border-lime-700 sm:text-sm"></input>
				</div>
				<div className="mx-4 my-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-black">
						Email:
					</label>
					<input
						name="email"
						className="mt-1 text-black block w-full px-3 py-2 border border-gray-300  shadow-sm focus:outline-none focus:ring-lime-700 focus:border-lime-700 sm:text-sm"></input>
				</div>
			</form>
		</div>
	);
};

export default ContactSection;
