import React from 'react';
import {
  Button,
  Text,
  VStack,
  Heading,
  ButtonText,
} from '@gluestack-ui/themed';

const CardHeaderWithButton = (_props: any) => {
  const handleInvite = () => {
    // console.log('Card Header Invite Button Pressed');
  };
  return (
    <VStack
      m="$4"
      alignItems="flex-start"
      justifyContent="space-between"
      p="$6"
      rounded="$lg"
      space="md"
      sx={{
        '_light': { bg: '$backgroundLight100', borderTopColor: '$primary500' },
        '_dark': {
          bg: '$backgroundDark800',
          borderTopColor: '$primary400',
        },
        '@md': {
          m: '$8',
          flexDirection: 'row',
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
      <VStack space="xs">
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
      <Button onPress={handleInvite}>
        <ButtonText>Invite</ButtonText>
      </Button>
    </VStack>
  );
};

export default CardHeaderWithButton;
