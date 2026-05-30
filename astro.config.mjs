// @ts-check
import { defineConfig } from 'astro/config';

// Static site for GitHub Pages on the apex domain distributedrepublic.xyz.
// Custom domain (CNAME) means site is the apex with no base path.
export default defineConfig({
  site: 'https://distributedrepublic.xyz',
  build: { format: 'directory' },
});
