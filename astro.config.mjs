// @ts-check
import { defineConfig } from 'astro/config'
import { SITE } from './site.config'

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
})
