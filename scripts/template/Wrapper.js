module.exports = () => {
  return `import React, { ReactNode, useEffect } from "react";
  
    // import { useDarkMode } from './utils/hooks/useDarkMode';
    import { GluestackUIProvider } from "../components";
    import { config } from "../../gluestack-ui.config";
    import { Dimensions, Platform, View } from "react-native";
    
    const Wrapper: ({ children }: { children: JSX.Element }) => JSX.Element = ({
      children,
    }) => {
      const isWeb = Platform.OS === "web";
    
      let value = false;
      if (isWeb) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        // value = useDarkMode();
        value = false;
      }
      const [isDark, setIsDark] = React.useState(false);
      function getColorMode() {
        if (isWeb) {
          return value ? "dark" : "light";
        } else {
          return isDark ? "dark" : "light";
        }
      }
    
      const getWrapper = (children: ReactNode) => {
        return (
          <View
            style={{
              flex: 1,
              height: Dimensions.get("window").height,
              backgroundColor: getColorMode() === "light" ? "#F5F5F5" : "#171923",
            }}
          >
            {children}
          </View>
        );
      };
      return getWrapper(
        <GluestackUIProvider config={config.theme} colorMode={getColorMode()}>
          {children}
        </GluestackUIProvider>
      );
    };
    
    export default Wrapper;
    `;
};
