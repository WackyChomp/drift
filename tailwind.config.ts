import type { Config } from 'tailwindcss'

const config: Config = {
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
      /* ---------------New Additions Below--------------- */
      colors: {
        'primary-500': '#ff7f50',     /* brown beige */
        'secondary-500': '#008000',      /* green */
        'blue-500': '#1964d4',
        'logout-btn': '#ffd700',      /* yellow */
        'navbar-menu': 'rgba(20,20,40, 0.6)',
        'dark-1': '#000000',
        'dark-2': '#121418',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#FFFFFF',
        'light-2': '#EFEFEF',
        'light-3': '#7878A3',
        'light-4': '#697C89',
        'gray-1': '#666666',
        '': '',
        glassmorphism: 'rgba(16, 16, 18, 0.6)',
      },
      boxShadow:{
        "count-badge": "0px 0px 6px 2px rgba(219, 188, 159, 0.30)",
        "groups-sidebar": "-30px 0px 60px 0px rgba(28, 28, 31, 0.50)",
      },
      screens: {
        xs:'400px',
      },
    },
  },
  plugins: [],
}
export default config
