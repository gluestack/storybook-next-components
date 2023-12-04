import React from 'react';
import { Text, VStack, Heading } from '@gluestack-ui/themed';

const CardHeaderWithDescription = () => {
  return (
    <VStack
      m="$4"
      bg="$backgroundLight0"
      p="$6"
      rounded="$lg"
      space="xs"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@md': {
          m: '$8',
        },
        'shadowColor': '$backgroundLight800',
        // @ts-ignore
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 2.22,
        'elevation': 3,
      }}
    >
      <Heading fontWeight="normal">Member Overview</Heading>
      <Text size="sm" color="$textLight500">
        All registered users in the overview
      </Text>
    </VStack>
  );
};

export default CardHeaderWithDescription;
