/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yatimmandiri.org',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/news/:path*',
        destination: 'https://yatimmandiri.org/news/wp-json/ymapi/v2/:path*',
      },
      {
        source: '/api/blog/:path*',
        destination: 'https://yatimmandiri.org/blog/wp-json/ymapi/v2/:path*',
      },
      {
        source: '/website/:path*',
        destination: 'https://web.yatimmandiri.org/:path*',
      },
    ];
  },
};

export default nextConfig;
