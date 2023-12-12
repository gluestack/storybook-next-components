import React, { useState } from 'react';

import { Button, ButtonText, HStack, Text, VStack } from '@gluestack-ui/themed';

const SIZES: number[] = [32, 34, 36, 40];

const SizePicker: React.FC = (_props: any) => {
  const [selectedSize, setSelectedSize] = useState<number>(32);

  const handleSizeSelection = (size: number) => {
    setSelectedSize(size);
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
        Size: {selectedSize}mm
      </Text>
      <HStack space="sm">
        {SIZES.map((size) => (
          <Button
            key={size.toString()}
            p="$3"
            variant="outline"
            bgColor={size === selectedSize ? '$primary0' : '$backgroundLight0'}
            borderColor={
              size === selectedSize ? '$primary500' : '$borderLight100'
            }
            sx={{
              _web: {
                outlineWidth: size === selectedSize ? '$0.5' : '$0',
                outlineStyle: 'solid',
                outlineColor:
                  size === selectedSize ? '$primary500' : '$borderLight100',
              },
              _dark: {
                bg:
                  size === selectedSize ? '$primary900' : '$backgroundDark950',
                borderColor:
                  size === selectedSize ? '$primary500' : '$borderLight100',
              },
            }}
            onPress={() => handleSizeSelection(size)}
          >
            <ButtonText
              color={size === selectedSize ? '$primary500' : '$borderLight700'}
              sx={{
                _dark: {
                  color:
                    size === selectedSize ? '$primary500' : '$borderDark300',
                },
              }}
            >
              {size}
            </ButtonText>
          </Button>
        ))}
      </HStack>
    </VStack>
  );
};

export default SizePicker;
