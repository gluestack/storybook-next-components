import React from 'react';

import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Button,
  Icon,
  useToast,
  Toast,
  ToastTitle,
  ButtonText,
} from '@gluestack-ui/themed';
import { FileText } from 'lucide-react-native';

const FILE_DATA = [
  {
    file_name: 'Invoice_04/2023.pdf',
    file_size: '1.2TB',
  },
];

const DownloadItem = ({ data }: any) => {
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
  const handleView = () => {};
  return (
    <VStack
      space="md"
      justifyContent="space-between"
      sx={{
        '@md': {
          flexDirection: 'row',
          p: '$3.5',
          borderWidth: '$1',
          borderColor: '$borderDark100',
          rounded: '$lg',
          _dark: {
            borderColor: '$borderDark700',
          },
        },
      }}
    >
      <HStack
        sx={{
          '@base': { mb: '$2' },
          '@md': {
            mb: '$0',
          },
        }}
        alignItems="center"
        space="md"
      >
        <Icon
          as={FileText}
          size="lg"
          p="$2"
          rounded="$lg"
          color="$textLight900"
          sx={{
            _dark: {
              color: '$backgroundLight0',
            },
          }}
        />
        <VStack>
          <Text fontSize="$sm" fontWeight="$medium">
            {data.file_name}
          </Text>
          <Text fontSize="$sm" fontWeight="$light">
            {data.file_size}
          </Text>
        </VStack>
      </HStack>

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
          onPress={() => handleDownload()}
        >
          <ButtonText fontWeight="$semibold">Download</ButtonText>
        </Button>
        <Button
          variant="solid"
          sx={{
            '@md': {
              ml: '$3',
            },
          }}
          onPress={() => handleView()}
        >
          <ButtonText fontWeight="$semibold">View</ButtonText>
        </Button>
      </VStack>
    </VStack>
  );
};

const MainCard = () => {
  return (
    <VStack
      m="$4"
      rounded="$lg"
      space="md"
      bg="$backgroundLight0"
      p="$6"
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
        <Heading fontSize="$lg" m="$0" fontWeight="$medium">
          Invoice
        </Heading>
        <Text
          mt="$0.5"
          sx={{ _dark: { color: '$backgroundLight0' } }}
          fontSize="$sm"
          fontWeight="$light"
          color="$gray600"
        >
          Please pay the outstanding amount by the end of the following month.
        </Text>
      </Box>
      {FILE_DATA.map((data) => (
        <DownloadItem data={data} />
      ))}
    </VStack>
  );
};

const CardWithDownloadItem = () => {
  return <MainCard />;
};

export default CardWithDownloadItem;
