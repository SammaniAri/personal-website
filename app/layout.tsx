/** @format */

"use client";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { useCallback } from "react";
import type {
	Container,
	Engine,
} from "tsparticles-engine";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const particlesInit = useCallback(
		async (engine: Engine) => {
			console.log(engine);

			// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			await loadFull(engine);
		},
		[]
	);

	const particlesLoaded = useCallback(
		async (
			container: Container | undefined
		) => {
			await console.log(container);
		},
		[]
	);
	const particleStyle = {
		opacity: 0.2,
	};
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				{" "}
				<ThemeProvider
					enableSystem={true}
					attribute="class">
					{" "}
					<Particles
						style={particleStyle}
						id="tsparticles"
						init={particlesInit}
						loaded={particlesLoaded}
						options={{
							background: {
								color: {
									value: "#4d7c0f",
								},
							},
							fpsLimit: 120,
							interactivity: {
								events: {
									onClick: {
										enable: true,
										mode: "push",
									},
									onHover: {
										enable: true,
										mode: "repulse",
									},
									resize: true,
								},
								modes: {
									push: {
										quantity: 4,
									},
									repulse: {
										distance: 200,
										duration: 0.4,
									},
								},
							},
							particles: {
								color: {
									value: "#ffffff",
								},
								links: {
									color: "#ffffff",
									distance: 150,
									enable: true,
									opacity: 0.5,
									width: 1,
								},
								collisions: {
									enable: true,
								},
								move: {
									direction: "none",
									enable: true,
									outModes: {
										default: "bounce",
									},
									random: false,
									speed: 2,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										area: 800,
									},
									value: 80,
								},
								opacity: {
									value: 0.5,
								},
								shape: {
									type: "circle",
								},
								size: {
									value: {
										min: 1,
										max: 5,
									},
								},
							},
							detectRetina: true,
						}}
					/>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
