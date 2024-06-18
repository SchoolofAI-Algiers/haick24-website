/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{ts,js,tsx,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      skyBlueColor: "#112148",
      midNightBlueColor: "#00b5e2",
      MintGreen: "#391f9b",
      white: "#ffffff",
      gray: "#F8F3F325",
      grayv: "#9CA3AF",
      oceanBlue: "#00B5E2",
    },
    extend: {
      fontFamily: {
        IPM: "IBM Plex Mono, monospace",
        WorkSans: "Work Sans, sans-serif",
      },
    },
    animation: {
      up: "up 6s ease-in-out infinite",
      down: "down 6s ease-in-out infinite",
      spin: "spin 30s linear infinite",
    },
    keyframes: {
      up: {
        "0%": {
          transform: "translateY(0)",
        },
        "50%": { transform: "translateY(-200%) scale(1.5)" },
      },
      down: {
        "0%": {
          transform: "translateY(0)",
        },
        "50%": { transform: "translateY(200%) scale(1.5)" },
      },
      spin: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "100%": { transform: "rotate(360deg)" },
      },
      fontFamily:{
        IPM:"IBM Plex Mono, monospace",
        WorkSans:"Work Sans, sans-serif"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
};
