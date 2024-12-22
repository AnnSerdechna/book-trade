import type { Config } from 'tailwindcss';

// rem value = 1200px / 16px(html font size)

export default {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         colors: {
            transparent: 'transparent',
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
            serif: ['Merriweather', 'serif'],
         },
         maxWidth: {
            container: 'var(--width-container)',
         },
         height: {
            header: 'var(--height-header)',
         },
         borderRadius: {
            sm: 'var(--border-radius-sm)',
            md: 'var(--border-radius-md)',
         },
         fontSize: {
            xs: 'var(--font-size-xs)',
            sm: 'var(--font-size-sm)',
            md: 'var(--font-size-md)',
            lg: 'var(--font-size-lg)',
            xl: 'var(--font-size-xl)',
         },
      },
   },
   plugins: [],
} satisfies Config;
