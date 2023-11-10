import React, { useState } from 'react';
import {
  Box,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  HStack,
  Icon,
  Image,
  Pressable,
} from '@gluestack-ui/themed';

const images = [require('./assets/images/productbaby.png')];

export default function FullScreenProductPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <Box height="$full">
      <HStack h="$full">
        <Box
          flex={1}
          alignItems="center"
          sx={{
            '@base': {
              bg: '$backgroundDark800',
            },
            '@md': {
              bg: '$backgroundDark900',
            },
          }}
        >
          <Box maxWidth="$containerWidth" w="$full">
            <HStack
              py="$4"
              bg="$backgroundDark900"
              sx={{
                '@base': {
                  justifyContent: 'flex-start',
                  px: '$3',
                  mt: '$0',
                },
                '@md': {
                  justifyContent: 'flex-end',
                  px: '$0',
                  mt: '$10',
                },
              }}
            >
              <Pressable p="$1">
                <Icon size="lg" as={CloseIcon} color="$textLight0" />
              </Pressable>
            </HStack>
            <Box
              flex={1}
              w="$full"
              sx={{
                'h': '$622',
                '@base': {
                  mt: '$5',
                },
                '@md': {
                  mt: '$0',
                },
              }}
            >
              <Image
                key={currentImageIndex}
                resizeMode="cover"
                source={images[currentImageIndex]}
                alt="Product full screen display"
                sx={{ h: '$622' }}
                w="$full"
              />
              <HStack alignItems="center" justifyContent="space-between">
                <Pressable
                  position="absolute"
                  ml="$6"
                  bottom="$64"
                  onPress={() =>
                    setCurrentImageIndex((prev) =>
                      prev > 0 ? prev - 1 : images.length - 1
                    )
                  }
                >
                  <Icon
                    sx={{
                      _dark: { color: '$textDark900' },
                    }}
                    as={ChevronLeftIcon}
                    size="xl"
                  />
                </Pressable>
                <Pressable
                  position="absolute"
                  bottom="$64"
                  right="$6"
                  onPress={() =>
                    setCurrentImageIndex((prev) =>
                      prev < images.length - 1 ? prev + 1 : 0
                    )
                  }
                >
                  <Icon
                    as={ChevronRightIcon}
                    size="xl"
                    sx={{
                      _dark: { color: '$textDark900' },
                    }}
                  />
                </Pressable>
              </HStack>
            </Box>
          </Box>
        </Box>
      </HStack>
    </Box>
  );
}
