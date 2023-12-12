import React from 'react';
import { Box, Button, ButtonIcon, Divider, HStack } from '@gluestack-ui/themed';
import { BoldIcon, ItalicIcon, StrikethroughIcon } from 'lucide-react-native';

const DividerWithIconGroup = (_props: any) => {
  const handleBold = () => {};
  const handleItalic = () => {};
  const handleStrikethrough = () => {};

  return (
    <Box alignItems="center" justifyContent="center" pt="$8" px="$12">
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
            onPress={handleBold}
            action="secondary"
            variant="outline"
            borderWidth="$0"
            borderTopRightRadius="$none"
            borderBottomRightRadius="$none"
            borderTopLeftRadius="$md"
            borderBottomLeftRadius="$md"
            px="$4"
          >
            <ButtonIcon as={BoldIcon} />
          </Button>
          <Divider orientation="vertical" w={1.5} />
          <Button
            action="secondary"
            variant="outline"
            onPress={handleItalic}
            borderWidth="$0"
            borderRadius="$none"
            px="$4"
          >
            <ButtonIcon as={ItalicIcon} w="$4" />
          </Button>
          <Divider orientation="vertical" w={1.5} />
          <Button
            action="secondary"
            variant="outline"
            onPress={handleStrikethrough}
            borderWidth="$0"
            borderTopRightRadius="$md"
            borderBottomRightRadius="$md"
            borderTopLeftRadius="$none"
            borderBottomLeftRadius="$none"
            px="$4"
          >
            <ButtonIcon as={StrikethroughIcon} />
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

export default DividerWithIconGroup;
