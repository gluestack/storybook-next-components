import React from 'react';
import {
  Button,
  HStack,
  Text,
  VStack,
  Heading,
  Avatar,
  useToast,
  Center,
  AvatarImage,
  AvatarFallbackText,
  ButtonText,
} from '@gluestack-ui/themed';

const USER = {
  name: 'Christoph Winston',
  msg: 'Hey buddy. You are awesome.',
  profile_link:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
};

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
      <HStack flex={1} alignItems="center" p="$4" sx={{ '@sm': { w: 345 } }}>
        <Avatar
          // display="none"
          sx={{ '@sm': { display: 'flex' } }}
          mr="$3"
          h="$10"
          w="$10"
        >
          <AvatarImage
            source={{
              uri: USER.profile_link,
            }}
          />
          <AvatarFallbackText> {USER.name}</AvatarFallbackText>
        </Avatar>
        <VStack flex={1}>
          <Heading size="xs" fontWeight="$medium">
            {USER.name}
          </Heading>
          <Text
            sx={{ _dark: { color: '$textDark300' } }}
            color="$text600"
            size="sm"
            fontWeight="$light"
          >
            {USER.msg}
          </Text>
        </VStack>
      </HStack>
      <Button
        size="sm"
        variant="link"
        borderLeftWidth="$1"
        borderLeftColor="$borderDark200"
        borderRadius="$none"
        sx={{ _dark: { borderLeftColor: '$borderLight800' } }}
        onPress={() => handleClose()}
      >
        <ButtonText textDecorationLine="none">Reply</ButtonText>
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

export const NotificationsWithAvatar = () => {
  return <NotificationMain />;
};
