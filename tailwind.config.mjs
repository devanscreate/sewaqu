/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pine: {
          900: '#0E1D17',
          800: '#142921',
          700: '#1E3A2F', // Primary Forest Pine
          600: '#274B3D',
          500: '#356351',
          100: '#E2EAE6',
          50: '#F0F5F2',
        },
        stone: {
          bg: '#F4F5F0', // Warm Stone / Mist Background
          card: '#FFFFFF',
          border: '#E3E7E1',
          muted: '#5F6E66',
          dark: '#19221E',
        },
        campfire: {
          DEFAULT: '#D96B27', // Accent Orange
          hover: '#BF5C1E',
          light: '#FDF1E8',
          dark: '#934211',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

