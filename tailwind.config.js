const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */

module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  darkMode: "class",
  content: ["./src/**/*.{html,css,js}", "./blocks/**/*.{html,css,js}"],
  theme: {
    extend: {
      fontSize: {
        "body-lg": ["16px", "1.5"],
        body: ["15px", "1.5"],
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.125rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.5" }],
        "3xl": ["1.875rem", { lineHeight: "1.45" }],
        "4xl": ["2.25rem", { lineHeight: "1.4" }],
        "5xl": ["3rem", { lineHeight: "1.2" }],
        "6xl": ["3.75rem", { lineHeight: "1.1" }],
        "7xl": ["4.5rem", { lineHeight: "1.1" }],
        "8xl": ["6rem", { lineHeight: "1.1" }],
        "9xl": ["8rem", { lineHeight: "1.1" }],
      },
      colors: {
        "cycle-blue": {
          DEFAULT: "rgb(42, 167, 255)",
          accent: "rgb(32, 121, 184)",
        },
        "cycle-black": {
          DEFAULT: "rgb(18, 18, 21)",
          accent: "rgb(30, 30, 33)",
        },
        "cycle-gray": {
          DEFAULT: "rgb(72, 72, 75)",
          accent: "rgb(45, 45, 48)",
          light: "rgb(240, 240, 243)",
        },
        "cycle-white": {
          DEFAULT: "rgb(250, 250, 253)",
          accent: "rgb(247, 247, 250)",
        },
        "cycle-alt": {
          DEFAULT: "rgb(255, 255, 255)",
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fade-in 250ms linear",
        "fade-in-fast": "fade-in 100ms linear",
        "pulse-glow": "pulse-glow 5s 5s 10 alternate ease",
      },
      keyframes: {
        "pulse-glow": {
          "0%": {
            "box-shadow":
              "0px 0px 15px 5px rgba(var(--cycle-accent-blue), .15)",
          },

          "50%": {
            "box-shadow":
              "0px 0px 15px 5px rgba(var(--cycle-accent-blue), .35)",
          },

          "100%": {
            "box-shadow":
              "0px 0px 15px 5px rgba(var(--cycle-accent-blue), .75)",
          },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      boxShadow: {
        glow: "0 4px 14px 0 rgba(0, 0, 0, 0.3)",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1800px",
      // => @media (min-width: 1800px) { ... }
    },
  },
};
