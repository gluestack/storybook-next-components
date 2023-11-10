import React from "react";
import Sidebar from "../components/Sidebar";
import { Platform } from "react-native";
import {
  Box,
  HStack,
  Icon,
  Pressable,
  VStack,
  Text,
  Image,
  ArrowLeftIcon,
  ScrollView,
  StatusBar,
  useColorMode,
} from "@gluestack-ui/themed";
import { Menu, Search } from "lucide-react-native";
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type DashboardLayoutProps = {
  scrollable?: boolean;
  displayScreenTitle?: boolean;
  displaySidebar?: boolean;
  displayBackButton?: boolean;
  showIcons?: boolean;
  displaySearchButton?: boolean;
  displayNotificationButton?: boolean;
  displayMenuButton?: boolean;
  displayAlternateMobileHeader?: boolean;
  maxWidth?: number;
  header?: {
    searchbar: boolean;
  };
  mobileHeader?: {
    backButton: boolean;
  };
  title: string;
  subTitle?: string;
  children: React.ReactNode;
  showGroupInfoHeader?: boolean;
  displayBackIcon?: boolean;
  rightPanelMobileHeader?: boolean;
  rightHeaderPanel?: boolean;
};

type MainContentProps = DashboardLayoutProps;

type MobileHeaderProps = {
  title: string;
  subTitle?: string;
  backButton: boolean;
  rightPanel?: boolean;
};

type HeaderProps = {
  title: string;
  subTitle?: string;
  toggleSidebar: () => void;
  menuButton: boolean;
  searchbar: boolean;
  rightPanel?: boolean;
};

