import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: ['responsive'],
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayText: '#12305B',
        blueShade: '#12305B',
        yellowShade: '#FBF9F2',
        pinkShade: '#FC5959',
      },
      boxShadow: {
        'custom': '50px 50px 100px 0px #00000025',
        'custom2': '0px 100px 100px 0px #00000025',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
