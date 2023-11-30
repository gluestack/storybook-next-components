import React from 'react';
import {
  Text,
  VStack,
  Image,
  Pressable,
  Box,
  Button,
  HStack,
  Icon,
  ScrollView,
  useTheme,
  ButtonText,
  styled,
  useBreakpointValue,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
// import { MaterialIcons } from '@expo/vector-icons';
import { Platform, useWindowDimensions } from 'react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';
import { FlipHorizontal } from 'lucide-react-native';

const LinearGradient = styled(
  ExpoLinearGradient,
  {},

  {
    resolveProps: ['colors', 'start', 'end'],
  },
  {
    propertyTokenMap: {
      colors: 'colors',
    },
    propertyResolver: {
      colors: (rawValue: any, resolver: any) => {
        rawValue.forEach((color: any, index: number) => {
          rawValue[index] = resolver(color);
        });
        return rawValue;
      },
    },
  }
);

type List = {
  itemName: string;
  colors: string[];
};
type CardProps = {
  item: List;
  shadeIndex: number;
  currentIndex: number;
  handleChangeShade: (a: number) => void;
};

function Card(props: CardProps) {
  return (
    <Pressable
      onPress={() => {
        props.handleChangeShade(props.currentIndex);
      }}
      sx={{
        '@md': {
          mx: '$2',
          mb: '$2',
        },
      }}
    >
      <VStack alignItems="center" space="xs">
        <LinearGradient
          zIndex={-1}
          colors={props.item.colors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Box
            sx={{
              '@md': {
                w: '$20',
                h: '$24',
              },
            }}
            w="$16"
            h="$16"
            opacity={0.2}
            rounded="$md"
            borderWidth={props.shadeIndex === props.currentIndex ? '$1' : '$0'}
            borderColor="black"
          />
        </LinearGradient>

        <Image
          rounded="$md"
          position="absolute"
          opacity={0.7}
          zIndex={-1}
          sx={{
            '@md': {
              w: '$24',
              h: '$24',
            },
          }}
          w="$16"
          h="$16"
          source={require('./assets/images/photofilter.png')}
          alt="Alternate Text"
          resizeMode="cover"
        />

        <Text
          fontSize="$xs"
          sx={{
            _light: {
              color:
                props.shadeIndex === props.currentIndex
                  ? '$textLight800'
                  : '$textLight500',
            },
            _dark: {
              color:
                props.shadeIndex === props.currentIndex
                  ? '$textDark50'
                  : '$textDark400',
            },
          }}
        >
          {props.item.itemName}
        </Text>
      </VStack>
    </Pressable>
  );
}

function Compare() {
  return (
    <HStack
      alignItems="center"
      gap="$2"
      justifyContent="flex-end"
      mt="$4"
      sx={{
        '@md': {
          mb: '$8',
          ml: '$2',
          justifyContent: Platform.OS === 'web' ? 'flex-start' : 'flex-end',
        },
      }}
    >
      <Pressable onPress={() => {}}>
        <Icon
          sx={{
            _light: {
              color: '$textLight500',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
          size="xl"
          as={FlipHorizontal}
        />
      </Pressable>
      <Text
        fontWeight="$medium"
        color="$textLight500"
        sx={{
          _dark: {
            color: '$textDark400',
          },
        }}
      >
        Compare
      </Text>
    </HStack>
  );
}
function FilterImages({
  shadeIndex,
  handleChangeShade,
}: {
  shadeIndex: number;
  handleChangeShade: (a: number) => void;
}) {
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  const noColumn = 2;

  const list: List[] = [
    {
      itemName: 'Original',
      colors: ['', ''],
    },
    {
      itemName: 'Pinkfresh',
      colors: ['$rose300', '$rose800'],
    },
    // {
    //   itemName: 'Warm',
    //   colors: [colors.customWarmLight, colors.customWarmDark],
    // },
    {
      itemName: 'Cool',
      colors: ['$emerald300', '$emerald800'],
    },
    {
      itemName: 'Film',
      colors: ['$yellow300', '$yellow800'],
    },
    // {
    //   itemName: 'Modern',
    //   colors: [colors.customModernLight, colors.customModernLight],
    // },
    {
      itemName: 'Vintage',
      colors: ['$rose300', '$rose800'],
    },
    // {
    //   itemName: 'Mist',
    //   colors: [colors.customMistLight, colors.customMistDark],
    // },

    {
      itemName: 'Fade',
      colors: ['$yellow300', '$yellow800'],
    },
    {
      itemName: 'Warm',
      colors: ['$yellow300', '$yellow800'],
    },
    {
      itemName: 'Modern',
      colors: ['$yellow300', '$yellow800'],
    },
    {
      itemName: 'Mist',
      colors: ['$yellow300', '$yellow800'],
    },
    {
      itemName: 'Fade',
      colors: ['$yellow300', '$yellow800'],
    },
  ];

  const maxWidth = useBreakpointValue({
    base: true, //why flase is not woerking here
    md: true,
  });

  return (
    <HStack
      sx={{
        '@md': {
          mt: '$0',
          _web: {
            flexWrap: 'wrap',
          },
        },
      }}
      space="xs"
      mt="$5"
      alignItems="flex-start"
      minWidth="$96"
      {...(Platform.OS === 'web' && maxWidth ? { maxW: '400' } : '')}
    >
      {list.map((item, index) => {
        return (
          <Card
            item={item}
            key={index + item.itemName}
            shadeIndex={shadeIndex}
            currentIndex={index}
            handleChangeShade={handleChangeShade}
          />
        );
      })}
    </HStack>
  );
}
function MobileContent({
  shadeIndex,
  handleChangeShade,
}: {
  shadeIndex: number;
  handleChangeShade: (a: number) => void;
}) {
  return (
    <>
      <Compare />
      <Box
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        display="flex"
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <FilterImages
            shadeIndex={shadeIndex}
            handleChangeShade={handleChangeShade}
          />
        </ScrollView>
      </Box>

      <Box
        sx={{
          '@md': {
            display: 'flex',
          },
        }}
        display="none"
      >
        {Platform.OS === 'web' ? (
          <FilterImages
            shadeIndex={shadeIndex}
            handleChangeShade={handleChangeShade}
          />
        ) : (
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}
            bounces={false}
          >
            <FilterImages
              shadeIndex={shadeIndex}
              handleChangeShade={handleChangeShade}
            />
          </ScrollView>
        )}
      </Box>

      <HStack mt="$4" alignItems="center" justifyContent="space-between">
        <Pressable onPress={() => {}}>
          <Icon
            h="$8"
            w="$8"
            as={FlipHorizontal}
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          />
        </Pressable>
        <Pressable onPress={() => {}}>
          <Icon
            h="$8"
            w="$8"
            as={FlipHorizontal}
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          />
        </Pressable>
      </HStack>
    </>
  );
}

function WebContent({
  shadeIndex,
  handleChangeShade,
}: {
  shadeIndex: number;
  handleChangeShade: (a: number) => void;
}) {
  return (
    <VStack justifyContent="space-between" h="$full">
      <Box>
        <FilterImages
          shadeIndex={shadeIndex}
          handleChangeShade={handleChangeShade}
        />
        <Compare />
      </Box>

      <HStack
        mt="auto"
        sx={{
          '@md': {
            mx: '$2',
            my: '$0',
          },
        }}
        alignItems="center"
        justifyContent="space-between"
        gap="$2"
        my="$2"
      >
        <Button
          flex={1}
          size="lg"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText fontSize="$sm">Apply </ButtonText>
        </Button>

        <Button
          flex={1}
          size="lg"
          variant="outline"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
        >
          <ButtonText fontSize="$sm">Cancel </ButtonText>
        </Button>
      </HStack>
    </VStack>
  );
}

function MainContent() {
  const [shadeIndex, setShadeIndex] = React.useState(0);
  const handleChangeShade = (index: number) => {
    setShadeIndex(index);
  };
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flex: 1 }}
      sx={{
        _light: {
          bg: '$backgroundLight50',
        },
        _dark: {
          bg: '$backgroundDark800',
        },
      }}
    >
      <Box
        sx={{
          '@md': {
            flexDirection: Platform.OS === 'web' ? 'row' : 'column',
            pt: '$8',
            pb: '$8',
            pl: '$8',
            pr: '$8',
            rounded: '$sm',
            _dark: {
              bg: 'backgroundDark900',
            },
          },
          '_light': {
            bg: 'backgroundLight50',
          },
          '_dark': {
            bg: 'backgroundDark800',
          },
        }}
        flexDirection="column"
        pt="$5"
        pb="$4"
        pl="$4"
        pr="$4"
        flex={1}
      >
        {Platform.OS === 'web' ? (
          <>
            {/* <Hidden from="md">
              <AspectRatio
                w="100%"
                ratio={{
                  base: 5 / 7,
                }}
              >
                <Image
                 // borderRadius="sm"
                  {...(Platform.OS !== 'web' ? { width: '100%' } : '')}
                  source={require('./images/photofilter.png')}
                  alt="Alternate Text"
                />
              </AspectRatio>
            </Hidden> */}

            <Image
              flex={1}
              rounded="$sm"
              mr="$2"
              // {...(Platform.OS !== 'web' ? { width: '$full' } : '')}
              source={require('./assets/images/photofilter.png')}
              alt="Alternate Text"
              w="$full"
              h="$full"
            />
          </>
        ) : (
          <Image
            w="$full"
            sx={{
              '@md': {
                h: '$full',
              },
            }}
            h="70%"
            rounded="$sm"
            source={require('./assets/images/photofilter.png')}
            alt="Alternate Text"
          />
        )}

        <Box
          pb="$4"
          sx={{
            '@md': {
              pb: '$0',
            },
          }}
          key="key"
          flex={1}
        >
          <Box
            sx={{
              '@md': {
                display: 'none',
              },
            }}
            display="flex"
          >
            <MobileContent
              shadeIndex={shadeIndex}
              handleChangeShade={handleChangeShade}
            />
          </Box>

          <Box
            sx={{
              display: 'flex',
            }}
            display="none"
            h="$full"
          >
            {Platform.OS === 'web' ? (
              <WebContent
                shadeIndex={shadeIndex}
                handleChangeShade={handleChangeShade}
              />
            ) : (
              <MobileContent
                shadeIndex={shadeIndex}
                handleChangeShade={handleChangeShade}
              />
            )}
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
export default function PhotoFilters() {
  return (
    <DashboardLayout
      displaySidebar={false}
      title="Photo Filters"
      rightPanelMobileHeader={true}
    >
      <MainContent />
    </DashboardLayout>
  );
}
