import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  useToast,
  Toast,
  ToastTitle,
  ButtonText,
} from '@gluestack-ui/themed';


const CardWithRightButton = (_props: any) => {
  const toast = useToast();

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
    <Box
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      p="$4"
      m="$4"
      rounded="$lg"
      sx={{
        '_light': { bg: '$backgroundLight100' },
        '_dark': { bg: '$backgroundDark800' },
        'shadowColor': '$backgroundDark800',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '@md': {
          flexDirection: 'row',
          mx: '$auto',
          p: '$6',
          width: 680,
        },
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
          mt="$1"
        >
          A new version is available. Please upgrade for the best experience.
        </Text>
      </Box>

      <Button mt="$5" sx={{ '@md': { mt: '$0' } }} onPress={handleDownload}>
        <ButtonText fontWeight="$semibold">Download</ButtonText>
      </Button>
    </Box>
  );
};

export default CardWithRightButton;
