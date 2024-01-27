/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-family)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      typography: ({ theme }) => ({
        white: {
          css: {
            '--tw-prose-body': theme('colors.secondary.DEFAULT'),
            '--tw-prose-headings': theme('colors.secondary.DEFAULT'),
            '--tw-prose-lead': theme('colors.secondary.DEFAULT'),
            '--tw-prose-links': theme('colors.secondary.DEFAULT'),
            '--tw-prose-bold': theme('colors.secondary.DEFAULT'),
            '--tw-prose-counters': theme('colors.secondary.DEFAULT'),
            '--tw-prose-bullets': theme('colors.secondary.DEFAULT'),
            '--tw-prose-hr': theme('colors.secondary.DEFAULT'),
            '--tw-prose-quotes': theme('colors.secondary.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.secondary.DEFAULT'),
            '--tw-prose-captions': theme('colors.secondary.DEFAULT'),
            '--tw-prose-code': theme('colors.secondary.DEFAULT'),
            '--tw-prose-pre-code': theme('colors.secondary.DEFAULT'),
            '--tw-prose-pre-bg': theme('colors.secondary.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.secondary.DEFAULT'),
            '--tw-prose-td-borders': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-body': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-headings': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-lead': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-bullets': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-hr': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-quotes': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-quote-borders': theme(
              'colors.secondary.DEFAULT'
            ),
            '--tw-prose-invert-captions': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-code': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-pre-code': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.secondary.DEFAULT'),
            '--tw-prose-invert-td-borders': theme('colors.secondary.DEFAULT'),
          },
        },
      }),
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
