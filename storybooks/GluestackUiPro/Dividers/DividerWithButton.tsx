import React from 'react';
import {
  ChevronDownIcon,
  Button,
  Divider,
  HStack,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';

const DividerWithButton = () => {
  const handleCreate = () => {};
  return (
    <HStack
      pt="$8"
      w="$full"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <Divider />
      <Button
        variant="outline"
        action="secondary"
        onPress={handleCreate}
        borderRadius="$full"
      >
        <ButtonText
          fontWeight="$semibold"
          fontSize="$sm"
          lineHeight="$sm"
          fontStyle="normal"
        >
          Friday, 30 August
        </ButtonText>
        <ButtonIcon
          as={ChevronDownIcon}
          ml="$2"
          w="$3"
          h="$3"
          color="$secondary700"
          sx={{
            _dark: { color: '$secondary300' },
          }}
        />
      </Button>
      <Divider />
    </HStack>
  );
};

export default DividerWithButton;
