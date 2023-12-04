import React from 'react';
import { Button, ButtonIcon, Divider, HStack } from '@gluestack-ui/themed';
import { EditIcon } from 'lucide-react-native';

const DividerIconButton = () => {
  const handleEdit = () => {};
  return (
    <HStack
      pt="$8"
      w="60%"
      alignItems="center"
      justifyContent="center"
      alignSelf="center"
      overflow="hidden"
    >
      <Divider
        bg="$primary500"
        sx={{
          _dark: { bg: '$primary400' },
        }}
      />

      <Button rounded="$full" px="$4" py="$6" onPress={handleEdit}>
        <ButtonIcon as={EditIcon} size="lg" color="$white" />
      </Button>

      <Divider
        bg="$primary500"
        sx={{
          _dark: { bg: '$primary400' },
        }}
      />
    </HStack>
  );
};

export default DividerIconButton;
