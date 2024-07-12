import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        backgroundColor:{
        "blue":'#0000ac'
      },
      colors:{
        'blue':'#0000ac',
        'disabled':'#0000ac96'
      },
      screens:{
        'med':'1000px',
        'max':'1411px'
      }
    },
    fontFamily: {
      mukta: [ "Mukta", 'sans-serif'],
    },
    
  },
  plugins: [],
};
export default config;
