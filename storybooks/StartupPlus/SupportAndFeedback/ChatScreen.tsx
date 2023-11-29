import React, { useState } from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  Input,
  Divider,
  AvatarImage,
  SearchIcon,
  Pressable,
  InputField,
  Center,
  ScrollView,
  Button,
  ButtonIcon,
} from '@gluestack-ui/themed';

import ChatLayout from '../Layouts/ChatLayout';

import {
  ArrowLeftIcon,
  Camera,
  CheckCheck,
  Mic,
  MoreVertical,
  Paperclip,
  Smile,
} from 'lucide-react-native';

type ChatItem = {
  name?: string;
  imageUri: any;
  text: string;
  time: string;
  type: string;
  align: string;
  read: boolean;
};
const chatItemList: ChatItem[] = [
  {
    type: 'text',
    align: 'right',
    text: 'Okay! I’ll call you in the morning once I land and get to Aunty’s house.',
    time: '12.01AM',
    imageUri: '',
    read: true,
  },
  {
    type: 'text',
    name: 'Mum',
    align: 'left',
    text: 'Don’t tell Dad but i’m going to use the cab money for other personal things',
    time: '12.01AM',
    imageUri: '',
    read: false,
  },
  {
    type: 'text',
    name: 'Emily',
    align: 'left',
    text: 'Why? Plus dad can see this lol',
    time: '12.02AM',
    imageUri: '',
    read: false,
  },
  {
    type: 'text',
    name: 'Mum',
    align: 'left',
    text: 'I thought we were on a personal chat. How can I erase it before he sees it? 😂',
    time: '12.03AM',
    imageUri: '',
    read: false,
  },
  {
    type: 'image',
    align: 'right',
    text: 'In 10 min..',
    time: '11:11AM',
    imageUri: require('../assets/chat-image.png'),
    read: false,
  },
  {
    type: 'text',
    name: 'Emily',
    align: 'left',
    text: 'Good morning everyone! You all look amazing ♥',
    time: '12.02AM',
    imageUri: '',
    read: false,
  },
];

