import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        ivory: "hsl(var(--ivory))",
        cream: "hsl(var(--cream))",
        champagne: {
          DEFAULT: "hsl(var(--champagne))",
          light: "hsl(var(--champagne-light))",
          dark: "hsl(var(--champagne-dark))",
          beige: "hsl(var(--champagne-beige))",
        },
        "dusty-rose": {
          DEFAULT: "hsl(var(--dusty-rose))",
          soft: "hsl(var(--dusty-rose-soft))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          soft: "hsl(var(--gold-soft))",
          dark: "hsl(var(--gold-dark))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
          dark: "hsl(var(--sage-dark))",
          light: "hsl(var(--sage-light))",
        },
        ink: "hsl(var(--ink))",
      },
      fontFamily: {
        script: ["var(--font-script)", "cursive"],
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "serif"],
        subtitle: ["var(--font-subtitle)", "sans-serif"],
        "hindi-shloka": ["Noto Serif Devanagari", "serif"],
        "hindi-calligraphy": ["Yatra One", "cursive"],
      },
      keyframes: {
        "float-petal": {
          "0%": {
            transform: "translateY(-10vh) translate(0) rotate(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(110vh) translate(80px) rotate(360deg)",
            opacity: "0",
          },
        },
      },
      animation: {
        "float-petal": "float-petal linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
