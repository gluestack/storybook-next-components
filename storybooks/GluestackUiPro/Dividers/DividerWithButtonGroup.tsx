import React from 'react';
import {
  Box,
  Divider,
  Button,
  ButtonText,
  HStack,
  Text,
} from '@gluestack-ui/themed';

const DividerWithButtonGroup = (_props: any) => {
  const handleGithub = () => {};
  const handleTwitter = () => {};
  const handleDiscord = () => {};

  return (
    <Box alignItems="center" justifyContent="center" pt="$8" px='$12'>
      <HStack
        w="$full"
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
      >
        <Divider
          flex={1}
          bg="$trueGray300"
          h={1}
          sx={{
            _dark: { bg: '$orange300' },
          }}
        />
        <Box
          flexDirection="row"
          borderWidth={1}
          borderColor="$secondary200"
          borderRadius="$md"
          alignItems="center"
          sx={{
            _dark: { borderColor: '$trueGray600' },
          }}
        >
          <Button
            onPress={handleGithub}
            action="secondary"
            variant="outline"
            borderWidth="$0"
            borderTopRightRadius="$none"
            borderBottomRightRadius="$none"
            borderTopLeftRadius="$md"
            borderBottomLeftRadius="$md"
          >
            <ButtonText fontSize="$sm" lineHeight="$sm">
              GitHub
            </ButtonText>
          </Button>
          <Divider orientation="vertical" w={1.5} />
          <Button
            action="secondary"
            variant="outline"
            onPress={handleTwitter}
            borderWidth="$0"
            borderRadius="$none"
          >
            <ButtonText fontSize="$sm" lineHeight="$sm">
              Twitter
            </ButtonText>
          </Button>
          <Divider orientation="vertical" w={1.5} />
          <Button
            action="secondary"
            variant="outline"
            onPress={handleDiscord}
            borderWidth="$0"
            borderTopRightRadius="$md"
            borderBottomRightRadius="$md"
            borderTopLeftRadius="$none"
            borderBottomLeftRadius="$none"
          >
            <ButtonText fontSize="$sm" lineHeight="$sm">
              Discord
            </ButtonText>
          </Button>
        </Box>
        <Divider
          flex={1}
          bg="$trueGray300"
          h={1}
          sx={{
            _dark: { bg: '$orange300' },
          }}
        />
      </HStack>
    </Box>
  );
};

export default DividerWithButtonGroup;
