import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{ts,tsx}', 
    './content/**/*.mdx', 
    './public/**/*.svg',
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./**/*.{jsx,js}",
  ],
  theme: {},
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
} satisfies Config;
