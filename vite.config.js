import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        // Add any other external modules if needed
      ],
      output: {
        assetFileNames: 'images/[name].[ext]',
      },
    },
  },
});
