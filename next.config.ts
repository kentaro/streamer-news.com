import type { NextConfig } from "next";

const config: NextConfig = {
	output: "export",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	basePath: process.env.BASE_PATH || "",
};

export default config;
