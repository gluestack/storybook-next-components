import React, { Children } from 'react';
import { HStack, Box, VStack, Text, Heading } from '../../components';
import { config } from '@/gluestack-ui.config';

const Colors = ({ ...props }: any) => {
  const colors = config.theme.tokens.colors;
  return (
    <Box
      width='$full'
      alignItems={'center'}
      justifyContent={'center'}
      p={3}
      mb={28}
    >
      <Heading>Theme Colors</Heading>
      {/* <div
        data-component-props={JSON.stringify({
          name: 'Colors',
          colors: colors,
        })}
      >
        <VStack space='lg'>
          {colors.map((color: any, key: number) => {
            let colorValues;
            if (typeof theme.colors[color] == 'string') {
              colorValues = theme.colors[color];

              return (
                <VStack
                  key={key}
                  h={24}
                  w={'100%'}
                  justifyContent='center'
                  alignItems='center'
                >
                  <Box bg={colorValues}></Box>
                  <Text fontSize={'$xs'}>{color}</Text>
                  <Text fontSize={'$xs'} color='gray.600'>
                    {colorValues}
                  </Text>
                </VStack>
              );
            } else {
              colorValues = Object.keys(theme.colors[color]);
              return (
                <HStack key={key}>
                  {colorValues.map((value: any, index: number) => {
                    return (
                      <VStack
                        key={index}
                        h={24}
                        w={24}
                        justifyContent='center'
                        alignItems='center'
                      >
                        <Box bg={theme.colors[color][value]}></Box>
                        <Text fontSize={'$xs'}>
                          {color}.{value}
                        </Text>
                        <Text fontSize={'$xs'} color='gray.600'>
                          {theme.colors[color][value]}
                        </Text>
                      </VStack>
                    );
                  })}
                </HStack>
              );
            }
          })}
        </VStack>
      </div> */}
    </Box>
  );
};

export default Colors;
