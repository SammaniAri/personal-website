/** @format */

import React, { useRef } from "react";
import {
	motion,
	Variants,
} from "framer-motion";
const AnimatedFont = ({ text }) => {
	const letters = text.split("");
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.04 * 1,
			},
		}, // A dynamic variable.(used to stagger the children)
	};

	const cardVariants: Variants = {
		offscreen: {
			y: 300,
		},
		onscreen: {
			y: 50,
			rotate: -10,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
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
			initial={container.hidden}
			viewport={{ amount: 0.8 }}
			whileInView={container.visible}>
			{" "}
			{letters.map(
				(
					letters: "",
					index: number
				) => (
					<motion.span
						initial={child.hidden}
						whileInView={child.visible}
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
