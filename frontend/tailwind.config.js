import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        hardBlueDark: {
          primary: "#0033cc", // Hard blue
          secondary: "#1a1a1a", // Dark background
          accent: "#0056b3", // Slightly lighter blue for accents
          neutral: "#2a2e37", // Neutral background
          "base-100": "#ffffff", // Base for light theme
          "base-200": "#f3f4f6", // Slightly darker for cards
          "base-content": "#000000", // Text color for light theme
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
        dark: {
          primary: "#0033cc", // Hard blue in dark mode
          secondary: "#121212", // Darker background
          accent: "#0056b3", // Blue accent for dark mode
          neutral: "#1a1a1a", // Neutral dark background
          "base-100": "#1a1a1a", // Base for dark theme
          "base-200": "#121212", // Cards and modals
          "base-content": "#ffffff", // White text for dark theme
          info: "#3b82f6",
          success: "#22c55e",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
    ],
  },
};
