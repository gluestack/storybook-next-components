import React from 'react';
import {
  Box,
  Text,
  Image,
  VStack,
  Icon,
  GlobeIcon,
  HStack,
  Button,
  Avatar,
  AvatarImage,
  AvatarBadge,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';
import { Calendar, Pencil, CheckCircle } from 'lucide-react-native';

const InterestHolder = ({ title }: any) => {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      bg="$backgroundLight100"
      py="$0.5"
      px="$1.5"
      borderRadius="$sm"
      sx={{
        mb: '$2',
        _dark: {
          bg: '$backgroundDark400',
        },
      }}
    >
      <Text size="sm" alignSelf="center">
        {title}
      </Text>
    </Box>
  );
};

const UserDesc = ({ iconName, desc, subdesc }: any) => {
  return (
    <HStack space="xs" alignItems="center" py="$1">
      <Icon
        as={iconName}
        size="sm"
        sx={{
          _dark: {
            color: '$backgroundDark100',
          },
        }}
      />
      <Text size="sm" alignSelf="center">
        {desc}, {subdesc}
      </Text>
    </HStack>
  );
};

const UserCardWithTags = ({
  uri = 'https://images.unsplash.com/photo-1506935077180-46af676a2f6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
  fallbackSource = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
}) => {
  return (
    <Box borderRadius="$2xl" py="$12">
      <VStack
        p="$8"
        display="flex"
        bg="$backgroundLight50"
        sx={{
          '_dark': {
            bg: '$backgroundDark900',
          },
          '@md': {
            flexDirection: 'row',
            width: 672,
            borderRadius: '$2xl',
            mx: 'auto',
          },
        }}
      >
        <Avatar size="xl">
          <AvatarImage
            source={{
              uri: uri,
            }}
          />
          <AvatarBadge
            alignItems="center"
            justifyContent="center"
            bg="$backgroundLight50"
            sx={{
              _dark: {
                bg: '$backgroundDark900',
                borderColor: '$backgroundDark900',
              },
            }}
          >
            <Icon as={CheckCircle} color="$primary500" />
          </AvatarBadge>
        </Avatar>
        <VStack
          flexGrow={1}
          justifyContent="space-between"
          py="$3"
          px="$0"
          sx={{
            '@md': {
              px: '$8',
            },
          }}
        >
          <Box
            justifyContent="space-between"
            display="flex"
            flexDirection="row"
          >
            <Text size="xl" fontWeight="bold">
              Samantha Brooke
            </Text>

            <Button variant="outline" action="secondary" size="sm">
              <ButtonIcon as={Pencil} color="$backgroundLight500" />
              <ButtonText ml="$2">Edit</ButtonText>
            </Button>
          </Box>
          <VStack space="xs">
            <Text fontWeight="$500">Creative Writer</Text>
            <UserDesc iconName={GlobeIcon} desc="Ontario" subdesc="Canada" />
            <UserDesc iconName={Calendar} desc="July" subdesc="2021" />

            <Text mt="$4" fontWeight="$500">
              Interests
            </Text>
            <HStack
              space="sm"
              pt="$2"
              sx={{
                flexWrap: 'wrap',
              }}
            >
              <InterestHolder title="Productivity" />
              <InterestHolder title="Work" />
              <InterestHolder title="Business" />
              <InterestHolder title="Woman" />
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default UserCardWithTags;
