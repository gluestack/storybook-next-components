import React, { FC } from 'react';
import {
  Box,
  Button,
  ButtonText,
  Divider,
  Heading,
  Text,
  VStack,
} from '@gluestack-ui/themed';

const SectionHeaderWithButton: FC = (_props: any) => {
  const handleCreate = () => {};

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
        <Button alignSelf="flex-start" onPress={handleCreate}>
          <ButtonText>Create</ButtonText>
        </Button>
      </VStack>
      <Divider mt="$5" />
    </Box>
  );
};

export default SectionHeaderWithButton;
