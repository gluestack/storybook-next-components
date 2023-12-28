/** @type {import('next').NextConfig} */
const { withGluestackUI } = require("@gluestack/ui-next-adapter");
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["expo-linear-gradient", "lucide-react-native"],
  async headers() {
    return [
      {
        // matching all API routes
        source: "/explore/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
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
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
      "@custom-ui/themed": path.join(__dirname, "packages/themed/src"),
      "@custom-ui/config": path.join(
        __dirname,
        "packages/config/src/gluestack-ui.config.ts"
      ),
    };

    return config;
  },
};

module.exports = withGluestackUI(nextConfig);
