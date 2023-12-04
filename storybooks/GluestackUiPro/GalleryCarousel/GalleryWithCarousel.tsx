import React, { useState, useEffect, useCallback } from 'react';
import { HStack, Image, Icon, Pressable, Box } from '@gluestack-ui/themed';
import { Dimensions } from 'react-native';

import { ChevronLeft, ChevronRight } from 'lucide-react-native';

type ViewSize = {
  width: number;
  height: number;
};
const ImageSrc = [
  'https://images.unsplash.com/photo-1602024242516-fbc9d4fda4b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80',
  'https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
  'https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  'https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80',
  'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80',
];

const GalleryWithCarousel: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const goToNext = () => {
    setActiveImage((prev: number) => prev + 1);
  };

  const goToPrevious = () => {
    setActiveImage((prev: number) => prev - 1);
  };

  const [viewSize, setViewSize] = useState<ViewSize>({ width: 0, height: 0 });
  const { width, height } = Dimensions.get('window');

  const updateViewSize = useCallback(() => {
    const maxSize = Math.min(width, height);
    setViewSize({ width: maxSize, height: maxSize });
  }, [width, height]);

  useEffect(() => {
    updateViewSize();
    Dimensions.addEventListener('change', updateViewSize);
    return () => {
      Dimensions.addEventListener('change', updateViewSize).remove();
    };
  }, [width, updateViewSize]);

  return (
    <Pressable
      mx="auto"
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      sx={{ _web: { cursor: 'initial' } }}
    >
      <HStack
        h={viewSize.height}
        w={viewSize.width}
        justifyContent="center"
        position="relative"
        py="$8"
      >
        <Image
          width="$full"
          source={{ uri: ImageSrc[activeImage] }}
          resizeMode="cover"
        />

        <HStack position="absolute" bottom={50} space={'sm'}>
          {ImageSrc.map((src: string, index: number) => {
            return (
              <Box
                key={src}
                style={{ opacity: activeImage === index ? 1 : 0.24 }}
                bg="$white"
                width={8}
                height={8}
                borderRadius="$full"
              />
            );
          })}
        </HStack>

        {activeImage !== 0 && (
          <Pressable
            position="absolute"
            alignSelf="center"
            left={20}
            w={48}
            h={48}
            bg="$backgroundLight50"
            borderRadius="$full"
            justifyContent="center"
            alignItems="center"
            onPress={goToPrevious}
            onHoverIn={() => setIsHovered(true)}
            sx={{
              ':hover': { bg: '$backgroundLight100' },
              ':active': { bg: '$backgroundLight200' },
              '_dark': {
                'backgroundColor': '$backgroundDark950',
                ':hover': { bg: '$backgroundDark900' },
                ':active': { bg: '$backgroundDark800' },
              },

              '_web': {
                display: isHovered ? 'flex' : 'none',
              },
            }}
          >
            <Icon
              as={ChevronLeft}
              color="$black"
              sx={{ _dark: { color: '$white' } }}
            />
          </Pressable>
        )}

        {activeImage !== ImageSrc.length - 1 && (
          <Pressable
            position="absolute"
            alignSelf="center"
            right={20}
            w={48}
            h={48}
            bg="$backgroundLight50"
            borderRadius="$full"
            justifyContent="center"
            alignItems="center"
            sx={{
              ':hover': { bg: '$backgroundLight100' },
              ':active': { bg: '$backgroundLight200' },
              '_dark': {
                'backgroundColor': '$backgroundDark950',
                ':hover': { bg: '$backgroundDark900' },
                ':active': { bg: '$backgroundDark800' },
              },
              '_web': {
                display: isHovered ? 'flex' : 'none',
              },
            }}
            onPress={goToNext}
            onHoverIn={() => setIsHovered(true)}
          >
            <Icon
              as={ChevronRight}
              color="$black"
              sx={{ _dark: { color: '$white' } }}
            />
          </Pressable>
        )}
      </HStack>
    </Pressable>
  );
};

export default GalleryWithCarousel;
