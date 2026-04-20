import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

function forceExitPlugin() {
	return {
		name: "force-exit",
		closeBundle() {
			// eslint-disable-next-line no-undef
			setTimeout(() => process.exit(0), 1000);
		}
	};
}

export default defineConfig({
	plugins: [
		react(),
		svgr(),
		vitePrerenderPlugin({ renderTarget: "#root" }),
		forceExitPlugin()
	],
	server: {
		port: 5173
	},
	preview: {
		port: 3000
	}
});
