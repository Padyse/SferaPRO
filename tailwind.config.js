/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sferaBg: '#070A1A'
      },
      boxShadow: {
        soft: '0 16px 60px rgba(0,0,0,0.45)'
      },
      borderRadius: {
        xl2: '24px'
      }
    }
  },
  plugins: []
}
