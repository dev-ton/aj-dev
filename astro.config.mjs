// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://dev-ton.github.io/antonin-jech",
  base: "/antonin-jech",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon()],
});
