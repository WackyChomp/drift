import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /* --------------- container --------------- */
      container:{
        center: true,
        padding: '5rem',
        screens: {
          '2xl': '1400px',
        },
      },
      /* --------------- Font Sizes --------------- */
      fontSize: {
        'heading1-bold': [
          '36px',
          {
            lineHeight: '140%',
            fontWeight: '700'
          }
        ],
        'heading1-medium': [
          '36px',
          {
            lineHeight: '140%',
            fontWeight: '500'
          }
        ],
        'heading2-bold': [
          '30px',
          {
            lineHeight: '140%',
            fontWeight: '700'
          }
        ],
        'heading2-medium': [
          '30px',
          {
            lineHeight: '140%',
            fontWeight: '500'
          }
        ],
        'heading3-bold': [
          '24px',
          {
            lineHeight: '140%',
            fontWeight: '700'
          }
        ],
        'heading3-medium': [
          '24px',
          {
            lineHeight: '140%',
            fontWeight: '500'
          }
        ],
        'body-bold': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '700'
          }
        ],
        'body-medium': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '500'
          }
        ],
        'body-normal': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '400'
          }
        ],
        'body1-bold': [
          '18px',
          {
            lineHeight: '140%',
            fontWeight: '700'
          }
        ],
        'base-regular': [
          '16px',
          {
            lineHeight: '140%',
            fontWeight: '400'
          }
        ],
        'small-regular': [
          '14px',
          {
            lineHeight: '140%',
            fontWeight: '400'
          }
        ],
        // 'EXAMPLE': [
        //   '24px',
        //   {
        //     lineHeight: '140%',
        //     fontWeight: '700'
        //   }
        // ],
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
