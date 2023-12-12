import React, { useState, FC } from 'react';
import {
  Box,
  Divider,
  Heading,
  Text,
  VStack,
  Radio,
  RadioGroup,
} from '@gluestack-ui/themed';

type ListProps = {
  item: string;
  index: number;
  selectedButton: string;
};

const data = ['Engineering', 'Sales', 'Marketing'];

const RadioButton: FC<ListProps> = ({ item, index, selectedButton }) => {
  return (
    <Radio
      px="$3"
      py="$2"
      justifyContent="center"
      alignItems="center"
      borderTopLeftRadius={index === 0 ? '$lg' : '$none'}
      borderBottomLeftRadius={index === 0 ? '$lg' : '$none'}
      borderTopRightRadius={index === data.length - 1 ? '$lg' : '$none'}
      borderBottomRightRadius={index === data.length - 1 ? '$lg' : '$none'}
      bg={
        selectedButton === data[index] ? '$backgroundLight100' : 'transparent'
      }
      sx={{
        ':hover': {
          bg:
            selectedButton === data[index]
              ? '$backgroundLight200'
              : '$backgroundLight50',
        },
        '_dark': {
          'bg':
            selectedButton === data[index]
              ? '$backgroundDark800'
              : 'transparent',
          ':hover': {
            bg:
              selectedButton === data[index]
                ? '$backgroundDark700'
                : '$backgroundDark900',
          },
        },
      }}
      value={data[index]}
      accessibilityLabel="Radio"
      onChange={() => {}}
    >
      <Text fontSize="$sm" fontWeight="$medium">
        {item}
      </Text>
    </Radio>
  );
};

const RadioButtonGroup: FC = () => {
  const [selectedButton, setSelectedButton] = useState(data[0]);

  return (
    <RadioGroup
      flexDirection="row"
      value={selectedButton}
      onChange={setSelectedButton}
      alignSelf="flex-start"
    >
      {data.map((item, index) => (
        <RadioButton
          key={index}
          item={item}
          index={index}
          selectedButton={selectedButton}
        />
      ))}
    </RadioGroup>
  );
};

const SectionHeaderWithFilterButton: FC = (_props: any) => {
  return (
    <Box
      p="$4"
      pb="$12"
      width="$full"
      alignSelf="center"
      bg="$backgroundLight0"
      sx={{
        '@md': {
          p: '$8',
          pb: '$24',
        },
        '@xl': {
          maxWidth: 1280,
        },
        '_dark': {
          bg: '$backgroundLight950',
        },
      }}
    >
      <VStack
        space="md"
        sx={{
          '@sm': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <VStack>
          <Heading fontWeight="$medium" fontSize="$lg">
            Member Profile
          </Heading>
          <Text fontSize="$sm">View of all logged-in users</Text>
        </VStack>
        <RadioButtonGroup />
      </VStack>
      <Divider mt="$5" />
    </Box>
  );
};

export default SectionHeaderWithFilterButton;
