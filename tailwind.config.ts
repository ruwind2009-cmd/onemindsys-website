/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'monospace'],
        rajdhani: ['var(--font-rajdhani)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      colors: {
        anc: {
          bg:        '#030a0e',
          bg2:       '#071218',
          bg3:       '#0a1a22',
          green:     '#00ff88',
          blue:      '#00aaff',
          teal:      '#00ffcc',
          text:      '#c8e8f0',
          text2:     '#7aaabb',
          text3:     '#3a6070',
        }
      },
      boxShadow: {
        glow:      '0 0 20px rgba(0,255,136,0.3), 0 0 40px rgba(0,255,136,0.1)',
        'glow-lg': '0 0 40px rgba(0,255,136,0.4), 0 0 80px rgba(0,255,136,0.15)',
        'glow-blue': '0 0 20px rgba(0,170,255,0.3), 0 0 40px rgba(0,170,255,0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'flow-down':  'flowDown 1.5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'grid-move':  'gridMove 20s linear infinite',
      },
      keyframes: {
        flowDown: {
          '0%,100%': { opacity: '0.3', transform: 'translateY(-3px)' },
          '50%':     { opacity: '1',   transform: 'translateY(3px)'  },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 10px rgba(0,255,136,0.1)' },
          '50%':     { boxShadow: '0 0 30px rgba(0,255,136,0.4)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        gridMove: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
      },
    },
  },
  plugins: [],
}
