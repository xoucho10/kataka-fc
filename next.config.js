const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'images.unsplash.com' }
    ],
    formats: ['image/avif', 'image/webp']
  }
};
module.exports = nextConfig;
