import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    extend: {
      colors: {
        'bg-content1': 'var(--theme-content2)',
        'bg-content2': 'var(--theme-content3)',
        'text-foreground': 'var(text-foreground)',
        'bg-primary': 'var(--theme-primary)',
        'bg-secondary': 'var(--theme-secondary)',
        'theme-font': 'var(--theme-font)'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui',
      addCommonColors: true,
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: '#805AD5',
              50: 'hsl(248, 80%, 98%)',
              100: 'hsl(249, 77%, 95%)',
              200: 'hsl(245, 80%, 92%)',
              300: 'hsl(250, 82%, 85%)',
              400: 'hsl(251, 79%, 76%)',
              500: 'hsl(255, 64%, 66%)',
              600: 'hsl(259, 46%, 59%)',
              700: 'hsl(260, 37%, 50%)',
              800: 'hsl(260, 37%, 42%)',
              900: 'hsl(260, 35%, 35%)',
            },
            // woodsmoke
            secondary: {
              50: '#f6f6f6',
              100: '#e7e7e7',
              200: '#d1d1d1',
              300: '#b0b0b0',
              400: '#888888',
              500: '#6d6d6d',
              600: '#5d5d5d',
              700: '#4f4f4f',
              800: '#454545',
              900: '#3d3d3d',
            }
          },
        },
        dark: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: '#805AD5',
              50: 'hsl(248, 80%, 98%)',
              100: 'hsl(249, 77%, 95%)',
              200: 'hsl(245, 80%, 92%)',
              300: 'hsl(250, 82%, 85%)',
              400: 'hsl(251, 79%, 76%)',
              500: 'hsl(255, 64%, 66%)',
              600: 'hsl(259, 46%, 59%)',
              700: 'hsl(260, 37%, 50%)',
              800: 'hsl(260, 37%, 42%)',
              900: 'hsl(260, 35%, 35%)',
            },
            secondary: {
              DEFAULT: '#141414',
              50: '#f6f6f6',
              100: '#e7e7e7',
              200: '#d1d1d1',
              300: '#b0b0b0',
              400: '#888888',
              500: '#6d6d6d',
              600: '#5d5d5d',
              700: '#4f4f4f',
              800: '#454545',
              900: '#3d3d3d',
            },
            // background: 'hsl(240, 6%, 3%)'
            background: 'hsl(240, 6%, 10%)'
          }
        }
      }
    })
  ]
}
