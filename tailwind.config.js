/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/**/*.{ts,js,tsx,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      skyBlueColor:"#112148",
      midNightBlueColor:"#00b5e2",
      MintGreen:"#391f9b",
      white: '#ffffff',
      gray:"#eeeeee"
    },
    extend: {
      fontFamily:{
        IPM:"IBM Plex Mono, monospace",
        WorkSans:"Work Sans, sans-serif"
      }
    },
    
  },
  plugins: [],
}

