/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#144E4F',
          light: '#1F6F6F',
          border: '#0F3D3E',
        },
        surface: {
          tab: '#D9D9D9',
        },
        ink: '#0B0B0B',
        muted: '#8A8A8A',
        badge: {
          bg: '#E6ECFA',
        },
        page: '#000000',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
      borderRadius: {
        card: '16px',
        control: '4px',
        tile: '4px',
      },
      boxShadow: {
        card: '0 20px 60px rgba(0,0,0,0.45)',
        btn: '0 3px 6px rgba(0,0,0,0.25)',
        tile: '0 2px 6px rgba(0,0,0,0.35)',
      },
    },
  },
  plugins: [],
};
