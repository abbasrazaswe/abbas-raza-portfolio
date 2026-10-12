import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'node:fs';
import { projects } from './src/data/projects';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'project-readme-downloads',
    generateBundle() {
      for (const project of projects) {
        const fileName = `projects/${project.slug}/README.md`;
        this.emitFile({ type: 'asset', fileName, source: readFileSync(fileName, 'utf8') });
      }
    },
  }],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ...Object.fromEntries(projects.map((project) => [project.slug, `projects/${project.slug}/index.html`])),
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
