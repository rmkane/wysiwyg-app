import { defineConfig } from 'vite';

import structuredClone from 'structured-clone';

// Polyfill for Node.js v16
if (!globalThis.structuredClone) {
  globalThis.structuredClone = structuredClone;
}

export default defineConfig({
  server: {
    open: true,
  },
});
