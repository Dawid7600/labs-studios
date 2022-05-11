module.exports = {
	content: ["./**/*.{html, css, js}"],
	theme: {
		colors: {
			white: "#FFFAFA",
			gray: "#7A7A7A",
			footerGray: "#525252",
		},
		extend: {
			borderRadius: {
				"9xl": "75px",
			},
			colors: {
				mainBlue: "#EEF2FC",
				buttonBlue: "#2E62DC",
			},
			fontFamily: {
				atma: ["Atma", "cursive"],
				poppins: ["Poppins", "sans-serif"],
				thasadith: ["Thasadith", "sans-serif"],
			},
		},
	},
	plugins: [],
};
