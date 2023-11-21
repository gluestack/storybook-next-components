import React from 'react';
import {
  Box,
  Icon,
  Text,
  VStack,
  Image,
  ScrollView,
  Pressable,
  FlatList,
  Divider,
  HStack,
  useColorMode,
  useBreakpointValue,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';
import type { ImageSourcePropType } from 'react-native';
import { Carousel } from '../components/Carousel';
import {
  Bike,
  Car,
  Cross,
  LucideIcon,
  LucideUserCog,
  MoreVertical,
  User,
  UserCog,
  UserCogIcon,
} from 'lucide-react-native';

type Category = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};

type BankingPartner = {
  imageUri: ImageSourcePropType;
};

const categories: Category[] = [
  {
    iconName: Bike,
    iconText: 'Bike',
  },
  {
    iconName: Car,
    iconText: 'Car',
  },
  {
    iconName: User,
    iconText: 'Personal ',
  },
  {
    iconName: Cross,
    iconText: 'Health',
  },

  {
    iconName: MoreVertical,
    iconText: 'More',
  },
];

const banking_partners: BankingPartner[] = [
  {
    imageUri: require('./assets/images/insurance1.png'),
  },
  {
    imageUri: require('./assets/images/insurance2.png'),
  },
  {
    imageUri: require('./assets/images/insurance6.png'),
  },
  {
    imageUri: require('./assets/images/insurance4.png'),
  },
  {
    imageUri: require('./assets/images/insurance5.png'),
  },
  {
    imageUri: require('./assets/images/insurance6.png'),
  },
  {
    imageUri: require('./assets/images/insurance7.png'),
  },
  {
    imageUri: require('./assets/images/insurance8.png'),
  },
  {
    imageUri: require('./assets/images/insurance9.png'),
  },
];

//TODO: update after themed component update

function CategoryIcon({ item }: { item: Category }) {
  const colormode = useColorMode();
  return (
    <VStack space="md" alignItems="center">
      <Box
        p="$2"
        h="$10"
        w="$10"
        rounded="$full"
        sx={{
          _light: {
            bg: '$primary100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
      >
        <Pressable alignItems="center" justifyContent="center">
          <Icon
            size="xl"
            as={item.iconName}
            color="$primary500"
            sx={{ _dark: { color: '$textDark0' } }}
          />
        </Pressable>
      </Box>
      <Text
        fontSize="$xs"
        textAlign="center"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        {item.iconText}
      </Text>
    </VStack>
  );
}

function BankCard({ item }: { item: BankingPartner }) {
  return (
    <Image
      borderWidth="$1"
      sx={{
        '@base': {
          h: '$122',
        },
        '@md': {
          h: '$48',
        },
        '_light': {
          borderColor: '$borderLight200',
        },
        '_dark': {
          borderColor: '$borderDark700',
        },
      }}
      w="$full"
      rounded="$sm"
      resizeMode="contain"
      source={item.imageUri}
      alt="Insurance Partner"
    />
  );
}

const CarouselLayout = () => {
  return (
    <Box
      sx={{
        '@base': {
          py: '$4',
          bg: '$none',
        },
        '@md': {
          py: '$0',
        },
      }}
    >
      <Carousel
        images={[
          require('./assets/images/insurancebanner.png'),
          require('./assets/images/insurance10.png'),
          require('./assets/images/insurance11.png'),
          require('./assets/images/insurance12.png'),
        ]}
        height="$72"
        activeIndicatorBgColor="$backgroundLight500"
        inactiveIndicatorBgColor="$backgroundDark300"
      />
    </Box>
  );
};

function MainContent() {
  const noColumnBankPartner = useBreakpointValue({
    base: 3,
    lg: 4,
  });

  return (
    <Box flex={1}>
      <Box
        sx={{
          '@base': {
            display: 'none',
          },
          '@md': {
            display: 'flex',
          },
        }}
      >
        <Box pb="$5">
          <CarouselLayout />
        </Box>
      </Box>

      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Box
              sx={{
                '@base': {
                  display: 'flex',
                },
                '@md': {
                  display: 'none',
                },
              }}
            >
              <Box
                sx={{
                  '@base': {
                    _light: {
                      bg: '$backgroundLight0',
                    },
                    _dark: {
                      bg: '$backgroundDark800',
                    },
                  },
                  '@md': {
                    _light: {
                      bg: '$primary50',
                    },
                    _dark: {
                      bg: '$backgroundDark700',
                    },
                  },
                }}
              >
                <CarouselLayout />
              </Box>
            </Box>
            <Box
              sx={{
                '@md': {
                  pt: '$8',
                },
                '_light': {
                  bg: '$backgroundLight0',
                },
                '_dark': {
                  bg: '$backgroundDark800',
                },
              }}
            >
              <Text
                fontSize="$md"
                fontWeight="$bold"
                sx={{
                  _light: {
                    color: '$textLight800',
                  },
                  _dark: {
                    color: '$textDark50',
                  },
                }}
                mb="$4"
              >
                Insurance
              </Text>

              <ScrollView horizontal={true}>
                <HStack space="xl">
                  {categories.map((item, index) => (
                    <Pressable key={index}>
                      <CategoryIcon item={item} />
                    </Pressable>
                  ))}
                </HStack>
              </ScrollView>
              <Box
                sx={{
                  '@base': {
                    display: 'none',
                  },
                  '@md': {
                    display: 'flex',
                  },
                }}
              >
                <Divider
                  bg="$backgroundLight200"
                  mt="$5"
                  sx={{
                    '_dark': { bg: '$backgroundDark700' },
                    '@base': {
                      mb: '$4',
                    },
                    '@md': {
                      mb: '$5',
                    },
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                '@base': {
                  pt: '$5',
                },
                '@md': {
                  pt: '$0',
                },
                '_light': {
                  bg: '$backgroundLight0',
                },
                '_dark': {
                  bg: '$backgroundDark800',
                },
              }}
            >
              <Text
                fontSize="$md"
                fontWeight="$bold"
                sx={{
                  _light: {
                    color: '$textLight800',
                  },
                  _dark: {
                    color: '$textDark50',
                  },
                }}
                mb="$2"
              >
                Insurance Partners
              </Text>
            </Box>
          </>
        }
        numColumns={noColumnBankPartner}
        key={noColumnBankPartner}
        data={banking_partners}
        keyExtractor={(index) => 'key' + index}
        sx={{
          '@base': {
            px: '$4',
            pb: '$4',
          },
          '@md': {
            px: '$8',
            pb: '$8',
          },
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
        contentContainerStyle={{ justifyContent: 'space-between' }}
        renderItem={({
          item,
          index,
        }: {
          item: BankingPartner;
          index: number;
        }) => (
          <Pressable
            key={index}
            my="$2"
            sx={{
              '@base': {
                mr: '$4',
                w: '$3/10',
              },
              '@lg': {
                w: '$23/100',
              },
            }}
          >
            <BankCard item={item} />
          </Pressable>
        )}
      />
    </Box>
  );
}
export default function () {
  return (
    <DashboardLayout
      scrollable={false}
      title="Insurance"
      displaySidebar={false}
      rightPanelMobileHeader={true}
    >
      <MainContent />
    </DashboardLayout>
  );
}
