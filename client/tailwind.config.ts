import type { Config } from 'tailwindcss';

export default {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            primary: 'var(--color-primary)',
            accent: 'var(--color-accent)',
            white: 'var(--color-white)',
            black: 'var(--color-black)',
            blue: 'var(--color-blue)',
            green: 'var(--color-green)',
            red: 'var(--color-red)',
            orange: 'var(--color-orange)',
            beige: 'var(--color-beige)',
            gray: {
               200: 'var(--color-light-gray)',
               300: 'var(--color-gray)',
               400: 'var(--color-dark-gray)',
            },
         },
         textColor: {
            primary: 'var(--color-text-primary)',
            secondary: 'var(--color-text-secondary)',
            accent: 'var(--color-text-accent)',
         },
         fontFamily: {
            sans: ['Poppins', 'sans-serif'],
         },
      },
   },
   plugins: [],
} satisfies Config;
