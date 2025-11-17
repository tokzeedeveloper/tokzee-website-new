import { createServer } from "vite";

async function startServer() {
  console.log("Starting Tokzee static website...");

  const vite = await createServer({
    configFile: "./vite.config.ts",
    server: {
      port: 5000,
      host: "0.0.0.0",
      strictPort: true,
      allowedHosts: true,
      hmr: {
        clientPort: 443,
      },
    },
  });

  await vite.listen();

  console.log("  ➜  Local:   http://localhost:5000/");
  console.log("✅ Vite server running successfully!");
}

startServer().catch(console.error);
