/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'slate-blue': 'hsl(241, 100%, 67%)',
        'royal-blue': 'hsl(241, 81%, 54%)',
        'light-red': 'hsla(0, 100%, 67%, 0.1)',
        'orange-yellow': 'hsla(39, 100%, 56%, 0.1)',
        'green-teal': 'hsla(166, 100%, 37%, 0.1)',
        'cobalt-blue': 'hsla(234, 85%, 45%, 0.1)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)', 
      },
      gradientColorStops: {
        'violet-blue-circle': 'hsla(256, 72%, 46%, 1)',
        'persian-blue-circle': 'hsla(241, 72%, 46%, 0)',
        'slate-blue': 'hsl(241, 100%, 67%)',
        'royal-blue': 'hsl(241, 81%, 54%)',
      },
      textColor: {
        'light-red': 'hsla(0, 100%, 67%, 1)',
        'orange-yellow': 'hsla(39, 100%, 56%, 1)',
        'green-teal': 'hsla(166, 100%, 37%, 1)',
        'cobalt-blue': 'hsla(234, 85%, 45%, 1)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
        'light-lavender-score': 'hsla(241, 100%, 89%, 0.5)'
      },
      fontFamily: {
        hanken: 'Hanken Grotesk',
    },
  },
  plugins: [],
}}
