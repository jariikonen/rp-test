import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    dir: 'src/',
    include: ['**/__tests__/**/*.test.{ts,tsx}'],
  },
});
