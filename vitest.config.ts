import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        globals: true,
        exclude: ["**/node_modules/**", "cdk.out", "infrastructure", "dist", "cdk"],
        include: ["src/**/*.ts"],
    },
})