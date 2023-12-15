import React from 'react';
import {
  HStack,
  Box,
  VStack,
  Text,
  Heading,
  GluestackUIProvider,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { View, Text as RNText } from 'react-native';
import { GluestackUILogo } from '@/brandAssets/GluestackLogo';

function splitStringAtNumberStart(str: string) {
  const regex = /(\D+)(\d+)/;
  const match = str.match(regex);
  if (match) {
    const [, stringPart, numberPart] = match;
    return [stringPart, numberPart];
  }
  return [str];
}

function convertColors(colors: any) {
  const convertedColors: any = {};

  Object.entries(colors).map(([key, value]) => {
    if (key.includes('alpha')) {
      return;
    }

    const [color, hue] = splitStringAtNumberStart(key);

    if (convertedColors[color]) {
      convertedColors[color][key] = value;
    } else {
      if (hue) {
        convertedColors[color] = {};
      } else {
        convertedColors[color] = value;
      }
    }
  });

  return convertedColors;
}

const Colors = ({ ...props }: any) => {
  let colors = config.tokens.colors;

  const colorMap = convertColors(colors);

  return (
    <GluestackUIProvider config={config}>
      <VStack width='$full' justifyContent={'center'} space='xl'>
        <View style={{ backgroundColor: '#000' }}>
          <View style={{ padding: 48, gap: 22 }}>
            {/* @ts-ignore */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* @ts-ignore */}
              <RNText
                style={{
                  fontSize: 48,
                  fontWeight: 700,
                  lineHeight: 90,
                  color: '#F5F5F5',
                }}
              >
                COLORS
              </RNText>
              {/* @ts-ignore */}
              <GluestackUILogo />
            </View>
            {/* @ts-ignore */}
            <RNText
              style={{
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 32,
                color: '#DBDBDB',
                width: 800,
              }}
            >
              Color palette consists of a large choice of colors, including
              their extended palettes, each addressing a specific context.
            </RNText>
          </View>
        </View>
        <VStack
          p={48}
          space='lg'
          // @ts-ignore
          dataSet={{
            'component-props': JSON.stringify({
              name: 'Colors',
              colors: colors,
            }),
          }}
        >
          {Object.keys(colorMap).map((colorFamily: any) => {
            const [colorName, _hue] = splitStringAtNumberStart(colorFamily);

            if (typeof colorMap[colorFamily] === 'string') {
              const colorToken = '$' + colorFamily;
              return (
                <HStack alignItems='center'>
                  <Text size='xs' w={180} fontWeight='$bold'>
                    {colorFamily}
                  </Text>
                  <Box h={50} w={100} bg={colorToken} />
                </HStack>
              );
            } else {
              return (
                <HStack alignItems='center'>
                  <Text size='xs' w={180} fontWeight='$bold' pb='$5'>
                    {colorName}
                  </Text>
                  {Object.keys(colorMap[colorFamily]).map((color: any) => {
                    const [_colorName, hue] = splitStringAtNumberStart(color);

                    const colorToken = '$' + color;
                    return (
                      <VStack alignItems='center'>
                        <Box h={50} w={100} bg={colorToken} />
                        <Text size='xs' fontWeight='$bold'>
                          {hue}
                        </Text>
                      </VStack>
                    );
                  })}
                </HStack>
              );
            }
          })}
        </VStack>
      </VStack>
    </GluestackUIProvider>
  );
};

export default Colors;
