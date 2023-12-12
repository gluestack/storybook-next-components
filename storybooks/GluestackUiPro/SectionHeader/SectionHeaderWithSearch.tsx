import React, { useState, FC } from 'react';
import { SearchIcon } from 'lucide-react-native';
import {
  Box,
  Divider,
  Icon,
  Input,
  Text,
  VStack,
  Heading,
  InputIcon,
  InputField,
  InputSlot,
} from '@gluestack-ui/themed';

const SectionHeaderWithSearch: FC = (_props: any) => {
  const [searchText, setSearchText] = useState('');

  const handleKeyPress = () => {};

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
        <Input
          alignSelf="flex-start"
          width="$full"
          sx={{
            '@sm': {
              w: '$80',
            },
          }}
        >
          <InputSlot>
            <InputIcon
              as={SearchIcon}
              color="$textLight400"
              sx={{
                _dark: {
                  color: '$textDark400',
                },
              }}
              pl="$3"
            />
          </InputSlot>
          <InputField
            type="text"
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={handleKeyPress}
            returnKeyType="done"
          />
        </Input>
      </VStack>
      <Divider mt="$5" />
    </Box>
  );
};

export default SectionHeaderWithSearch;
