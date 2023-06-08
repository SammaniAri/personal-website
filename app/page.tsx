/** @format */

"use strict";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
	if (typeof document !== "undefined") {
		const headingAnimations =
			document.querySelectorAll(
				".hidden"
			);
		const observer =
			new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						entry.target.classList.toggle(
							"show",
							entry.isIntersecting
						);
					});
				}
			);

		headingAnimations.forEach(
			(headingAnimation) => {
				observer.observe(
					headingAnimation
				);
			}
		);
	}

	return (
		<main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
			<HeroSection />
			<AboutSection />
			<ProjectSection />
			<Footer />
		</main>
	);
}
