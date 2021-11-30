const config = {
	mode: "jit",
	purge: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			minHeight: {
				0: "0",
				"1/4": "25%",
				"1/2": "50%",
				"3/4": "75%",
				full: "100%",
			},
			minWidth: {
				0: "0",
				"1/4": "25%",
				"35%": "35%",
				"1/2": "50%",
				"3/4": "75%",
				full: "100%",
			},
			height: {
				175: "175px",
				300: "300px",
			},
			zIndex: {
				1: "1",
			},
			inset: {
				"125%": "125%",
				22: "5.5rem",
			},
			margin: {
				"-50%": "-50%",
			},
			backgroundColor: (theme) => ({
				...theme("colors"),
				cardBg: "#4A5F00",
			}),
			borderColor: (theme) => ({
				...theme("colors"),
				hrColor: "white",
				text: "white",
			}),
			textColor: (theme) => ({
				...theme("colors"),
				main: "white",
			}),
		},
	},

	plugins: [],
};

module.exports = config;
