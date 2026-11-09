import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    clearMocks: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    css: true,
    include: [
      "src/components/**/*.test.{ts,tsx}",
      "src/features/**/*.{test,spec}.{ts,tsx}",
      "src/layouts/**/*.test.{ts,tsx}",
      "src/lib/**/*.test.{ts,tsx}",
      "src/shared/**/*.test.{ts,tsx}",
      "src/setup.test.tsx",
    ],
  },
});
