/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.js",
    "./nuxt.config.js",
  ],
  safelist: [
    'bg-lightRed',
    'bg-red/25',
    'text-grey',
    'bg-grey/25',
    'bg-white',
    'bg-green',
  ],

  theme: {
    extend: {
      fontFamily: {
        'heading': ['Heading'],
      },
      scale: {
        '25': '.25',
        '80': '.8',
      },
      boxShadow: {
        'edit': 'inset 0 0 0 2px #E6A7F1',
      },
      colors: {
        offwhite: "#f8f8f8",
        darkOffwhite: "#eee",
        lightGrey: "#F0F1EC",
        grey: "#999",
        darkGrey: "#666",
        black: "#1E1E2A",
        blackHighlight: "#082C3E",
        lightOrange: "#FFC9BD",
        orange: "#FBB03B",
        sand: "#CB8B65",
        lightGreen: "#38f3af",
        grassGreen: "#F1FF2B",
        // green: '#1edf99',
        lilac: "#E6A7F1",
        darkLilac: "#651273",
        green: "#44B57A",
        lightYellow: "#FED600",
        yellow: "#FCB900",
        darkYellow: "#FFA617",
        neonYellow: "#ddff33",
        darkNeonYellow: "#B7D231",
        lightRed: "#F2ADAD",
        red: "#E12D39",
        darkRed: "#DD3A3A",
        lightBlue: "#7bd3ff",
        blue: "#48BAFF",
        darkBlue: "#2F3676",
        blueGrey: "#F3F7FA",
      },
    },
  },
  plugins: [],
  container: {},
};
