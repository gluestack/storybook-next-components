import React from 'react';
import { Box, Button, ButtonIcon, Divider } from '@gluestack-ui/themed';
import { BoldIcon, ItalicIcon, StrikethroughIcon } from 'lucide-react-native';

const DividerWithIconGroup = () => {
  const handleBold = () => {};
  const handleItalic = () => {};
  const handleStrikethrough = () => {};

  return (
    <Box alignItems="center" justifyContent="center" pt="$8">
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
    </Box>
  );
};

export default DividerWithIconGroup;
