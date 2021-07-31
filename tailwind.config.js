const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
    'xs': '475px',
    ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        athletics: ['Athletics', 'sans-serif']
      },
      colors: {
        "brand-color": "#3977DE",
        "demo-btn": "#EBF1FC",
        "dia-color": "#1B2A4E",
        "textbl-color": "#bdd2f4",
        "overlay-color": "rgba(0, 0, 0, 0.3)",
      },
      spacing: {
        0.1: "0.2px",
        3.5: "14px",
        22: "88px",
        34: "138px",
        53: "212px",
        54: "216px",
        57: "247px",
        66: "261px",
        75: "300px",
        78: "316px",
        82: "327px",
        85: "357px",
        98: "403px",
        100: "409px",
        110: "504px",
        112: "507px",
        144: "582px",
        170: "634px",
        180: "643px",
        200: "700px",
        210: "718px",
        244: "822px",
      },
      lineHeight: {
        'lg-h': '138.66%',
        'xlg-h': '173.66%'
      },
      zIndex: {
        '-10': '-10',
      },
      fontSize: {
        "4.5xl": "45px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
