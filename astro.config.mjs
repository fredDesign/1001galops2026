// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://1001galops.fr",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      customPages: [
        "https://1001galops.fr/#balades",
        "https://1001galops.fr/#evenements",
        "https://1001galops.fr/#yoga",
        "https://1001galops.fr/#lieu",
        "https://1001galops.fr/#apropos",
      ],
    }),
  ],
})
