import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f3ede2",
        clay: "#db6d3f",
        pine: "#18322c",
        moss: "#536d66",
        deep: "#12352f",
        cream: "#fff9f0",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(31, 44, 38, 0.12)",
        float: "0 32px 80px rgba(15, 41, 33, 0.16)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Segoe UI", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "serif"],
      },
      backgroundImage: {
        hero:
          "radial-gradient(circle at top left, rgba(219, 109, 63, 0.18), transparent 28%), radial-gradient(circle at 85% 14%, rgba(91, 143, 123, 0.2), transparent 22%), linear-gradient(180deg, #efe5d3 0%, #f9f4eb 40%, #f4eee4 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
