/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#b3d1f2',
          200: '#80b3ea',
          300: '#4d94e2',
          400: '#1a75da',
          500: '#0A66C2', // cor principal
          600: '#0959a9',
          700: '#084c90',
          800: '#063f77',
          900: '#05325e',
          DEFAULT: '#0A66C2',
        },
        secondary: {
          50: '#faffec',
          100: '#f5ffd9',
          200: '#edffb6',
          300: '#e9ffb6', // cor secundária
          400: '#d0e699',
          500: '#b6cc7d',
          600: '#9db360',
          700: '#839944',
          800: '#6a7f27',
          900: '#50650b',
          DEFAULT: '#E9FFB6',
        },
      },
      fontFamily: {
        general: ["'General Sans'", 'sans-serif'],
        mouly: ["'Mouly'", 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
} 