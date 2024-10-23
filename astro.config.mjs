// @ts-check
import { defineConfig } from 'astro/config'
import { SITE } from './site.config'
import UnoCSS from 'unocss/astro'

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
})