function ChatHeader() {
  return (
    <HStack
      sx={{
        _dark: {
          bg: '$backgroundDark900',
        },
        _light: {
          bg: '$primary500',
        },
      }}
      alignItems='center'
      space='xs'
      p='$4'
    >
      <Pressable p='$0'>
        <Icon as={ArrowLeftIcon} m='$2' w='$6' h='$6' color='$textLight50' />
      </Pressable>

      <Avatar size='md'>
        <AvatarImage source={require('../assets/ProfileImage.png')} />
      </Avatar>

      <Box>
        <Text color='$textLight50' fontSize='$lg'>
          Freak Friends
        </Text>
        <Text
          fontSize='$sm'
          sx={{
            _light: {
              color: '$primary300',
            },
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          John,Marsh,lad and 7 More
        </Text>
      </Box>

      <HStack alignItems='center' space='xs' ml='auto'>
        <Pressable p='$0'>
          <Icon as={SearchIcon} m='$2' w='$5' h='$5' color='$textLight50' />
        </Pressable>

        <Pressable p='$0'>
          <Icon as={MoreVertical} m='$2' size='md' color='$textLight50' />
        </Pressable>
      </HStack>
    </HStack>
  );
}
function ChatItem(props: ChatItem) {
  return (
    <Box flexDirection={props.align === 'left' ? 'row' : 'row-reverse'}>
      {props.type === 'text' ? (
        <VStack
          minWidth='$32'
          sx={{
            '@md': {
              maxWidth: '$96',
            },
            _light: {
              bg:
                props.align === 'left' ? '$backgroundLight200' : '$primary300',
            },
            _dark: {
              bg:
                props.align === 'left'
                  ? '$backgroundDark700'
                  : '$backgroundDark600',
            },
          }}
          maxWidth='$64'
          borderRadius='$sm'
          pt='$2'
          pb='$1'
          px='$2'
          gap='$0.5'
        >
          {props.name ? (
            <Text
              fontSize='$sm'
              fontWeight='$medium'
              color='$primary500'
              sx={{
                _dark: {
                  color: '$primary300',
                },
              }}
            >
              {props.name}
            </Text>
          ) : null}
          <Text
            fontSize='$sm'
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {props.text}
          </Text>
          <HStack justifyContent='flex-end' alignItems='center' gap='$1'>
            <Text
              fontSize='$xs'
              sx={{
                _light: {
                  color: '$textLight500',
                },
                _dark: {
                  color: '$textDark400',
                },
              }}
            >
              {props.time}
            </Text>
            {props.read ? (
              <Icon
                as={CheckCheck}
                m='$2'
                size='sm'
                sx={{
                  _light: {
                    color: '$textLight500',
                  },
                  _dark: {
                    color: '$textDark400',
                  },
                }}
              />
            ) : null}
          </HStack>
        </VStack>
      ) : (
        <Box flex={1} alignItems='flex-end'>
          <Image
            size='md'
            w='$2/5'
            maxWidth='$72'
            h='$40'
            rounded='$sm'
            resizeMode='cover'
            alt='alternative text'
            source={props.imageUri}
          />
          <HStack
            position='absolute'
            bottom='$1'
            right='$2'
            zIndex={2}
            gap='$1'
          >
            <Text fontSize='$xs' color='$textLight50'>
              {props.time}
            </Text>
            {props.read ? (
              <Icon
                as={CheckCheck}
                m='$2'
                size='sm'
                sx={{
                  _light: {
                    color: '$textLight500',
                  },
                  _dark: {
                    color: '$textDark400',
                  },
                }}
              />
            ) : null}
          </HStack>
        </Box>
      )}
    </Box>
  );
}
function ChatInput() {
  const [textInput, setTextInput] = useState('');
  return (
    <Box
      w='$full'
      sx={{
        '@md': {
          borderBottomLeftRadius: '$xs',
          borderBottomRightRadius: '$xs',
        },
        _light: {
          bg: '$backgroundLight50',
        },
        _dark: {
          bg: '$backgroundDark800',
        },
      }}
    >
      <Divider
        bg='$backgroundLight200'
        sx={{ _dark: { bg: '$backgroundDark700' } }}
      />
      <HStack
        alignItems='center'
        pt='$3'
        pb='$4'
        px='$4'
        sx={{ '@md': { px: '$8' } }}
      >
        <Pressable p='$0.5'>
          <Icon as={Smile} m='$2' size='lg' color='$textLight400' />
        </Pressable>

        <Input
          flex={1}
          sx={{
            '@md': {
              ml: '$3',
            },
          }}
          ml='$2'
          mr='$3'
          variant='outline'
          size='md'
          rounded='$md'
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
        >
          <InputField
            py='$2'
            px='$4'
            placeholder='Type a message'
            placeholderTextColor='$textLight400'
            fontSize='$sm'
            value={textInput}
            onChangeText={setTextInput}
            sx={{
              _light: {
                bg: '$backgroundLight100',
                borderColor: '$borderLight50',
              },
              _dark: {
                bg: '$backgroundDark700',
                borderColor: '$borderDark800',
              },
            }}
          />
        </Input>

        <HStack alignItems='center' space='xs' ml='auto'>
          <Pressable p='$0'>
            <Icon as={Paperclip} m='$2' w='$5' h='$5' color='$textLight400' />
          </Pressable>

          <Pressable p='$0'>
            <Icon as={Camera} m='$2' w='$5' h='$5' color='$textLight400' />
          </Pressable>

          <Button
            h='$8'
            w='$8'
            p='$0'
            variant='solid'
            action='primary'
            rounded='$full'
            isDisabled={false}
            isFocusVisible={false}
          >
            <ButtonIcon as={Mic} size='xs' />
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
}
function MainContent() {
  return (
    <Box
      flex={1}
      sx={{
        '@md': {
          rounded: '$sm',
        },
        _light: {
          bg: '$backgroundLight50',
        },
        _dark: {
          bg: '$backgroundDark800',
        },
      }}
    >
      <Box
        sx={{
          '@md': {
            display: 'flex',
          },
        }}
        display='none'
      >
        <ChatHeader />
      </Box>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <VStack
          sx={{
            '@md': {
              px: '$20',
              py: '$10',
              gap: '$3',
              _light: {
                bg: '$backgroundLight50',
              },
              _dark: {
                bg: '$backgroundDark800',
              },
            },
          }}
          px='$4'
          py='$4'
          gap='$2'
        >
          {chatItemList.map((item, index) => {
            return <ChatItem {...item} key={index} />;
          })}
        </VStack>
      </ScrollView>
      <ChatInput />
    </Box>
  );
}

const ChatScreen = () => {
  return (
    <ChatLayout
      title='Freak Friends'
      displaySidebar={false}
      subTitle='John,Marsh,lad and 7 More'
    >
      <MainContent />
    </ChatLayout>
  );
}

export default ChatScreen;