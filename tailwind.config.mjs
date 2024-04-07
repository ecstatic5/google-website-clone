/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"main": "#202124",
				"hover-main": "#303134",
				"hover-input": "#303134",
				"input-border": "#5f6368",
				"hover-outline-input": "#303134"
			}
		},
	},
	plugins: [],
}
