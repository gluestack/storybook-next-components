import React from 'react';
import {
  Button,
  HStack,
  Text,
  VStack,
  Badge,
  Avatar,
  AvatarImage,
  BadgeText,
  ButtonText,
  Heading,
} from '@gluestack-ui/themed';

const CardHeaderAccentWithAvatar = (_props: any) => {
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

  const handleContact = () => {};
  const handleMore = () => {};
  return (
    <VStack>
      {userData.map((user) => {
        return (
          <VStack
            m="$4"
            justifyContent="space-between"
            alignItems="flex-start"
            p="$6"
            space="md"
            borderTopWidth="$4"
            sx={{
              '_light': {
                borderTopColor: '$primary500',
                bg: '$backgroundLight100',
              },
              '_dark': {
                bg: '$backgroundDark800',
                borderTopColor: '$primary400',
              },
              '@sm': {
                m: '$8',
                flexDirection: 'row',
              },
              'shadowColor': '$backgroundLight800',
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
                  fallbackSource={{
                    uri: user.fallbackSource,
                  }}
                />
              </Avatar>
              <VStack space="xs" p="$1" flex={1}>
                <HStack space="sm">
                  <Heading
                    sx={{
                      _light: { color: '$textLight900' },
                      _dark: { color: '$textDark0' },
                    }}
                  >
                    {user.name}
                  </Heading>
                  {user.isVerified && (
                    <Badge>
                      <BadgeText>Verified</BadgeText>
                    </Badge>
                  )}
                </HStack>
                <Text
                  sx={{
                    _light: { color: '$textLight400' },
                    _dark: { color: '$textDark500' },
                  }}
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

export default CardHeaderAccentWithAvatar;
