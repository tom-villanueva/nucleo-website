import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["RocgroteskMedium", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        violeta: "#7C00DD",
        rosa: "#D564EF",
        cyan: "#5CE1E6",
        lima: "#C1FF72",
        azul: "#2586F7",
      },
    },
  },
  plugins: [],
};
