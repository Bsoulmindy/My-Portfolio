import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    base: "/",
    plugins: [react({}), svgr()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        css: true,
        reporters: ["verbose"],
        coverage: {
            provider: "istanbul",
            reporter: ["text", "json", "html"],
            include: ["src/**/*"],
            exclude: [],
        },
    },
});
