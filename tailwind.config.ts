import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        grandblue: "#0f2f4a",
        grandgreen: "#7d9b8c",
        grandstone: "#f4f1ea"
      }
    },
  },
  plugins: [],
};
export default config;
