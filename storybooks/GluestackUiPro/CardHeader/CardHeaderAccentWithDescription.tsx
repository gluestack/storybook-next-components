import React from 'react';
import { Text, VStack, Heading } from '@gluestack-ui/themed';

const CardHeaderAccentWithDescription = (_props: any) => {
  return (
    <VStack
      m="$4"
      p="$6"
      space="xs"
      borderTopWidth="$4"
      sx={{
        '_light': { bg: '$backgroundLight100', borderTopColor: '$primary500' },
        '_dark': {
          bg: '$backgroundDark800',
          borderTopColor: '$primary500',
        },
        '@md': {
          m: '$8',
        },
        'shadowColor': '$backgroundLight800',
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 2.22,
        'elevation': 3,
      }}
    >
      <Heading
        sx={{
          _light: { color: '$textLight900' },
          _dark: { color: '$textDark0' },
        }}
      >
        Member Overview
      </Heading>
      <Text
        sx={{
          _light: { color: '$textLight400' },
          _dark: { color: '$textDark500' },
        }}
      >
        All registered users in the overview
      </Text>
    </VStack>
  );
};

export default CardHeaderAccentWithDescription;
