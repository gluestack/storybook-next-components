import React from 'react';

import {
  VStack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  HStack,
  Icon,
  Heading,
  Text,
} from '@gluestack-ui/themed';
import { User } from 'lucide-react-native';

const TextSizeMap: any = {
  'xs': '2xs',
  'sm': 'xs',
  'md': 'md',
  'lg': 'xl',
  'xl': '3xl',
  '2xl': '5xl',
};

const AvatarBasic = ({
  size = 'md',
  uri = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  badge = true,
  fallbackText = 'John Doe',
  ...props
}: any) => {
  return (
    <Avatar size={size} {...props}>
      <AvatarFallbackText
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': TextSizeMap[size],
          }),
        }}
      >
        {fallbackText}
      </AvatarFallbackText>
      <AvatarImage
        source={{
          uri: uri,
        }}
      />
      {badge && <AvatarBadge />}
    </Avatar>
  );
};

AvatarBasic.description =
  'This is a basic Avatar component example. An avatar is a graphical representation of a user.';

export default AvatarBasic;

export {
  HStack,
  VStack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
  Icon,
  Heading,
  User,
  Text,
};
