import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // This allows access from any device in the network
    port: 5173, // (or your default port)
  },
  plugins: [react(), tailwindcss()],
});
