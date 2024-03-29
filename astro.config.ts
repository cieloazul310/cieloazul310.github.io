import { defineConfig } from 'astro/config';
import pandacss from "@pandacss/astro";
import partytown from "@astrojs/partytown";
import mdx from "@astrojs/mdx";
import rehypeClassNames from "rehype-class-names";
import { rehypeClassNamesOptions } from "@cieloazul310/astro-sarkara/classes";

// https://astro.build/config
export default defineConfig({
  integrations: [
    pandacss(),
    mdx(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    // @ts-expect-error
    rehypePlugins: [[rehypeClassNames, rehypeClassNamesOptions]],
  },
});
