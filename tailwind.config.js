/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Add mobile-safe viewport heights
      height: {
        "screen-safe": ["100vh", "100dvh"], // Fallback then modern
        "screen-small": ["100vh", "100svh"], // Always accounts for browser UI
        "screen-dynamic": ["100vh", "100dvh"], // Changes as UI shows/hides
        "screen-large": ["100vh", "100lvh"], // Assumes UI is hidden
      },
      minHeight: {
        "screen-safe": ["100vh", "100dvh"],
        "screen-small": ["100vh", "100svh"],
        "screen-dynamic": ["100vh", "100dvh"],
        "screen-large": ["100vh", "100lvh"],
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      colors: {
        // Direction B tokens (shared with the iOS app; keep names in sync)
        vv: {
          bg: "#1C1B1A",
          bg2: "#232220",
          surface: "#2B2A28",
          surface2: "#353331",
          bubble: "#3A3836",
          meter: "#45423F",
          text: "#F3EFEA",
          text2: "#BDB7AF",
          text3: "#A39C93",
          red: "#C8161F",
          "red-deep": "#6E0A10",
          "red-text": "#FF5A5F",
        },
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll-banner": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-banner": "scroll-banner 15s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
