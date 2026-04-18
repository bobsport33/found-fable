import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Guard browser-only code so the prerender process (Node.js) can
// safely import this file without hitting DOM APIs
if (typeof window !== "undefined") {
	createRoot(document.getElementById("root")).render(
		<StrictMode>
			<App />
		</StrictMode>
	);
}

export async function prerender(data) {
	const { renderToString } = await import("react-dom/server");
	const { parseLinks } = await import("vite-prerender-plugin/parse");

	const html = await renderToString(<App {...data} />);
	const links = parseLinks(html);

	// Force kill any lingering timers/tickers
	if (typeof globalThis.gsap !== "undefined") {
		globalThis.gsap.ticker.sleep();
	}

	return { html, links };
}
