import React from 'react';
import {
  Button,
  HStack,
  Badge,
  Text,
  VStack,
  Avatar,
  AvatarImage,
  BadgeText,
  ButtonText,
} from '@gluestack-ui/themed';

const CardHeaderWithAvatar = () => {
  const userData = [
    {
      name: 'Christoph Winston',
      email: 'chris@chakra-ui.com',
      isVerified: true,
      uri: 'https://tinyurl.com/yhkm2ek8',
      fallbackSource:
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    },
  ];

  const handleContact = () => {
    // console.log('Card Header Avatar Contact Button Pressed');
  };
  const handleMore = () => {
    // console.log('Card Header Avatar More Button Pressed');
  };
  return (
    <VStack>
      {userData.map((user) => {
        return (
          <VStack
            m="$4"
            justifyContent="space-between"
            alignItems="flex-start"
            bg="$backgroundLight0"
            p="$6"
            rounded="$lg"
            space="md"
            sx={{
              '_dark': {
                bg: '$backgroundDark950',
              },
              '@sm': {
                m: '$8',
                flexDirection: 'row',
              },
              'shadowColor': '$backgroundLight800',
              // @ts-ignore
              'shadowOffset': {
                width: 0,
                height: 1,
              },
              'shadowOpacity': 0.22,
              'shadowRadius': 2.22,
              'elevation': 3,
            }}
          >
            <HStack space="md">
              <Avatar size="lg">
                <AvatarImage
                  source={{
                    uri: user.uri,
                  }}
                  // @ts-ignore
                  fallbackSource={{
                    uri: user.fallbackSource,
                  }}
                />
              </Avatar>
              <VStack space="xs" p="$1" flex={1}>
                <HStack space="sm">
                  <Text size="xl">{user.name}</Text>
                  {user.isVerified && (
                    <Badge>
                      <BadgeText>Verified</BadgeText>
                    </Badge>
                  )}
                </HStack>
                <Text
                  color="$textLight400"
                  sx={{ _dark: { color: '$textDark400' } }}
                >
                  {user.email}
                </Text>
              </VStack>
            </HStack>
            <HStack space="md">
              <Button
                variant="outline"
                action="secondary"
                onPress={handleContact}
              >
                <ButtonText>Contact</ButtonText>
              </Button>
              <Button onPress={handleMore}>
                <ButtonText>More</ButtonText>
              </Button>
            </HStack>
          </VStack>
        );
      })}
    </VStack>
  );
};

export default CardHeaderWithAvatar;
