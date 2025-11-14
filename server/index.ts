// Static site development server
// This just runs Vite for the static website
import { spawn } from 'child_process';

console.log('Starting Better Friend static website...');

const vite = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5000'], {
  stdio: 'inherit',
  shell: true
});

vite.on('error', (error) => {
  console.error('Failed to start Vite:', error);
  process.exit(1);
});

vite.on('exit', (code) => {
  if (code !== 0) {
    console.error(`Vite process exited with code ${code}`);
  }
  process.exit(code || 0);
});

// Handle cleanup
process.on('SIGTERM', () => {
  vite.kill('SIGTERM');
});

process.on('SIGINT', () => {
  vite.kill('SIGINT');
});
