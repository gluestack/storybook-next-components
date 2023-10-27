import React, { useState } from 'react';

import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  Center,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBackdrop,
  Pressable,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  Text,
  VStack,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  CircleIcon,
  ButtonIcon,
} from '@gluestack-ui/themed';

import {
  ChevronDownIcon,
  ChevronUpIcon,
  SwitchCamera,
  Trash2,
  UserPlus,
  X,
} from 'lucide-react-native';

import DashboardLayout from '../Layouts/DashboardLayout';
import { ImageSourcePropType } from 'react-native';

const ManageAccounts = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(4);
  const [dropdownTab, setDropdownTab] = React.useState(true);
  const Main = () => {
    const [showModal, setShowModal] = useState(false);
    const ref = React.useRef(null);
    return (
      <Box>
        <Box
          sx={{
            '_dark': { bg: '$backgroundDark800' },
            '@md': { rounded: '$sm' },
          }}
          bg="$backgroundLight0"
          py="$8"
        >
          <HStack justifyContent="space-between" alignItems="center" px="$5">
            <HStack space="md">
              <Avatar>
                <AvatarImage source={require('./assets/images/pannel.png')} />
              </Avatar>
              <VStack space="xs">
                <Heading size="sm">John Doe</Heading>
                <Text fontSize="$sm">janedoe@mydomain.com</Text>
              </VStack>
            </HStack>
            <Button
              bg="transparent"
              sx={{
                _icon: {
                  ':hover': {
                    color: '$primary500',
                  },
                },
              }}
              onPress={() => setShowModal(true)}
            >
              <ButtonIcon
                display="flex"
                color="$textLight500"
                as={Trash2}
                size="xl"
              />
            </Button>
          </HStack>
          <Modal
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            finalFocusRef={ref}
          >
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader justifyContent="flex-end">
                <ModalCloseButton>
                  <Icon size="lg" as={X} />
                </ModalCloseButton>
              </ModalHeader>
              <ModalBody>
                <Image
                  justifyContent="center"
                  alignSelf="center"
                  w="$20"
                  h="$20"
                  source={require('./assets/images/pannel.png')}
                  sx={{
                    '@md': { display: 'flex' },
                  }}
                  alt="gluestack-ui"
                />
                <Text textAlign="center" p="$4">
                  Are you sure that you want to remove your account?
                </Text>
              </ModalBody>
              <ModalFooter flexDirection="row" alignItems="center">
                <Button
                  size="sm"
                  borderWidth="$0"
                  onPress={() => {
                    setShowModal(false);
                  }}
                  flex={1}
                >
                  <ButtonText>YES</ButtonText>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  action="secondary"
                  ml="$3"
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
          <Box px="$5">
            <Divider
              sx={{
                _light: { bg: '$textLight200' },
                _dark: { bg: '$textDark700' },
              }}
              mt="$6"
              mb="$3"
            />
          </Box>
          <Box>
            <Pressable py="$3" px="$5" onPress={() => {}}>
              <HStack alignItems="center" space="md">
                <Icon
                  as={UserPlus}
                  sx={{
                    _light: { color: '$textLight500' },
                    _dark: { color: '$textDark400' },
                  }}
                />
                <Text fontSize="$md">Add another account</Text>
              </HStack>
            </Pressable>
            <Pressable
              onPress={() => {
                setDropdownTab(!dropdownTab);
              }}
              py="$3"
              px="$5"
            >
              <HStack justifyContent="space-between">
                <HStack space="md" alignItems="center">
                  <Icon
                    as={SwitchCamera}
                    sx={{
                      _light: { color: '$textLight500' },
                      _dark: { color: '$textDark400' },
                    }}
                  />
                  <Text fontSize="$md">Switch accounts</Text>
                </HStack>
                <Center>
                  {!dropdownTab ? (
                    <Icon
                      mr="$2"
                      as={ChevronDownIcon}
                      sx={{
                        _light: { color: '$textLight500' },
                        _dark: { color: '$textDark400' },
                      }}
                    />
                  ) : (
                    <Icon
                      mr="$2"
                      as={ChevronUpIcon}
                      sx={{
                        _light: { color: '$textLight500' },
                        _dark: { color: '$textDark400' },
                      }}
                    />
                  )}
                </Center>
              </HStack>
            </Pressable>
            {dropdownTab ? <Dropdown /> : null}
          </Box>
        </Box>
      </Box>
    );
  };
  type User = {
    id: string;
    avatar: ImageSourcePropType;
    name: string;
    email: string;
  };
  const users: User[] = [
    {
      id: '1',
      avatar: require('./assets/images/pannel.png'),
      name: 'Jane Doe',
      email: 'janedoe2@mydomain.com',
    },
    {
      id: '2',
      avatar: require('./assets/images/person2.png'),
      name: 'Joey Tribbiani',
      email: 'joetribbiani@gmail.com',
    },
  ];
  const [values, setValues] = React.useState('1');
  function Dropdown() {
    return (
      <RadioGroup value={values} onChange={setValues} mt="$3">
        <VStack space="md" w="$full" px="$5">
          {users.map((user, index) => (
            <Radio justifyContent="space-between" key={index} value={user.id}>
              <HStack
                space="md"
                alignItems="center"
                justifyContent="space-between"
              >
                <Avatar size="sm">
                  <AvatarImage source={user.avatar} />
                </Avatar>
                <Box>
                  <Text fontSize="$sm" fontWeight="$bold">
                    {user.name}
                  </Text>
                  <Text fontSize="$xs">{user.email}</Text>
                </Box>
              </HStack>
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    );
  }

  return (
    <DashboardLayout title="Manage Accounts">
      <Main />
    </DashboardLayout>
  );
};

export default ManageAccounts;
