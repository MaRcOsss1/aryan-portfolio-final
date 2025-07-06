export default defineConfig({
  plugins: [react()],
- base: '/aryan-portfolio-final/',
+ base: './',
  resolve: { alias: { '@/': path.resolve(__dirname, 'src/') } }
});
