import React from 'react';
import { HStack, Box, VStack, Text, Heading } from '@/components';
import { config } from '@/components/gluestack-ui.config';

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
  let colors = config.theme.tokens.colors;

  const colorMap = convertColors(colors);

  console.log(colorMap);

  return (
    <VStack
      width='$full'
      alignItems={'center'}
      justifyContent={'center'}
      p={3}
      my={28}
      space='xl'
    >
      <Heading>Theme Colors</Heading>
      <div
        data-component-props={JSON.stringify({
          name: 'Colors',
          colors: colors,
        })}
      >
        <VStack space='lg'>
          {Object.keys(colorMap).map((colorFamily: any) => {
            if (typeof colorMap[colorFamily] === 'string') {
              const colorToken = '$' + colorFamily;
              return (
                <VStack>
                  <Box h={50} w={100} bg={colorToken} />
                  {/* <Text size='xs'>{colorToken}</Text> */}
                </VStack>
              );
            } else {
              return (
                <HStack>
                  {Object.keys(colorMap[colorFamily]).map((color: any) => {
                    const colorToken = '$' + color;
                    return (
                      <VStack>
                        <Box h={50} w={100} bg={colorToken} />
                        {/* <Text size='xs'>{colorToken}</Text> */}
                      </VStack>
                    );
                  })}
                </HStack>
              );
            }
          })}
        </VStack>
      </div>
    </VStack>
  );
};

export default Colors;
