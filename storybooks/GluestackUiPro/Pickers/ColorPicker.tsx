import React, { useState } from 'react';
import { CheckIcon } from 'lucide-react-native';
import {
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
  Box,
} from '@gluestack-ui/themed';

interface ColorType {
  label: string;
  color: string;
}

const colors: ColorType[] = [
  {
    label: 'Blue',
    color: 'blue500',
  },
  {
    label: 'Yellow',
    color: 'yellow500',
  },
  {
    label: 'Red',
    color: 'red500',
  },
];

const ColorPicker: React.FC = (_props: any) => {
  const [selectedColor, setSelectedColor] =
    useState<ColorType | undefined>(undefined);

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
        Color: {selectedColor?.label}
      </Text>
      <HStack space="sm" alignItems="center">
        {colors.map((color) => (
          <Pressable
            borderRadius="$full"
            p={color.color === selectedColor?.color ? 1.5 : 2}
            borderWidth={color.color === selectedColor?.color ? 2 : 1.5}
            borderColor={
              color.color === selectedColor?.color
                ? '$primary500'
                : '$backgroundLight300'
            }
            onPress={() => setSelectedColor(color)}
          >
            <Box
              id={color.color.toString()}
              width="$8"
              height="$8"
              justifyContent="center"
              alignItems="center"
              bgColor={`$${color.color}`}
              borderRadius="$full"
            >
              {color.color === selectedColor?.color && <Icon as={CheckIcon} />}
            </Box>
          </Pressable>
        ))}
      </HStack>
    </VStack>
  );
};

export default ColorPicker;
