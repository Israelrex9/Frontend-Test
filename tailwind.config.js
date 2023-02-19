/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {
    screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif",
      },
      colors: {
        'black': '#151515',
        'orange': '#FDBF86',
        'pink': '#CD78A1',
      },
      keyframes: {
            'fade-in-down': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(-20px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          },
          'fade-out-down': {
              'from': {
                  opacity: '1',
                  transform: 'translateY(0px)'
              },
              'to': {
                  opacity: '0',
                  transform: 'translateY(10px)'
              },
          },
          'fade-in-up': {
              '0%': {
                  opacity: '0',
                  transform: 'translateY(10px)'
              },
              '100%': {
                  opacity: '1',
                  transform: 'translateY(0)'
              },
          },
          'fade-out-up': {
              'from': {
                  opacity: '1',
                  transform: 'translateY(0px)'
              },
              'to': {
                  opacity: '0',
                  transform: 'translateY(10px)'
              },
          }
      },
      animation: {
          'fade-in-down': 'fade-in-down 2s ease-out',
          'fade-out-down': 'fade-out-down 0.5s ease-out',
          'fade-in-up': 'fade-in-up 0.5s ease-out',
          'fade-out-up': 'fade-out-up 0.5s ease-out'
      }
    }
  },
  variants: {},
  plugins: [],
}
