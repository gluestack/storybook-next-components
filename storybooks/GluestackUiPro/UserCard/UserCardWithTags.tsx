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
} from '@gluestack-ui/themed';
import { Calendar, Pencil, ShieldCheck } from 'lucide-react-native';

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
      <Box
        p="$8"
        display="flex"
        bg="$backgroundLight0"
        flexDirection="column"
        sx={{
          '_dark': {
            bg: '$backgroundDark950',
          },
          '@md': {
            flexDirection: 'row',
            width: 672,
            borderRadius: '$2xl',
            mx: 'auto',
          },
        }}
      >
        <VStack>
          <Image
            size="xl"
            source={{
              uri: uri,
            }}
            // @ts-ignore
            borderRadius="$full"
            fallbackSource={{
              uri: fallbackSource,
            }}
          />
          <Box
            borderRadius="$full"
            bg="$white"
            position="absolute"
            p="$1"
            top="$24"
            left="$24"
            sx={{
              _dark: {
                bg: '$backgroundDark950',
              },
            }}
          >
            <Icon as={ShieldCheck} color="$primary500" size="xl" />
          </Box>
        </VStack>
        <Box
          flexGrow={1}
          display="flex"
          flexDirection="column"
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
              <Icon as={Pencil} color="$backgroundLight500" />
              <Button.Text>Edit</Button.Text>
            </Button>
          </Box>
          <VStack space="xs">
            <Text fontWeight="$500">Creative Writer</Text>
            <UserDesc iconName={GlobeIcon} desc="Ontario" subdesc="Canada" />
            <UserDesc iconName={Calendar} desc="July" subdesc="2021" />

            <Text fontWeight="$500">Interests</Text>
            <HStack
              space="sm"
              py="$1"
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
        </Box>
      </Box>
    </Box>
  );
};

export default UserCardWithTags;
