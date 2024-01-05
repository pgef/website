import { rapidStylesPath, rapidTailwindTheme, rapidPlugin } from "@rapid-web/ui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    rapidStylesPath,
  ],
  theme: {
    extend: rapidTailwindTheme({}),
  },
  plugins: [rapidPlugin({})],
}
