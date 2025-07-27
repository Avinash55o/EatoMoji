// tailwind.config.js (or tailwind.config.mjs if preferred)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your font families here, e.g. 'sans': ['Inter', 'sans-serif'],
        fredoka: ['Fredoka', 'sans-serif'],
        chewy: ['Chewy', 'sans-serif'],
        comfortaa: ['Comfortaa', 'cursive'],
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("aspect-ratio-supported", "@supports (aspect-ratio: 1 / 1)");
    },
  ],
}