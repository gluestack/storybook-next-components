import React from 'react';
import { Box, Divider, HStack, Text } from '@gluestack-ui/themed';

const DividerWithText = (_props: any) => {
  return (
    <Box alignItems="center" justifyContent="center" pt="$8" px="$12">
      <HStack
        w="$full"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Divider
          flex={1}
          bg="$orange800"
          h={1}
          sx={{
            _dark: { bg: '$orange300' },
          }}
        />
        <Text
          size="sm"
          px="$1"
          color="$orange800"
          sx={{
            _dark: { color: '$orange300' },
          }}
        >
          5 mins read
        </Text>
        <Divider
          flex={1}
          bg="$orange800"
          h={1}
          sx={{
            _dark: { bg: '$orange300' },
          }}
        />
      </HStack>
    </Box>
  );
};

export default DividerWithText;
