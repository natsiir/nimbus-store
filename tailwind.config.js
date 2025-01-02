/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: ["Instrument Sans", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        slate: {
          900: "#0F172A", // Warna untuk text-slate-900
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
