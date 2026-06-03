import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#071426",
        ocean: "#0A2A52",
        electric: "#0B6BFF",
        mint: "#00B894",
        saffron: "#F59E0B"
      },
      boxShadow: {
        shell: "0 18px 45px rgba(7, 20, 38, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
