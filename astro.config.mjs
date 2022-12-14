import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
import sitemap from "@astrojs/sitemap";

// https://astro-imagetools-docs.vercel.app/en/introduction
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  site: "http://betomeng.com",
  integrations: [tailwind(), sitemap(), astroImageTools],
});
