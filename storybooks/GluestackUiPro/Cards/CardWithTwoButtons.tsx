import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Button,
  useToast,
  Toast,
  ButtonText,
  ToastTitle,
} from '@gluestack-ui/themed';


const CardWithTwoButtons = (_props: any) => {
  const toast = useToast();

  const handleSkip = () => {};
  const handleDownload = () => {
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <ToastTitle>Downloaded Successfully!</ToastTitle>
          </Toast>
        );
      },
    });
  };
  return (
    <VStack
      m="$4"
      p="$4"
      rounded="$xl"
      space="md"
      sx={{
        '_light': { bg: '$backgroundLight100' },
        '_dark': { bg: '$backgroundDark800' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '@md': { w: 700, p: '$6', mx: '$auto' },
      }}
    >
      <Box>
        <Heading
          m="$0"
          sx={{
            _light: { color: '$textLight900' },
            _dark: { color: '$textDark0' },
          }}
        >
          Updates Available
        </Heading>
        <Text
          size="sm"
          sx={{
            _light: { color: '$textLight400' },
            _dark: { color: '$textDark500' },
          }}
        >
          A new version is available. Please upgrade for the best experience.
        </Text>
      </Box>

      <VStack
        space="md"
        justifyContent="flex-start"
        sx={{
          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <Button
          variant="outline"
          action="secondary"
          sx={{ '@md': { mr: '$2' } }}
          onPress={handleSkip}
        >
          <ButtonText>Skip</ButtonText>
        </Button>
        <Button onPress={handleDownload}>
          <ButtonText>Download</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};

export default CardWithTwoButtons;
