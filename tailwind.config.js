/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        astral: {
          light: '#e0f2ff',
          DEFAULT: '#64b5f6',
          dark: '#1a73e8'
        }
      }
    }
  },
  plugins: []
}
