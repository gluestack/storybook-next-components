import React from 'react';
import { HStack, Icon, Box, VStack, Pressable } from '@gluestack-ui/themed';
import { LucideIcon, Star } from 'lucide-react-native';

type Icon = {
  name: LucideIcon | typeof Icon;
};
function RateUsIcon({
  name,
  filled,
}: {
  name: typeof Icon | LucideIcon;
  filled?: boolean;
}) {
  return (
    <Pressable>
      <Icon
        size="xs"
        sx={{
          '@md': {
            size: 'md',
          },
          '_dark': { color: filled ? '$yellow200' : '$textDark400' },
          '_light': { color: filled ? '$yellow400' : '$textLight400' },
        }}
        as={name}
      />
    </Pressable>
  );
}

function Rating({ filledStars }: { filledStars: number }) {
  return (
    <HStack
      sx={{
        'w': '$170',
        '@md': {
          w: '$275',
          mt: '$3',
        },
      }}
      mt="$2"
      space="xs"
      alignItems="center"
      justifyContent="flex-end"
    >
      {Array.from({ length: filledStars }, (index) => (
        <RateUsIcon key={'#' + index} name={Star} filled />
      ))}
      {Array.from({ length: 5 - filledStars }, (index) => (
        <RateUsIcon key={'#' + index} name={Star} />
      ))}
    </HStack>
  );
}

export default function RateUsIlstrutration() {
  return (
    <>
      <VStack
        borderWidth="$1"
        borderRadius="$md"
        sx={{
          'w': '$170',
          '@md': {
            py: '$4.5',
            w: '$275',
          },
          '_light': {
            borderColor: '$borderLight800',
          },
          '_dark': {
            borderColor: '$borderDark200',
          },
        }}
        py="$3"
        px="$5"
        justifyContent="flex-start"
        space="xs"
      >
        {Array.from({ length: 2 }, (index) => (
          <Box
            key={'#' + index}
            sx={{
              'w': '$32',
              '@md': {
                w: '$212',
              },
              '_light': {
                bg: '$backgroundLight200',
              },
              '_dark': {
                bg: '$backgroundDark400',
              },
            }}
            py="$1"
            borderRadius="$full"
          />
        ))}
        <Box
          sx={{
            'w': '$20',
            '@md': {
              w: '$32',
            },
            '_light': {
              bg: '$backgroundLight200',
            },
            '_dark': {
              bg: '$backgroundDark400',
            },
          }}
          py="$1"
          borderRadius="$full"
        />
      </VStack>

      <Rating filledStars={3} />

      <VStack
        borderWidth="$1"
        borderRadius="$md"
        sx={{
          'w': '$170',
          '@md': {
            py: '$4.5',
            w: '$275',
            mt: '$7',
          },
          '_light': {
            borderColor: '$borderLight800',
          },
          '_dark': {
            borderColor: '$borderDark200',
          },
        }}
        py="$3"
        px="$5"
        justifyContent="flex-start"
        mt="$5"
        space="xs"
      >
        {Array.from({ length: 2 }, (index) => (
          <Box
            key={'#' + index}
            sx={{
              'w': '$32',
              '@md': {
                w: '$212',
              },
              '_light': {
                bg: '$backgroundLight200',
              },
              '_dark': {
                bg: '$backgroundDark400',
              },
            }}
            py="$1"
            rounded="$full"
          />
        ))}
        <Box
          sx={{
            '@md': {
              w: '$32',
            },
            '_light': {
              bg: '$backgroundLight200',
            },
            '_dark': {
              bg: '$backgroundDark400',
            },
          }}
          py="$1"
          w="$20"
          borderRadius="$full"
        />
      </VStack>
      <Rating filledStars={2} />
    </>
  );
}
