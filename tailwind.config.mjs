/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "slider-1": "url('/img/slider-1.webp')",
        about: "url('/img/wall-about.avif')",
      },
      fontFamily: {
        dynalight: ["Dynalight", "cursive"],
      },
    },
  },
  plugins: [],
};
