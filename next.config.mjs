/** @type {import('next').NextConfig} */
const config = {
	output: 'export',
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
	basePath: process.env.BASE_PATH,
}

export default config
