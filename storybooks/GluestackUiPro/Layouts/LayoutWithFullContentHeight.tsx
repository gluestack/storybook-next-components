import React, { FC } from 'react';
import { Box, VStack, Text } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';

const LayoutWithFullContentHeight: FC = () => {
  return (
    <ScrollView>
      <Box bg="$primary500" py="$4" px="$8">
        <Text
          px="$4"
          py="$3"
          color="$textLight0"
          sx={{
            '@lg': {
              mx: '$16',
            },
          }}
        >
          Navigation
        </Text>
      </Box>
      <VStack
        py="$16"
        px="$8"
        sx={{
          '@xs': {
            px: '$4',
          },
          '@lg': {
            flexDirection: 'row',
            mx: '$16',
          },
        }}
      >
        <Box bg="$primary500" minHeight={512} px="$4" py="$3" flex={1}>
          <Text px="$4" py="$3" color="$textLight0">
            Main
          </Text>
        </Box>
      </VStack>

      <Box bg="$primary500" px="$8" py="$4">
        <Text
          px="$4"
          py="$3"
          color="$textLight0"
          sx={{
            '@lg': {
              mx: '$16',
            },
          }}
        >
          Footer
        </Text>
      </Box>
    </ScrollView>
  );
};

export default LayoutWithFullContentHeight;
