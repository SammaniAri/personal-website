/** @format */

import React from "react";
import { motion } from "framer-motion";
const AnimatedFont = ({ text }) => {
	const letters = text.split("");
	const container = {
		hidden: { opacity: 0 },
		visible: (i = 1) => ({
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.04 * 1,
			},
		}), // A dynamic variable.(used to stagger the children)
	};

	const child = {
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},

		hidden: {
			opacity: 0,
			y: -20,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		},
	};

	//console.log(letters);
	return (
		<motion.div
			style={{
				//overflow: "hidden",
				display: "flex",
				justifyContent: "center",
			}}
			variants={container}
			initial="hidden"
			animate="visible">
			{" "}
			{letters.map(
				(
					letters: "",
					index: number
				) => (
					<motion.span
						variants={child}
						style={{
							marginRight: "5px",
						}}
						key={index}>
						{letters}
					</motion.span>
				)
			)}
		</motion.div>
	);
};

export default AnimatedFont;
