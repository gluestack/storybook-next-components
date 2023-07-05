/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules')([
  'react-native-web',
  'react-native',

  '@expo/vector-icons',
  'lucide-react-native',

  // '@gluestack/design-system',
  '@gluestack-style/react',
  '@gluestack-style/animation-plugin',
  '@legendapp/motion',

  '@expo/html-elements',
  // 'expo-linear-gradient',

  'react-native-svg',
  '@react-native-aria/interactions',
  '@react-native-aria/checkbox',
  '@react-native-aria/focus',
  '@react-native-aria/overlays',
  '@react-native-aria/radio',
  '@react-native-aria/slider',
  '@react-stately/slider',
  '@react-native-aria/toggle',
  '@react-native-aria/utils',
  '@react-native-aria/menu',
  '@gluestack-ui/actionsheet',
  '@gluestack-ui/form-control',
  '@gluestack-ui/avatar',
  '@gluestack-ui/modal',
  '@gluestack-ui/button',
  '@gluestack-ui/checkbox',
  '@gluestack-ui/divider',
  '@gluestack-ui/fab',
  '@gluestack-ui/hooks',
  '@gluestack-ui/hstack',
  '@gluestack-ui/icon',
  '@gluestack-ui/input',
  '@gluestack-ui/link',
  '@gluestack-ui/menu',
  '@gluestack-ui/modal',
  '@gluestack-ui/overlay',
  '@gluestack-ui/popover',
  '@gluestack-ui/progress',
  '@gluestack-ui/provider',
  '@gluestack-ui/radio',
  '@gluestack-ui/select',
  '@gluestack-ui/slider',
  '@gluestack-ui/spinner',
  '@gluestack-ui/switch',
  '@gluestack-ui/textarea',
  '@gluestack-ui/toast',
  '@gluestack-ui/tooltip',
  '@gluestack-ui/vstack',
  '@gluestack-ui/transitions',
  '@gluestack-ui/utils',
  '@gluestack-ui/tabs',
  '@gluestack-ui/react-native-aria',
  '@gluestack-ui/alert-dialog',
  '@gluestack-ui/pressable',
]);
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['gluestack.io'],
  },
  webpack5: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };

    // config.module.rules.push({
    //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    //   use: {
    //     loader: "url-loader",
    //   },
    // });

    // config.module.rules.push({
    //   test: /\.ttf$/,
    //   loader: "url-loader", // or directly file-loader
    //   include: path.resolve(__dirname, "node_modules"),
    // });

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    };

    return config;
  },
};

module.exports = withPlugins([[withTM], [withExpo]], {
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  ...nextConfig,
});
