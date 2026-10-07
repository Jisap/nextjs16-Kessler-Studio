import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0908",
        surface: "#161412",
        fg: "#f2ede6",
        muted: "#a89e93",
        accent: "#c98a4b",
        "accent-dim": "#7a5230",
        border: "rgba(242, 237, 230, 0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      transitionTimingFunction: {
        curtain: "cubic-bezier(0.83, 0, 0.17, 1)",
        flyout: "cubic-bezier(0.075, 0.82, 0.165, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
