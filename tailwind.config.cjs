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
			},
			margin: {
				"-50%": "-50%",
			},
		},
	},

	plugins: [],
};

module.exports = config;
