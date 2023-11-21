import React from 'react';
import { HStack, Icon, Text, Pressable } from '@gluestack-ui/themed';
import { useRoute } from '@react-navigation/native';

export default function MobileFooter({
  navigation,
  footerIcons,
}: {
  navigation: any;
  footerIcons: any;
}) {
  const route = useRoute();
  return (
    <HStack
      justifyContent="space-between"
      width="$full"
      position="absolute"
      left="$0"
      bottom="$0"
      right="$0"
      py="$2"
      px="$2"
      overflow="hidden"
      alignItems="center"
      backgroundColor="$backgroundLight0"
      borderTopColor="$borderLight200"
      sx={{
        '_dark': {
          backgroundColor: '$backgroundDark800',
          borderTopColor: '$borderDark600',
        },
        '@md': {
          display: 'none',
        },
      }}
      borderTopWidth="$1"
    >
      {footerIcons.map(
        (
          item: { iconText: string; iconName: any },
          index: React.Key | null | undefined
        ) => {
          return (
            <Pressable
              px="$4"
              py="$2.5"
              key={index}
              flex={1}
              flexDirection="column"
              alignItems="center"
              onPress={() => navigation.navigate(item.iconText)}
            >
              <Icon
                as={item.iconName}
                size="md"
                color={
                  route.name === item.iconText ? '$primary500' : '$textLight500'
                }
                sx={{
                  _dark: {
                    color:
                      route.name === item.iconText
                        ? '$primary300'
                        : '$textDark400',
                  },
                }}
              />
              <Text
                color={
                  route.name === item.iconText ? '$primary500' : '$textLight500'
                }
                sx={{
                  _dark: {
                    color:
                      item.iconText === route.name
                        ? '$primary300'
                        : '$textDark400',
                  },
                }}
                fontSize="$xs"
              >
                {item.iconText}
              </Text>
            </Pressable>
          );
        }
      )}
    </HStack>
  );
}
