/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd34u8crftukxnk.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      // 기존에 등록한 도메인도 여기 포함해야 합니다.
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
