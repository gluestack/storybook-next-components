import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Pressable,
  ScrollView,
} from '@gluestack-ui/themed';

type TabProps = {
  variant: string;
  mr?: string;
  px?: string;
  justifyContent?: string;
  navigationState: { routes: { key: string; title: string }[]; index: number };
  jumpTo: (key: string) => void;
};

export default function ({
  navigationState: { routes, index },
  jumpTo,
  variant,
}: TabProps) {
  return (
    <HStack
      sx={{
        _light: {
          bg:
            variant === 'primary'
              ? '$backgroundLight0'
              : variant === 'secondary'
              ? '$primary500'
              : variant === 'tertiary'
              ? '$backgroundLight100'
              : '$backgroundLight100',
        },
        _dark: {
          bg:
            variant === 'primary'
              ? '$backgroundDark800'
              : variant === 'secondary'
              ? '$backgroundDark600'
              : variant === 'tertiary'
              ? '$backgroundDark800'
              : '$backgroundDark700',
        },
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {routes.map((route: any, i: any) => {
          type Mode = {
            color: string;
          };
          const lightMode: Mode = {
            color: '',
          };
          const darkMode: Mode = {
            color: '',
          };
          if (variant === 'primary') {
            lightMode.color = index === i ? '$primary500' : '$textLight500';
            darkMode.color = index === i ? '$primary300' : '$textDark400';
          } else if (variant === 'secondary') {
            lightMode.color = index === i ? '$textLight50' : '$primary300';
            darkMode.color = index === i ? '$textDark50' : '$textDark400';
          } else if (variant === 'tertiary') {
            lightMode.color = index === i ? '$primary500' : '$textLight500';
            darkMode.color = index === i ? '$primary300' : '$textDark400';
          } else {
            lightMode.color = index === i ? '$primary500' : '$textLight500';
            darkMode.color = index === i ? '$primary300' : '$textDark400';
          }
          return (
            <VStack key={i} pt="$2" mr="$0" px="$1">
              <Pressable
                px="$4"
                pt="$2"
                onPress={() => {
                  jumpTo(route.key);
                }}
              >
                <Text
                  textAlign="center"
                  pb="$2"
                  fontWeight="$medium"
                  sx={{
                    '@base': {
                      fontSize: '$sm',
                    },
                    '@md': {
                      fontSize: '$md',
                    },
                    '_light': {
                      color: index === i ? '$primary500' : '$textLight500',
                    },
                    '_dark': {
                      color: index === i ? '$primary300' : '$textDark400',
                    },
                  }}
                >
                  {route.title}
                </Text>
              </Pressable>
              {index === i && (
                <Box
                  sx={{
                    borderTopLeftRadius: '$sm',
                    borderTopRightRadius: '$sm',
                    _light: {
                      bg:
                        variant === 'primary'
                          ? '$primary500'
                          : variant === 'secondary'
                          ? '$backgroundLight50'
                          : variant === 'tertiary'
                          ? '$primary500'
                          : '$primary500',
                    },
                    _dark: {
                      bg:
                        variant === 'primary'
                          ? '$primary500'
                          : variant === 'secondary'
                          ? '$primary500'
                          : variant === 'tertiary'
                          ? '$primary500'
                          : '$primary500',
                    },
                  }}
                  h="$1"
                />
              )}
            </VStack>
          );
        })}
      </ScrollView>
    </HStack>
  );
}
