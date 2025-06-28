/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': 'var(--tech-blue)',
        'tech-purple': 'var(--tech-purple)',
        'tech-cyan': 'var(--tech-cyan)',
        
        // Primary colors
        'primary': 'var(--primary-blue)',
        'primary-light': 'var(--primary-blue-light)',
        'primary-dark': 'var(--primary-blue-dark)',
        
        // Secondary colors
        'secondary': 'var(--secondary-purple)',
        'secondary-light': 'var(--secondary-purple-light)',
        'secondary-dark': 'var(--secondary-purple-dark)',
        
        // Accent colors
        'accent': 'var(--accent-cyan)',
        'accent-light': 'var(--accent-cyan-light)',
        'accent-dark': 'var(--accent-cyan-dark)',
      },
    },
  },
  plugins: [],
} 