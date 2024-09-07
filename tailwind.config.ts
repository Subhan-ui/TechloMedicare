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
        'disabled':'#0000ac96',
        'green': '#27AE60',
        'mutedRed': '#EB5757',
        'grey':'#4f4f4f',
        'darkGrey':'#333333',
        'lightGrey':'#e0e0e0',
        'lightSlate': '#828282',
        'shadow':'#000000bf',
        'awaiting': "#2f80ed",
        'orange':'#ff9939',
        'back':'#f5f5f5'
      },
      screens:{
        'med':'1000px',
        'max':'1411px'
      }
    },
    
  },
  plugins: [],
};
export default config;

