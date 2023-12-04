import React, { useState } from 'react';
import { Button, ButtonIcon, HStack, Text, VStack } from '@gluestack-ui/themed';
import { MinusIcon, PlusIcon } from 'lucide-react-native';

const LOWER_LIMIT = 0;
const UPPER_LIMIT = 5;
const DEFAULT_QUANTITY = 1;

const QuantityPicker: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(DEFAULT_QUANTITY);

  const quantityIncrement = () => {
    if (quantity < UPPER_LIMIT) {
      setQuantity(quantity + 1);
    }
  };

  const quantityDecrement = () => {
    if (quantity > LOWER_LIMIT) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <VStack
      space="sm"
      bg="$backgroundLight0"
      p="$8"
      sx={{
        '_dark': { bg: '$backgroundDark950' },
        '@md': { p: '$16' },
      }}
    >
      <Text fontWeight="$semibold" fontSize="$sm">
        Quantity
      </Text>
      <HStack
        width="$40"
        justifyContent="space-between"
        borderWidth="$1"
        borderColor="$borderLight300"
        borderRadius="$sm"
        p="$2"
        alignItems="center"
        sx={{
          _dark: {
            borderColor: '$borderDark700',
          },
        }}
      >
        <Button
          disabled={quantity === LOWER_LIMIT}
          onPress={quantityDecrement}
          size="xs"
          p="$2.5"
          action="secondary"
        >
          <ButtonIcon as={MinusIcon} />
        </Button>
        <Text fontWeight="$semibold">{quantity}</Text>
        <Button
          disabled={quantity === UPPER_LIMIT}
          onPress={quantityIncrement}
          size="xs"
          p="$2.5"
          action="secondary"
        >
          <ButtonIcon as={PlusIcon} />
        </Button>
      </HStack>
    </VStack>
  );
};

export default QuantityPicker;
