import React, { FC } from 'react';

import { Box, VStack, Text, ScrollView } from '@gluestack-ui/themed';

const LayoutWithStickySidebar: FC = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
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
          Navigation
        </Text>
      </Box>
      <VStack
        flex={1}
        justifyContent="space-between"
        py="$16"
        px="$8"
        space="lg"
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
        <Box bg="$primary500" flex={0.9} minHeight={512} px="$4" py="$3">
          <Text px="$4" py="$3" color="$textLight0">
            Main
          </Text>
        </Box>
        <Box
          bg="$primary500"
          h={320}
          w="$full"
          sx={{
            '_web': {
              position: 'sticky',
              top: 142,
              right: 0,
            },
            '@lg': {
              w: '$1/4',
            },
          }}
        >
          <Text px="$4" py="$3" color="$textLight0">
            SideBar
          </Text>
        </Box>
      </VStack>
      <Box px="$8" py="$4" bg="$primary500">
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

export default LayoutWithStickySidebar;
