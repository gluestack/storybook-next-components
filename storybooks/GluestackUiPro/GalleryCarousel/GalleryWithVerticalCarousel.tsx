import React, { useCallback, useEffect, useState } from 'react';
import { HStack, Image, Icon, Pressable, VStack } from '@gluestack-ui/themed';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Dimensions, LayoutChangeEvent } from 'react-native';

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

const GalleryWithVerticalCarousel: React.FC = () => {
  const [activeImage, setActiveImage] = useState<number>(0);
  const [noOfImages, setNoOfImages] = useState<number>(5);
  const [activeFrame, setActiveFrame] = useState<number>(0);
  const [viewSize, setViewSize] = useState<ViewSize>({ width: 0, height: 0 });
  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');
  const [carousalImageSize, setCarousalImageSize] =
    useState<number | undefined>();

  const handleLayoutStack = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;

    if (carousalImageSize) {
      if (carousalImageSize * noOfImages + 16 * (noOfImages - 1) >= width) {
        setNoOfImages((prev) => prev - 1);
      } else if (
        carousalImageSize * (noOfImages + 1) + 16 * (noOfImages + 1) <
        width
      ) {
        setNoOfImages((prev) => prev + 1);
      }
    }
  };

  const handleLayoutImage = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setCarousalImageSize(width);
  };

  const updateViewSize = useCallback(() => {
    const maxSize = Math.min(windowWidth, windowHeight);
    if (windowWidth > windowHeight) {
      setNoOfImages(5);
    }
    setViewSize({ width: maxSize, height: maxSize });
  }, [windowWidth, windowHeight]);

  useEffect(() => {
    updateViewSize();
    Dimensions.addEventListener('change', updateViewSize);
    return () => Dimensions.addEventListener('change', updateViewSize).remove();
  }, [windowWidth, updateViewSize]);

  const handlePrev = () => {
    if (activeFrame !== 0) {
      setActiveFrame((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (activeFrame + noOfImages !== ImageSrc.length) {
      setActiveFrame((prev) => prev + 1);
    }
  };
  return (
    <VStack
      mx="auto"
      space="xl"
      justifyContent="center"
      h={viewSize.height}
      w={viewSize.width}
      p="$8"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@md': {
          flexDirection: 'row-reverse',
        },
      }}
    >
      <Image
        source={{ uri: ImageSrc[activeImage] }}
        resizeMode="cover"
        flex={1}
      />
      <HStack
        space="md"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          '@md': {
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Pressable
          opacity={activeFrame === 0 ? 0.4 : 1}
          onPress={handlePrev}
          sx={{
            '@md': {
              transform: [{ rotate: '90deg' }],
            },
          }}
        >
          <Icon
            as={ChevronLeft}
            color={'$black'}
            sx={{ _dark: { color: '$white' } }}
          />
        </Pressable>
        <HStack
          onLayout={handleLayoutStack}
          overflow="hidden"
          flex={1}
          justifyContent="center"
          sx={{
            '@md': {
              flexDirection: 'column',
            },
          }}
        >
          {ImageSrc.slice(0 + activeFrame, noOfImages + activeFrame).map(
            (src: string, index: number) => {
              const imageSize = viewSize.width * 0.12;
              return (
                <Pressable
                  onLayout={handleLayoutImage}
                  key={index}
                  mx="$2"
                  my="$4"
                  sx={{
                    ':hover': { opacity: 1 },
                    '@md': { my: '$2', mx: '$4' },
                  }}
                  w={imageSize}
                  h={imageSize}
                  opacity={activeImage === activeFrame + index ? 1 : 0.3}
                  onPress={() => setActiveImage(activeFrame + index)}
                >
                  <Image
                    height={'$full'}
                    source={{ uri: src }}
                    resizeMode="cover"
                  />
                </Pressable>
              );
            }
          )}
        </HStack>
        <Pressable
          opacity={activeFrame + noOfImages === ImageSrc.length ? 0.4 : 1}
          onPress={handleNext}
          sx={{
            '@md': {
              transform: [{ rotate: '90deg' }],
            },
          }}
        >
          <Icon
            as={ChevronRight}
            color={'$black'}
            sx={{ _dark: { color: '$white' } }}
          />
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default GalleryWithVerticalCarousel;
