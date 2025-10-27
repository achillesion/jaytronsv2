import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        roboto: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'theme-transition': 'themeTransition 0.3s ease-in-out',
        'gradient-flow': 'gradientFlow 3s ease-in-out infinite',
        'gradient-pulse': 'gradientPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        themeTransition: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        gradientFlow: {
          '0%': { 
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            backgroundPosition: '100% 0%',
            backgroundSize: '200% 200%',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            backgroundPosition: '100% 100%',
            backgroundSize: '200% 200%',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            backgroundPosition: '0% 100%',
            backgroundSize: '200% 200%',
            filter: 'hue-rotate(270deg)'
          },
          '100%': { 
            backgroundPosition: '0% 50%',
            backgroundSize: '200% 200%',
            filter: 'hue-rotate(360deg)'
          },
        },
        gradientPulse: {
          '0%': { 
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(0deg) brightness(1)'
          },
          '25%': { 
            backgroundSize: '300% 300%',
            backgroundPosition: '50% 0%',
            filter: 'hue-rotate(90deg) brightness(1.2)'
          },
          '50%': { 
            backgroundSize: '400% 400%',
            backgroundPosition: '100% 50%',
            filter: 'hue-rotate(180deg) brightness(1.4)'
          },
          '75%': { 
            backgroundSize: '300% 300%',
            backgroundPosition: '50% 100%',
            filter: 'hue-rotate(270deg) brightness(1.2)'
          },
          '100%': { 
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 50%',
            filter: 'hue-rotate(360deg) brightness(1)'
          },
        },
      },
    },
  },
  plugins: [],
}

export default config