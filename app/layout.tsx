/** @format */

"use client";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { motion } from "framer-motion";
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
      <header>
        <script
          defer
          data-domain="sammani.vercel.app"
          src="https://plausible.io/js/script.js"></script>
      </header>

      <body>
        {" "}
        <ThemeProvider
          enableSystem={true}
          attribute="class">
          {" "}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
