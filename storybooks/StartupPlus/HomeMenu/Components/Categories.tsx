import React from 'react';
import {
  Box,
  Icon,
  Text,
  VStack,
  Center,
  Image,
  FlatList,
  Pressable,
  useColorMode,
} from '@gluestack-ui/themed';
import { LucideIcon } from 'lucide-react-native';
import { ListRenderItemInfo } from 'react-native';

type Icon = {
  icon: LucideIcon | typeof Icon;
  text: string;
};

type IconType = { icons: Icon[] };

const Categories = ({ icons }: IconType) => {
  const colorMode = useColorMode();
  return (
    <VStack
      px="$4"
      sx={{
        '@md': {
          px: '$8',
        },
      }}
    >
      <Text mb="$4" fontSize="$md" fontWeight="$bold">
        Categories
      </Text>

      <FlatList
        data={icons}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Box w="$8" />}
        keyExtractor={(index) => 'key' + index}
        renderItem={({ item }: ListRenderItemInfo<Icon>) => (
          <VStack space="sm" alignItems="center">
            <Center
              rounded="$full"
              sx={{
                '@md': {
                  w: '$60',
                  h: '$60',
                },
                '_light': {
                  bg: '$primary100',
                },
                '_dark': {
                  bg: '$backgroundDark500',
                },
              }}
              w="$10"
              h="$10"
            >
              <Pressable>
                <Icon
                  size="xl"
                  as={item.icon}
                  color="$primary500"
                  sx={{ _dark: { color: '$textDark0' } }}
                />
              </Pressable>
            </Center>
            <Text
              sx={{
                '@md': {
                  fontSize: '$sm',
                  _light: {
                    color: '$textLight500',
                  },
                  _dark: {
                    color: '$textDark400',
                  },
                },
                '@base': {
                  _light: {
                    color: '$textLight800',
                  },
                  _dark: {
                    color: '$textDark50',
                  },
                },
              }}
              fontSize="$xs"
              textAlign="center"
            >
              {item.text}
            </Text>
          </VStack>
        )}
      />
    </VStack>
  );
};

export default Categories;
