// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "isup",
      description: "Check if a site is up - A simple command-line tool",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: {
        github: "https://github.com/shivamhwp/isup",
        twitter: "https://x.com/shivamhwp",
      },
      customCss: ["./src/styles/global.css"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
