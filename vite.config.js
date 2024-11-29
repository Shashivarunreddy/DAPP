import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            external: [
                '@solana/wallet-adapter-react',
                '@solana/wallet-adapter-react-ui',
                '@solana/wallet-adapter-wallets',
                '@solana/web3.js'
            ]
        }
    }
});
