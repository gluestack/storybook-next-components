import { createConfig } from "@gluestack-ui/themed";
import { config as defaultConfig } from "@gluestack-ui/config";

const config = createConfig({
  ...defaultConfig,
  components: {
    ...defaultConfig.components,
    Image: {
      ...defaultConfig.components.Image,
      theme: {
        ...defaultConfig.components.Image.theme,
        bg: "$backgroundLight300",
      },
    },
    AvatarImage: {
      ...defaultConfig.components.AvatarImage,
      theme: {
        ...defaultConfig.components.AvatarImage.theme,
        bg: "$backgroundLight300",
      },
    },
  },
} as const);

export { config };

// Get the type of Config
type ConfigType = typeof config;

// Extend the internal styled config
declare module "@gluestack-ui/config" {
  interface IConfig extends ConfigType {}
}