export function Header(props: HeaderProps) {
  const colorMode = useColorMode();
  return (
    <Box
      px="$8"
      py="$3"
      borderBottomWidth="$1"
      sx={{
        _dark: { bg: "$backgroundDark900", borderColor: "$borderDark800" },
        _light: { bg: "$backgroundLight0", borderColor: "$borderLight100" },
      }}
    >
      <VStack alignSelf="center" width="$full">
        <HStack alignItems="center" justifyContent="space-between">
          <HStack space="md" alignItems="center">
            <Pressable>
              {/* <Image
                source={
                  colorMode == 'light'
                    ? require('./assets/Menu_light.svg')
                    : require('./assets/Menu_dark.svg')
                }
                aspectRatio='203/24'
                size='2xs'
                alt='gluestack-ui'
              /> */}
              <Icon
                sx={{
                  _light: { color: "$backgroundLight800" },
                  _dark: { color: "$backgroundDark50" },
                }}
                as={Menu}
                size="md"
              />
            </Pressable>

            {/* <Image
              aspectRatio='203/24'
              w='$212'
              source={
                colorMode == 'light'
                  ? require('./assets/gluestackUiPro_light.svg')
                  : require('./assets/gluestackUiPro_dark.svg')
              }
              alt='gluestack-ui'
              // size='2xs'
            /> */}
          </HStack>

          <HStack space="sm" alignItems="center">
            <Icon
              sx={{
                _light: { color: "$backgroundLight500" },
                _dark: { color: "$backgroundDark400" },
              }}
              as={Search}
              size="md"
            />
            {/* <Image
              aspectRatio='203/24'
              size='2xs'
              source={require('./assets/Search_dark.svg')}
              alt='gluestack-ui'
              sx={{
                _light: { display: 'none' },
                '@md': { display: 'flex' },
              }}
            /> */}
            <Image
              aspectRatio="203/24"
              w="$8"
              h="$8"
              source={require("./assets/pannel.png")}
              alt="gluestack-ui"
            />
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}

function MainContent(props: MainContentProps) {
  return (
    <VStack maxWidth={props.maxWidth} flex={1} width="$full">
      {props.displayScreenTitle && (
        <Box sx={{ "@md": { display: "flex" } }} display="none">
          <HStack mb="$4" space="md">
            {props.displayBackIcon ? (
              <Pressable>
                <Icon
                  pt="$0.5"
                  as={ArrowLeftIcon}
                  sx={{
                    _light: {
                      color: "$textLight800",
                    },
                    _dark: {
                      color: "$textDark50",
                    },
                  }}
                />
              </Pressable>
            ) : null}
            <Box>
              <Text
                fontSize="$lg"
                fontWeight="$medium"
                sx={{
                  _dark: { color: "$textDark50" },
                  _light: { color: "$textLight800" },
                }}
              >
                {props.title}
              </Text>
              {props.subTitle ? (
                <Text
                  sx={{
                    _dark: { color: "$textDark50" },
                    _light: { color: "$textLight800" },
                  }}
                  fontSize="$sm"
                  fontWeight="$normal"
                >
                  {props.subTitle}
                </Text>
              ) : (
                <></>
              )}
            </Box>
          </HStack>
        </Box>
      )}
      {props.children}
    </VStack>
  );
}

export function MobileHeader(props: MobileHeaderProps) {
  return (
    <Box
      px="$1"
      py="$4.5"
      sx={{
        _dark: { bg: "$backgroundDark900", borderColor: "$backgroundDark800" },
        _light: { bg: "$primary500", borderColor: "$backgroundLight200" },
      }}
    >
      <HStack space="sm">
        <HStack
          flex={1}
          space="sm"
          justifyContent="space-between"
          alignItems="center"
        >
          <>
            <HStack alignItems="center" space="xs">
              {props.backButton && (
                <Icon
                  color="$textLight50"
                  sx={{ _dark: { color: "$textDark50" } }}
                  as={ArrowLeftIcon}
                  m="$2"
                  size="md"
                />
              )}
              <VStack>
                <Text
                  color="$textLight50"
                  sx={{ _dark: { color: "$textDark50" } }}
                  fontSize="$lg"
                >
                  {props.title}
                </Text>
                {props.subTitle ? (
                  <Text
                    color="$textLight50"
                    sx={{ _dark: { color: "$textDark50" } }}
                    fontSize="$sm"
                    fontWeight="$normal"
                  >
                    {props.subTitle}
                  </Text>
                ) : undefined}
              </VStack>
            </HStack>
          </>
        </HStack>
      </HStack>
    </Box>
  );
}

export default function DashboardLayout({
  displayScreenTitle = true,
  displaySidebar = true,
  scrollable = true,
  header = {
    searchbar: false,
  },
  displayBackIcon = true,
  maxWidth = 1016,
  mobileHeader = {
    backButton: true,
  },
  ...props
}: DashboardLayoutProps) {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <>
      <Box
        sx={{
          _web: {
            overflow: "hidden",
          },
        }}
        height="$full"
      >
        <>
          <StatusBar
            translucent
            backgroundColor="$none"
            barStyle="light-content"
          />
          <Box
            bg="$primary500"
            sx={{
              _dark: {
                bg: "$backgroundDark900",
              },
            }}
          />
          <VStack
            flex={1}
            bg="$primary50"
            sx={{
              _dark: {
                bg: "$backgroundDark700",
              },
              // '@md': {
              //   bg: '$primary50',
              // },
            }}
          >
            <Box
              sx={{
                "@md": {
                  display: "none",
                },
              }}
            >
              <MobileHeader
                title={props.title}
                subTitle={props.subTitle}
                backButton={mobileHeader.backButton}
                rightPanel={props.rightPanelMobileHeader}
              />
            </Box>
            <Box
              display="none"
              sx={{
                "@md": {
                  display: "flex",
                },
              }}
            >
              <Header
                toggleSidebar={toggleSidebar}
                title={props.title}
                subTitle={props.subTitle}
                menuButton={displaySidebar}
                searchbar={header.searchbar}
                rightPanel={props.rightHeaderPanel}
              />
            </Box>

            <VStack
              flex={1}
              sx={{
                "@md": {
                  flexDirection: "row",
                  // _dark: {
                  //   bg: '$backgroundDark700',
                  // },
                },
                _light: {},
                _dark: {
                  bg: "$backgroundDark700",
                },
              }}
            >
              {isSidebarVisible && displaySidebar && Platform.OS === "web" && (
                <Box display="none" sx={{ "@md": { display: "flex" } }}>
                  <Sidebar />
                </Box>
              )}

              <Box flex={1} sx={{ "@md": { display: "flex" } }} display="none">
                {Platform.OS === "web" ? (
                  <ScrollView
                    flex={1}
                    contentContainerStyle={{
                      alignItems: "center",
                      flexGrow: 1,
                    }}
                    p="$8"
                    showsVerticalScrollIndicator={false}
                  >
                    <MainContent
                      {...props}
                      displayScreenTitle={displayScreenTitle}
                      maxWidth={maxWidth}
                      displayBackIcon={displayBackIcon}
                    />
                  </ScrollView>
                ) : (
                  <Box flex={1} alignItems="center">
                    <MainContent {...props} maxWidth={maxWidth} />
                  </Box>
                )}
              </Box>
              {scrollable ? (
                <Box flex={1} sx={{ "@md": { display: "none" } }}>
                  <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                      flexGrow: 1,
                    }}
                    flex={1}
                  >
                    {/* <KeyboardAwareScrollView
                      showsVerticalScrollIndicator={false}
                      contentContainerStyle={{
                        flexGrow: 1,
                      }}
                    > */}
                    <MainContent
                      {...props}
                      displayScreenTitle={displayScreenTitle}
                    />
                    {/* </KeyboardAwareScrollView> */}
                  </ScrollView>
                </Box>
              ) : (
                <Box flex={1} sx={{ "@md": { display: "none" } }}>
                  <MainContent
                    {...props}
                    displayScreenTitle={displayScreenTitle}
                  />
                </Box>
              )}
            </VStack>
          </VStack>
        </>
      </Box>
    </>
  );
}
