/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js", 'node_modules/flowbite-react/lib/esm/**/*.js'
  ], theme: {
      darkMode: false,
      extend: {
          fontFamily: {
              hihi: ['Cabinet Grotesk', 'sans'],
          },
      },
  }, daisyui: {
      themes: ["light"],
  }, plugins: [ require('flowbite/plugin'), '@tailwindcss/aspect-ratio'],
  // darkMode: false
}