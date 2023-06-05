/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0d646b',
      'secondary': '#16383a',
    }),
    extend: {
    gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
          },
    },
  },
  plugins: [],
}
