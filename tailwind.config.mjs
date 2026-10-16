/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Palet token duality editorial (Reverse x Elixir) — dark earthy.
      // Kontras terukur di atas --bg #201C18: fg 14.65:1, fg-soft .66 7.07:1,
      // sage 8.34:1, accent 4.57:1. Di atas --bg-2 pakai fg / fg-soft-2 (.85 = 6.16:1).
      colors: {
        bg: '#201C18',
        'bg-2': '#53473D',
        fg: '#F4EEE2',
        sage: '#B4B99B',
        accent: '#B7754D',
      },
      fontFamily: {
        display: ['Italiana', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
