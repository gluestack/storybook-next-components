import React from 'react';
import {
  Button,
  Text,
  VStack,
  Heading,
  ButtonText,
} from '@gluestack-ui/themed';

const CardHeaderAccentWithButton = () => {
  const handleInvite = () => {
    // console.log('Card Header Invite Button Pressed');
  };
  return (
    <VStack
      m="$4"
      alignItems="flex-start"
      justifyContent="space-between"
      bg="$backgroundLight0"
      p="$6"
      space="md"
      borderTopWidth="$4"
      borderTopColor="$primary500"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@sm': {
          m: '$8',
          flexDirection: 'row',
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
      <VStack space="xs">
        <Heading fontWeight="normal">Member Overview</Heading>
        <Text size="sm" color="$textLight500">
          All registered users in the overview
        </Text>
      </VStack>
      <Button onPress={handleInvite}>
        <ButtonText>Invite</ButtonText>
      </Button>
    </VStack>
  );
};

export default CardHeaderAccentWithButton;
