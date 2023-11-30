import React from 'react';
import {
  Box,
  VStack,
  StatusBar,
  HStack,
  Icon,
  Image,
  Text,
  Menu,
  Avatar,
  Pressable,
  AvatarImage,
  Link,
  ArrowLeftIcon,
  MenuItem,
  MenuItemLabel,
  useColorMode,
} from '@gluestack-ui/themed';
import Sidebar from '../components/Sidebar';
import { MoreVertical } from 'lucide-react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type ChatLayoutProps = {
  scrollable?: boolean;
  displayScreenTitle?: boolean;
  displaySidebar?: boolean;
  header?: {
    menuButton: boolean;
    searchbar: boolean;
  };
  mobileHeader?: {
    backButton: boolean;
  };
  title: string;
  subTitle: string;
  children: React.ReactNode;
  rightHeaderPanel?: boolean;
};

type HeaderProps = {
  title: string;
  subTitle?: string;
  toggleSidebar: () => void;
  menuButton: boolean;
  searchbar: boolean;
  rightPanel?: boolean;
};

type MobileHeaderProps = {
  title: string;
  subTitle: string;
  backButton?: boolean;
};

type MainContentProps = {
  displayScreenTitle?: boolean;
  children: React.ReactNode;
};

export function Header(props: HeaderProps) {
  const colorMode = useColorMode();
  return (
    <Box
      px='$8'
      py='$3'
      borderBottomWidth='$1'
      sx={{
        _dark: { bg: '$backgroundDark900', borderColor: '$borderDark800' },
        _light: { bg: '$backgroundLight0', borderColor: '$borderLight100' },
      }}
    >
      <VStack alignSelf='center' width='$full'>
        <HStack alignItems='center' justifyContent='space-between'>
          <HStack space='md' alignItems='center'>
            <Pressable>
              <Image
                source={
                  colorMode == 'light'
                    ? require('../assets/Menu_light.svg')
                    : require('../assets/Menu_dark.svg')
                }
                aspectRatio='203/24'
                size='2xs'
                alt='gluestack-ui'
              />
            </Pressable>

            <Image
              aspectRatio='203/24'
              w='$212'
              source={
                colorMode == 'light'
                  ? require('../assets/gluestackUiPro_light.svg')
                  : require('../assets/gluestackUiPro_dark.svg')
              }
              alt='gluestack-ui'
              size='2xs'
            />
          </HStack>

          <HStack space='sm' alignItems='center'>
            <Image
              aspectRatio='203/24'
              size='2xs'
              source={require('../assets/Search_dark.svg')}
              alt='gluestack-ui'
              sx={{
                _light: { display: 'none' },
                '@md': { display: 'flex' },
              }}
            />
            <Image
              aspectRatio='203/24'
              w='$8'
              h='$8'
              source={require('../assets/pannel.png')}
              alt='gluestack-ui'
            />
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
}

function MainContent(props: MainContentProps) {
  return (
    <VStack maxWidth='$containerWidth' flex={1} width='$full'>
      {props.children}
    </VStack>
  );
}

export function MobileHeader(props: MobileHeaderProps) {
  return (
    <Box
      px='$3'
      py='$2'
      sx={{
        '@md': {
          _light: {
            bg: '$backgroundLight50',
          },
        },
        _light: {
          bg: '$primary500',
        },
        _dark: {
          bg: '$backgroundDark900',
        },
      }}
    >
      <HStack space='xs' alignItems='center'>
        <Link p='$0'>
          <Icon as={ArrowLeftIcon} m='$2' size='xl' color='$textLight50' />
        </Link>

        <Avatar size='md' sx={{ _dark: { borderColor: '$primary700' } }}>
          <AvatarImage source={require('../assets/ProfileImage.png')} />
        </Avatar>

        <VStack>
          {props.subTitle ? (
            <>
              <Text color='$textLight50' fontSize='$lg'>
                {props.title}
              </Text>
              <Text
                sx={{
                  _light: {
                    color: '$primary300',
                  },
                  _dark: {
                    color: '$textDark400',
                  },
                }}
                fontSize='$sm'
              >
                {props.subTitle}
              </Text>
            </>
          ) : (
            <Text color='$textLight50' fontSize='$lg'>
              {props.title}
            </Text>
          )}
        </VStack>

        <HStack ml='auto' space='xs' alignItems='center'>
          <Menu
            trigger={(triggerProps) => {
              return (
                <Pressable
                  accessibilityLabel='More options menu'
                  {...triggerProps}
                >
                  <Icon
                    as={MoreVertical}
                    m='$2'
                    w='$5'
                    h='$5'
                    color='$textLight50'
                  />
                </Pressable>
              );
            }}
            placement='bottom right'
          >
            <MenuItem key='Community' textValue='Community'>
              <MenuItemLabel size='sm'>New group</MenuItemLabel>
            </MenuItem>
            <MenuItem key='Community' textValue='Community'>
              <MenuItemLabel size='sm'>New broadcast</MenuItemLabel>
            </MenuItem>
            <MenuItem key='Community' textValue='Community'>
              <MenuItemLabel size='sm'>Settings</MenuItemLabel>
            </MenuItem>
          </Menu>
        </HStack>
      </HStack>
    </Box>
  );
}

export default function ChatLayout({
  displaySidebar = true,
  header = {
    menuButton: true,
    searchbar: false,
  },
  mobileHeader = {
    backButton: true,
  },
  ...props
}: ChatLayoutProps) {
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <Box
      sx={{
        // _web: {
          // height: '100vh',
          // overflow: 'hidden',
        // },
      }}
      // height='$full'
    >
      <StatusBar translucent backgroundColor='$none' barStyle='light-content' />
      <Box bg='$primary500' sx={{ _dark: { bg: '$backgroundDark900' } }} />
      <VStack
        // flex={1}
        bg='$primary50'
        sx={{ _dark: { bg: '$backgroundDark800' } }}
      >
        <Box
          sx={{
            '@md': {
              display: 'none',
            },
          }}
          display='flex'
        >
          <MobileHeader
            title={props.title}
            subTitle={props.subTitle}
            backButton={mobileHeader.backButton}
          />
        </Box>
        <Box
          sx={{
            '@md': {
              display: 'flex',
            },
          }}
          display='none'
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
        <Box
          flex={1}
          sx={{
            '@md': {
              flexDirection: 'row',
            },
            _light: {
              borderTopColor: '$borderLight200',
            },
            _dark: {
              bg: '$backgroundDark700',
              borderTopColor: '$borderDark700',
            },
          }}
          flexDirection='column'
        >
          {isSidebarVisible && displaySidebar && (
            <Box
              sx={{
                '@md': {
                  display: 'flex',
                },
              }}
              display='none'
            >
              <Sidebar />
            </Box>
          )}
          {/* <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
          <VStack alignItems='center' flex={1} sx={{ '@md': { p: '$8' } }}>
            <MainContent displayScreenTitle={true} {...props} />
          </VStack>
          {/* </KeyboardAwareScrollView> */}
        </Box>
      </VStack>
    </Box>
  );
}
