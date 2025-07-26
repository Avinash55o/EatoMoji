// tailwind.config.js (or tailwind.config.mjs if preferred)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("aspect-ratio-supported", "@supports (aspect-ratio: 1 / 1)");
    },
  ],
};
