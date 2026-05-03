/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF7F2',
        'cream-dark': '#F5F0E8',
        beige: '#E8D5C4',
        'beige-light': '#F3E8DD',
        brown: '#8B7355',
        'brown-medium': '#A0845C',
        'brown-dark': '#6B5B4F',
        espresso: '#3C2415',
        'espresso-light': '#5C3D2E',
        'warm-gray': '#D4C9BE',
        sand: '#E8DDD4',
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", 'Georgia', 'serif'],
        body: ["'Courier Prime'", 'Courier New', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}