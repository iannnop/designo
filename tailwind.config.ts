module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "peach": "#E7816B",
        "light-peach": "#FFAD9B",
        "black": "#1D1C1E",
        "dark-gray": "#333136",
        "light-gray": "#F1F3F5",
      },
      backgroundImage: {
        "footerCTA": "url('../../public/assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg')",
        "mobileHomeHero": "url('../../public/assets/home/mobile/bg-pattern-hero-home.svg')",
        "mobileHero": "url('../../public/assets/shared/mobile/hero-circle.svg')",
        "smallCircle": "url('../../public/assets/shared/desktop/bg-pattern-small-circle.svg')",
        "webDesign": "url('../../public/assets/home/mobile/image-web-design.jpg')",
        "appDesign": "url('../../public/assets/home/mobile/image-app-design.jpg')",
        "graphicDesign": "url('../../public/assets/home/mobile/image-graphic-design.jpg')",
      },
      transitionProperty: {
        "width": "width",
        "spacing": 'margin, padding',
      },
      maxWidth: {
        "8xl": "100rem",
      },
      screens: {
        "2xsmall": "320px",
        "xsmall": "768px",
        "small": "1024px",
        "medium": "1280px",
        "large": "1440px",
        "xlarge": "1680px",
        "2xlarge": "1920px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),
  ],
}
