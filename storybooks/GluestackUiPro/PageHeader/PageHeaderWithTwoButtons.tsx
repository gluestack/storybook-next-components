import React from 'react';

import { HStack, Box, Text, Button, ButtonText } from '@gluestack-ui/themed';

const PageHeaderWithTwoButtons = () => {
  return (
    <Box
      bg="$backgroundlight0"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <Box
        mx="auto"
        maxWidth={1280}
        flexDirection="column"
        pt="$8"
        pb="$24"
        px="$4"
        w="$full"
        sx={{
          '@md': {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '$8',
          },
        }}
      >
        <Box>
          <Text
            color="$textDark900"
            size="3xl"
            fontWeight="$medium"
            sx={{
              _dark: {
                color: '$text100',
              },
            }}
          >
            Member overview
          </Text>
          <Text
            fontSize="$md"
            color="$muted700"
            fontWeight="$light"
            sx={{
              _dark: {
                color: '$text100',
              },
            }}
          >
            All registered users in the overview
          </Text>
        </Box>
        <Box>
          <HStack
            mt="$4"
            space="sm"
            justifyContent="flex-start"
            sx={{
              '@md': {
                justifyContent: 'flex-end',
                mt: '$0',
              },
            }}
          >
            <Button variant="outline" action="secondary">
              <ButtonText fontSize="$md">Invite</ButtonText>
            </Button>
            <Button>
              <ButtonText fontSize="$md">Create</ButtonText>
            </Button>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};

export default PageHeaderWithTwoButtons;
