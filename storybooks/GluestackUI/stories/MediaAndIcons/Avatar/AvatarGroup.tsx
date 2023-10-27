import {
  HStack,
  Avatar,
  AvatarGroup,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from '@gluestack-ui/themed';
import React from 'react';

const TextSizeMap = new Map([
  ['xs', '2xs'],
  ['sm', 'xs'],
  ['md', 'md'],
  ['lg', 'xl'],
  ['xl', '3xl'],
  ['2xl', '5xl'],
]);

const AvatarGroupBasic = ({ size = 'md', badge, ...props }: any) => {
  return (
    <HStack space="md" h="100%" justifyContent="center" alignItems="center">
      <AvatarGroup>
        <Avatar size={size}>
          <AvatarFallbackText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': TextSizeMap.get(props.size || 'md'),
              }),
            }}
          >
            John Doe
          </AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          {badge && <AvatarBadge />}
        </Avatar>
        <Avatar size={size}>
          <AvatarFallbackText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': TextSizeMap.get(props.size || 'md'),
              }),
            }}
          >
            John Doe
          </AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
          />
          {badge && <AvatarBadge />}
        </Avatar>
        <Avatar size={size}>
          <AvatarFallbackText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': TextSizeMap.get(props.size || 'md'),
              }),
            }}
          >
            John Doe
          </AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          />
          {badge && <AvatarBadge />}
        </Avatar>
        <Avatar size={size}>
          <AvatarFallbackText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': TextSizeMap.get(props.size || 'md'),
              }),
            }}
          >
            John Doe
          </AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            }}
          />
          {badge && <AvatarBadge />}
        </Avatar>
      </AvatarGroup>
    </HStack>
  );
};

AvatarGroupBasic.description =
  'This is a basic AvatarGroup component example. AvatarGroup is a wrapper component that renders a group of avatars.';

export default AvatarGroupBasic;
