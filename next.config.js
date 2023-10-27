/** @type {import('next').NextConfig} */
const { withGluestackUI } = require('@gluestack/ui-next-adapter');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'expo-linear-gradient',
    'lucide-react-native',
    'react-native-keyboard-aware-scroll-view',
  ],
  async headers() {
    return [
      {
        // matching all API routes
        source: '/explore/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };

    return config;
  },
};

module.exports = withGluestackUI(nextConfig);
