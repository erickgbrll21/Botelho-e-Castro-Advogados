import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#080808",
          soft: "#171717",
          muted: "#525252",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          warm: "#EDEDED",
          cream: "#F6F6F4",
        },
        brand: {
          navy: "#080808",
          deep: "#050505",
          gold: "#5F5F5F",
          goldSoft: "#B8B8B8",
        },
        line: "#D4D4D4",
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Arial", "Helvetica", "sans-serif"],
        heading: ["var(--font-heading)", "Arial", "Helvetica", "sans-serif"],
        sans: ["var(--font-sans)", "Arial", "Helvetica", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
