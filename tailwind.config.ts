import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'peach':'#E7816B',
        'light-peach':'#FFAD9B',
        'black':'#1D1C1E',
        'dark-grey':'#333136',
        'white':'#FFFFFF',
        'light-grey':'#F1F3F5',
      }
    },
  },
  plugins: [],
}
export default config
