import React from 'react';
import {
  Button,
  HStack,
  Icon,
  Text,
  VStack,
  Heading,
  MessageCircleIcon,
  useToast,
  Center,
  ButtonGroup,
  ButtonText,
} from '@gluestack-ui/themed';

const Notification = ({ handleClose }: any) => {
  return (
    <HStack
      maxWidth={450}
      w={350}
      borderRadius="$lg"
      bg="$backgroundLight0"
      m="$4"
      sx={{
        '@md': {
          m: '$8',
          w: 'auto',
          flex: 1,
        },
        '_dark': { bg: '$backgroundDark950' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$20',
        'shadowRadius': '$3',
        'elevation': '$20',
      }}
    >
      <VStack
        display="none"
        sx={{ '@sm': { display: 'flex' } }}
        bg="$primary600"
        alignItems="center"
        justifyContent="center"
        borderTopLeftRadius="$lg"
        borderBottomLeftRadius="$lg"
        px="$5"
      >
        <Icon w={40} h={40} color="$backgroundLight0" as={MessageCircleIcon} />
      </VStack>
      <VStack space="xs" p="$4" flex={1} justifyContent="center">
        <Heading size="xs" fontWeight="$medium">
          Updates Available
        </Heading>
        <Text
          sx={{ _dark: { color: '$textDark300' } }}
          color="$text600"
          size="sm"
          fontWeight="$light"
        >
          A new version is available. Please upgrade for the best experience.
        </Text>
      </VStack>
      <ButtonGroup
        borderLeftWidth="$1"
        borderLeftColor="$borderDark200"
        sx={{ _dark: { borderLeftColor: '$borderLight800' } }}
        flexDirection="column"
        size="lg"
      >
        <Button
          borderBottomWidth="$1"
          borderBottomColor="$borderDark200"
          sx={{ _dark: { borderBottomColor: '$borderLight800' } }}
          borderRadius="$none"
          size="sm"
          flex={1}
          variant="link"
        >
          <ButtonText textDecorationLine="none" fontWeight="$semibold">
            Update
          </ButtonText>
        </Button>
        <Button
          borderRadius="$none"
          flex={1}
          variant="link"
          size="sm"
          action="secondary"
          onPress={() => handleClose()}
        >
          <ButtonText textDecorationLine="none" fontWeight="$semibold">
            Close
          </ButtonText>
        </Button>
      </ButtonGroup>
    </HStack>
  );
};

export const NotificationsWithSplitButtonsAndIcon = (_props: any) => {
  const toast = useToast();
  const id = 'test-toast';
  const handleClose = () => {
    toast.close(id);
  };
  const showToast = () => {
    if (!toast.isActive(id)) {
      toast.show({
        id,
        duration: null,
        placement: 'top right',
        render: () => {
          return <Notification handleClose={handleClose} />;
        },
      });
    }
  };

  return (
    <Center flex={1}>
      <Button onPress={() => showToast()} size="lg">
        <ButtonText>Tap for Notification</ButtonText>
      </Button>
    </Center>
  );
};
