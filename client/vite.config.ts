import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

const port = Number(process.env.VITE_CLIENT_PORT) || 5173;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces (necessary for Docker)
    port,
    strictPort: true, // Exit if the port is already in use
    hmr: {
      host: "localhost", // Host of the HMR server (the machine's IP address or localhost)
      port,
    },
  },
  resolve: {
    alias: {
      "@common": path.resolve(__dirname, "./src/common"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
