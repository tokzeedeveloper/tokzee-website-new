// Static site development server with proper Vite configuration
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Starting Better Friend static website...');

async function startServer() {
  try {
    const server = await createServer({
      configFile: path.resolve(__dirname, '..', 'vite.config.ts'),
      server: {
        host: '0.0.0.0',
        port: 5000,
        strictPort: true,
        hmr: {
          clientPort: 443,
          protocol: 'wss',
        },
        // Allow all hosts for Replit preview
        allowedHosts: true,
      },
    });

    await server.listen();
    server.printUrls();
    
    console.log('\n✅ Vite server running successfully!');
  } catch (error) {
    console.error('Failed to start Vite server:', error);
    process.exit(1);
  }
}

startServer();
