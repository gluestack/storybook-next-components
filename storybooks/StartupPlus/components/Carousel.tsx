import React from 'react';
import {
  HStack,
  Image,
  Center,
  VStack,
  Pressable,
  ScrollView,
} from '@gluestack-ui/themed';
import type { ImageSourcePropType } from 'react-native';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Platform,
} from 'react-native';
type Carousel = {
  images: ImageSourcePropType[];
  height: any;
  activeIndicatorBgColor: string;
  inactiveIndicatorBgColor: string;
};

export function Carousel({
  images,
  height,
  activeIndicatorBgColor,
  inactiveIndicatorBgColor,
}: Carousel) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const ref = React.useRef<typeof ScrollView | null>(null);

  React.useEffect(() => {
    if (containerWidth)
      ref.current?.scrollTo({ x: activeIndex * containerWidth });
  }, [activeIndex, containerWidth]);

  const timeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (containerWidth) {
      if (timeout && timeout.current) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        const nextActiveIndex = Math.round(
          e.nativeEvent.contentOffset.x / containerWidth
        );
        if (nextActiveIndex !== activeIndex) {
          setActiveIndex(nextActiveIndex);
        } else {
          ref.current?.scrollTo({ x: activeIndex * containerWidth });
        }
      }, 50);
    }
  };

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextActiveIndex = Math.round(
      e.nativeEvent.contentOffset.x / containerWidth
    );
    if (activeIndex !== nextActiveIndex) {
      setActiveIndex(nextActiveIndex);
      return nextActiveIndex;
    }
    return;
  };

  return (
    <VStack
      flex={1}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
        ref={ref}
        onScroll={Platform.OS === 'web' ? onScroll : undefined}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        pagingEnabled={Platform.OS !== 'web'}
      >
        {images.map((image, idx) => {
          return (
            <Image
              key={idx}
              alt="advertisements"
              height={height}
              width={containerWidth}
              source={image}
            />
          );
        })}
      </ScrollView>
      <Center mt="$4">
        <HStack space="xs">
          {images.map((_image, index) => {
            return (
              <Pressable onPress={() => setActiveIndex(index)} key={index}>
                <Center
                  p="$1"
                  rounded="$full"
                  sx={{
                    _light: {
                      bg:
                        index === activeIndex
                          ? activeIndicatorBgColor
                          : inactiveIndicatorBgColor,
                    },
                    _dark: {
                      bg:
                        index === activeIndex
                          ? activeIndicatorBgColor
                          : inactiveIndicatorBgColor,
                    },
                  }}
                />
              </Pressable>
            );
          })}
        </HStack>
      </Center>
    </VStack>
  );
}
