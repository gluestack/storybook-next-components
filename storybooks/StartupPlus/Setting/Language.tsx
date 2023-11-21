import React from 'react';
import {
  Box,
  CircleIcon,
  HStack,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  Text,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

type Language = {
  id: number;
  name: string;
};

const languages: Language[] = [
  {
    id: 1,
    name: 'English',
  },
  {
    id: 2,
    name: 'Hindi',
  },
  {
    id: 3,
    name: 'Kannada',
  },
  {
    id: 4,
    name: 'Urdu',
  },
  {
    id: 5,
    name: 'Spanish',
  },
];

function LanguagOptionItem({ name }: Language) {
  return (
    <HStack py="$3" px="$4" w="$full">
      <Radio value={name}>
        <RadioIndicator w="$6" h="$6" mr="$2">
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <Text
          color="$textLight800"
          ml="$4"
          fontSize="$md"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
        >
          {name}
        </Text>
      </Radio>
    </HStack>
  );
}

export default function Language() {
  const [values, setValues] = React.useState('English');

  return (
    <DashboardLayout displaySidebar={true} title="Language Settings">
      <Box
        sx={{
          '@base': {
            py: '$3',
            px: '$0',
          },
          '@md': {
            py: '$5',
            px: '$4',
            rounded: '$sm',
          },
          '_light': {
            bg: '$backgroundLight0',
          },
          '_dark': {
            bg: '$backgroundDark800',
          },
        }}
      >
        <RadioGroup
          value={values}
          onChange={setValues}
          accessibilityLabel="Select Language"
        >
          {languages.map((language, index) => {
            return <LanguagOptionItem key={index} {...language} />;
          })}
        </RadioGroup>
      </Box>
    </DashboardLayout>
  );
}
