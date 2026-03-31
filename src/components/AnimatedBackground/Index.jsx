// src/components/AnimatedBackground/Index.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BackgroundChecker from "../../assets/svgs/background_checker.svg?react";
import BackgroundFlower from "../../assets/svgs/background_flower.svg?react";
import BackgroundLillies from "../../assets/svgs/background_lillies.svg?react";
import BackgroundLines from "../../assets/svgs/background_lines.svg?react";

import "./AnimatedBackground.css";

gsap.registerPlugin(ScrollTrigger);

const EXIT_DIRECTIONS = [
	{ x: "-120vw", y: 0 },
	{ x: "120vw", y: 0 },
	{ x: 0, y: "-120vh" },
	{ x: 0, y: "120vh" },
	{ x: "-120vw", y: "-120vh" },
	{ x: "120vw", y: "120vh" }
];

const ENTRY_DIRECTIONS = [
	{ x: "120vw", y: 0 },
	{ x: "-120vw", y: 0 },
	{ x: 0, y: "120vh" },
	{ x: 0, y: "-120vh" },
	{ x: "120vw", y: "120vh" },
	{ x: "-120vw", y: "-120vh" }
];

const backgrounds = [
	{ Component: BackgroundChecker, id: "bg-0" },
	{ Component: BackgroundFlower, id: "bg-1" },
	{ Component: BackgroundLillies, id: "bg-2" },
	{ Component: BackgroundLines, id: "bg-3" }
];

function AnimatedBackground() {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		const bgLayers = gsap.utils.toArray(".bg-layer", container);

		// Only animate paths — skip rect elements (background color)
		const getElements = (layer) =>
			layer.querySelectorAll("path, circle, ellipse, polygon, polyline");

		// -- Set initial states --
		bgLayers.forEach((layer, i) => {
			const elements = getElements(layer);

			if (i === 0) {
				gsap.set(elements, {
					opacity: 1,
					x: 0,
					y: 0,
					scale: 1
				});
			} else {
				// Pre-position off screen ready to fly in
				elements.forEach((el, elIndex) => {
					const dir =
						ENTRY_DIRECTIONS[elIndex % ENTRY_DIRECTIONS.length];
					gsap.set(el, {
						opacity: 0,
						x: dir.x,
						y: dir.y,
						scale: 0.8
					});
				});
			}
		});

		// -- Build scroll transitions --
		const sections = gsap.utils.toArray(".section");

		sections.forEach((section, index) => {
			if (index === 0) return;

			const outgoingLayer = bgLayers[index - 1];
			const incomingLayer = bgLayers[index];

			if (!outgoingLayer || !incomingLayer) return;

			const outgoingElements = Array.from(getElements(outgoingLayer));
			const incomingElements = Array.from(getElements(incomingLayer));

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: section,
					start: "top 75%",
					end: "top 15%",
					scrub: 2
				}
			});

			// Exit animation — pieces scatter
			outgoingElements.forEach((el, elIndex) => {
				const dir = EXIT_DIRECTIONS[elIndex % EXIT_DIRECTIONS.length];
				tl.to(
					el,
					{
						opacity: 0,
						x: dir.x,
						y: dir.y,
						scale: 0.6,
						ease: "power2.in",
						duration: 1
					},
					elIndex * 0.05
				);
			});

			// Enter animation — pieces assemble
			incomingElements.forEach((el, elIndex) => {
				tl.to(
					el,
					{
						opacity: 1,
						x: 0,
						y: 0,
						scale: 1,
						ease: "power2.out",
						duration: 1
					},
					0.3 + elIndex * 0.05
				);
			});
		});

		return () => {
			ScrollTrigger.getAll().forEach((t) => t.kill());
		};
	}, []);

	return (
		<div ref={containerRef} className="background-container">
			{backgrounds.map(({ Component, id }) => (
				<div key={id} className="bg-layer">
					<Component />
				</div>
			))}
		</div>
	);
}

export default AnimatedBackground;
