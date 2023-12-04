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
} from '@gluestack-ui/themed';

const MainCard = () => {
  const toast = useToast();

  const handleSkip = () => {};
  const handleDownload = () => {
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <Toast.Title>Downloaded Successfully!</Toast.Title>
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
      bg="$white"
      sx={{
        '_dark': { bg: '$backgroundDark950' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '@md': { w: 700, p: '$6', mx: '$auto' },
      }}
    >
      <Box>
        <Heading m="$0" fontWeight="$normal">
          Updates Available
        </Heading>
        <Text size="sm" fontWeight="$light">
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

const CardWithTwoButtons = () => {
  return <MainCard />;
};

export default CardWithTwoButtons;
