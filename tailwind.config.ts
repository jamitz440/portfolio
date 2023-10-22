import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#212121",
        primary: "#DDBF53",
        card: "#2A2A2A",
      },
      fontFamily: {
        nav: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
