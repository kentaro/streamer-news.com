import type { NextConfig } from "next";
import { execSync } from "node:child_process";

const generateRSS = () => {
	if (process.env.NODE_ENV === "production") {
		execSync("npm run generate-rss", { stdio: "inherit" });
	}
};

generateRSS();

const config: NextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	basePath: process.env.BASE_PATH || "",
};

export default config;
