import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "clover", "text-summary"],
      provider: "istanbul",
      include: ["lib/**/*", "src/**/*", "test/**/*"],
      exclude: ["**/*.cy.tsx", "**/*.stories.ts", "**/*.tsx"],
      reportsDirectory: "coverage/vitest",
    },
  },
});
