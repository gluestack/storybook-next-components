import React, { useState } from 'react';
import {
  Box,
  Avatar,
  AvatarImage,
  VStack,
  HStack,
  Icon,
  Text,
  Divider,
  Button,
  Image,
  BellIcon,
  SettingsIcon,
  ShareIcon,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ButtonText,
  ButtonIcon,
} from '@gluestack-ui/themed';

import { ScrollView } from 'react-native';
import {
  HelpCircle,
  LogOut,
  Pen,
  ScrollIcon,
  ShoppingBag,
  User,
  Users,
  X,
  LucideIcon,
} from 'lucide-react-native';
type Icons = {
  iconName: LucideIcon | typeof Icon;
  iconText: string;
};
const list: Icons[] = [
  {
    iconName: User,
    iconText: 'Contacts',
  },
  {
    iconName: Users,
    iconText: 'Groups',
  },
  {
    iconName: BellIcon,
    iconText: 'Notification',
  },
  {
    iconName: ShoppingBag,
    iconText: 'Order',
  },
  {
    iconName: SettingsIcon,
    iconText: 'Settings',
  },
  {
    iconName: ScrollIcon,
    iconText: 'Privacy Policies',
  },
  {
    iconName: HelpCircle,
    iconText: 'Help & Support',
  },
  {
    iconName: ShareIcon,
    iconText: 'Refer & Earn',
  },
];

export default function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  const ref = React.useRef(null);
  const [selectedButton, setSelectedButton] = useState<number | null>(4);
  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };
  return (
    <Box
      w='$80'
      borderRightWidth='$1'
      sx={{
        _light: {
          bg: '$backgroundLight0',
          borderRightColor: '$borderLight200',
        },
        _dark: {
          bg: '$backgroundDark900',
          borderRightColor: '$borderDark800',
        },
      }}
      h='$full'
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <VStack
          pb='$4.5'
          mt='$10'
          alignItems='center'
          borderBottomWidth='$1'
          sx={{
            _light: {
              borderBottomColor: '$borderLight200',
            },
            _dark: {
              borderBottomColor: '$borderDark800',
            },
          }}
        >
          <Avatar size='2xl'>
            <AvatarImage source={require('./assets/images/pannel.png')} />
          </Avatar>
          <HStack
            alignItems='center'
            justifyContent='center'
            space='sm'
            pt='$3'
          >
            <Text
              fontSize='$xl'
              fontWeight='$bold'
              color='$textLight800'
              sx={{ _dark: { color: '$textDark50' } }}
            >
              Jane Doe
            </Text>

            <Icon
              as={Pen}
              size='sm'
              color='$textLight800'
              sx={{ _dark: { color: '$textDark50' } }}
            />
          </HStack>
          <Text
            fontSize='$sm'
            fontWeight='medium'
            textAlign='center'
            pt='$1'
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            janedoe2@mydomain.com
          </Text>
        </VStack>
        <VStack px='$4' py='$4'>
          {list.map((item, idx) => {
            return (
              <Button
                key={idx}
                variant='solid'
                pl='$4'
                py='$2.5'
                pr='$5'
                bgColor={
                  selectedButton === idx ? '$primary50' : '$backgroundLight0'
                }
                onPress={() => handleButtonClick(idx)}
                sx={{
                  ':hover': {
                    bg: '$backgroundLight100',
                    _dark: {
                      bg: '$backgroundDark800',
                    },
                  },

                  _dark: {
                    bg:
                      selectedButton === idx
                        ? '$backgroundDark800'
                        : '$backgroundDark900',
                  },
                  '@md': { mx: '$5', py: '$3' },
                }}
              >
                <HStack w='$full' alignItems='center'>
                  <ButtonIcon
                    as={item.iconName}
                    size='lg'
                    mr='$4'
                    sx={{
                      _light: {
                        color:
                          selectedButton === idx
                            ? '$primary500'
                            : '$textLight700',
                      },
                      _dark: {
                        color:
                          selectedButton === idx
                            ? '$primary300'
                            : '$textDark200',
                      },
                    }}
                  />
                  <ButtonText
                    fontWeight='$normal'
                    sx={{
                      color:
                        selectedButton === idx
                          ? '$primary500'
                          : '$textLight700',
                      _dark: {
                        color:
                          selectedButton === idx
                            ? '$primary300'
                            : '$textDark200',
                      },
                      ':hover': {
                        color: '$red500',
                      },
                    }}
                  >
                    {item.iconText}
                  </ButtonText>
                </HStack>
              </Button>
            );
          })}
        </VStack>
      </ScrollView>
      <Divider
        bg='$backgroundLight200'
        sx={{ _dark: { bg: '$backgroundDark800' } }}
      />
      <Box px='$4' py='$4'>
        <Button
          variant='solid'
          justifyContent='flex-start'
          p='$3'
          onPress={() => {
            setShowModal(true);
            handleButtonClick(-1);
          }}
          bgColor={selectedButton === -1 ? '$primary50' : '$backgroundLight0'}
          sx={{
            ':hover': {
              bg: '$backgroundLight100',
              _dark: {
                bg: '$backgroundDark800',
              },
            },

            _dark: {
              bg:
                selectedButton === -1
                  ? '$backgroundDark800'
                  : '$backgroundDark900',
            },
            '@md': { mx: '$5', py: '$3' },
          }}
        >
          <ButtonIcon
            as={LogOut}
            w='$5'
            h='$4'
            mr='$4'
            sx={{
              _light: {
                color: selectedButton === -1 ? '$primary500' : '$textLight700',
              },
              _dark: {
                color: selectedButton === -1 ? '$primary300' : '$textDark200',
              },
            }}
          />
          <ButtonText
            fontWeight='$normal'
            sx={{
              _light: {
                color: selectedButton === -1 ? '$primary500' : '$textLight700',
              },
              _dark: {
                color: selectedButton === -1 ? '$primary400' : '$textDark200',
              },
              ':hover': {
                color: '$red500',
              },
            }}
          >
            Logout
          </ButtonText>
        </Button>
      </Box>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        finalFocusRef={ref}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader justifyContent='flex-end'>
            <ModalCloseButton>
              <Icon size='lg' as={X} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Image
              justifyContent='center'
              alignSelf='center'
              aspectRatio='203/24'
              size='md'
              alt='gluestack-ui'
              source={require('./assets/images/pannel.png')}
              sx={{
                '@md': { display: 'flex' },
              }}
            />
            <Text p='$4'>
              Are you sure that you want to logout from account? All your
              unsaved data will be lost.
            </Text>
          </ModalBody>
          <ModalFooter flexDirection='row' alignItems='center'>
            <Button
              flex={1}
              size='sm'
              py='$2.5'
              action='primary'
              borderWidth='$0'
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>YES</ButtonText>
            </Button>
            <Button
              ml='$4'
              py='$2.5'
              variant='outline'
              size='sm'
              action='secondary'
              onPress={() => {
                setShowModal(false);
              }}
              flex={1}
            >
              <ButtonText>NO</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
