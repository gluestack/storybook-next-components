import React from 'react';
import {
  Button,
  HStack,
  Icon,
  Text,
  VStack,
  MessageCircleIcon,
  CloseIcon,
  Heading,
  Center,
  useToast,
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
        },
        '_dark': { bg: '$backgroundDark950' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$20',
        'shadowRadius': '$3',
        'elevation': '$20',
      }}
    >
      <VStack
        p="$4"
        display="none"
        sx={{ '@sm': { display: 'flex' } }}
        bg="$primary600"
        alignItems="center"
        justifyContent="center"
        borderTopLeftRadius="$lg"
        borderBottomLeftRadius="$lg"
        px="$5"
      >
        <Icon w={40} h={40} color="#fff" as={MessageCircleIcon} />
      </VStack>
      {/* <HStack> */}
      <VStack
        sx={{ '@sm': { w: 345 } }}
        p="$4"
        space="xs"
        flex={1}
        justifyContent="space-between"
      >
        <Heading size="xs" fontWeight="$medium">
          Updates Available
        </Heading>
        <Text
          sx={{ _dark: { color: '$textDark300' } }}
          color="$text600"
          size="sm"
          fontWeight="$light"
        >
          Hoorray. A new version is available.
        </Text>
        <ButtonGroup mt="$1">
          <Button size="sm" px="$0" py="$0" variant="link" action="secondary">
            <ButtonText textDecorationLine="none" fontWeight="$semibold">
              Skip
            </ButtonText>
          </Button>
          <Button px="$0" py="$0" size="sm" variant="link" ml="$3">
            <ButtonText textDecorationLine="none" fontWeight="$semibold">
              Update
            </ButtonText>
          </Button>
        </ButtonGroup>
      </VStack>

      <Button
        size="sm"
        variant="link"
        action="secondary"
        onPress={() => handleClose()}
        px="$0"
        py="$0"
        m="$4"
      >
        <Icon
          sx={{ _dark: { color: '$backgroundLight0' } }}
          color="$backgroundDark950"
          size="sm"
          alignSelf="flex-start"
          as={CloseIcon}
        />
      </Button>
    </HStack>
  );
};

const NotificationMain = () => {
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

export const NotificationsWithTwoLinksAndIcon = () => {
  return <NotificationMain />;
};
