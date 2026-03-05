/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./*.{js,ts,jsx,tsx}"],
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
        brand: {
          950: "#020617",
          900: "#0f172a", // slate-900 - Deep corporate blue/black
          800: "#1e293b", // slate-800
          700: "#334155", // slate-700
          600: "#475569", // slate-600
          500: "#64748b", // slate-500
          400: "#94a3b8", // slate-400
          300: "#cbd5e1", // slate-300
          200: "#e2e8f0", // slate-200
          100: "#f1f5f9", // slate-100
          50: "#f8fafc",  // slate-50
        },
        accent: {
          DEFAULT: "#2563eb", // blue-600 - Professional Blue
          hover: "#1d4ed8",   // blue-700
          light: "#dbeafe",   // blue-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 15px rgba(37, 99, 235, 0.2)',
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
