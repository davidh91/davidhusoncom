import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// The dev server injects inline scripts (React Fast Refresh, HMR client) that
// the Content-Security-Policy in index.html blocks. Drop the policy in dev only.
// Production builds keep it, and they contain no inline scripts.
const stripCspInDev = {
  name: "strip-csp-in-dev",
  apply: "serve",
  transformIndexHtml: (html) =>
    html.replace(/<meta http-equiv="Content-Security-Policy"[\s\S]*?\/>/, ""),
};

export default defineConfig({
  plugins: [react(), tailwindcss(), stripCspInDev],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000,
  },
});
