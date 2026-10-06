import { defineConfig } from "@pandacss/dev";
import {
  createSarkaraPreset,
  defineSarkaraConfig,
} from "@cieloazul310/astro-sarkara/preset";

export default defineConfig({
  preflight: true,
  presets: [
    "@pandacss/preset-base",
    "@pandacss/preset-panda",
    createSarkaraPreset({ primaryColor: "sky", secondaryColor: "rose" }),
  ],
  include: [
    "./src/**/*.{js,ts,astro,mdx}",
    "./node_modules/@cieloazul310/**/*.{js,ts,astro}",
  ],
  outDir: "styled-system",
});
