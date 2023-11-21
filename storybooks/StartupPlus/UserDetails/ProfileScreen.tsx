import React, { useState } from 'react';
import {
  HStack,
  Icon,
  VStack,
  Avatar,
  Button,
  Text,
  Box,
  Pressable,
  BellIcon,
  SettingsIcon,
  AvatarImage,
  AvatarBadge,
  Input,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  useToast,
  Toast,
  ToastTitle,
  InputField,
  ButtonIcon,
  ButtonText,
  ScrollView,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
  Image,
} from '@gluestack-ui/themed';

import {
  AlertCircle,
  Camera,
  LogOut,
  LogOutIcon,
  Pencil,
  Scroll,
  ShoppingBag,
  User,
  UserPlus,
  Users,
  Share2,
  Pen,
  LucideIcon,
  X,
} from 'lucide-react-native';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Keyboard } from 'react-native';

import DashboardLayout from '../Layouts/DashboardLayout';

const signUpSchema = z.object({
  nameSchema: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, "Name can't exceed 50 characters"),
  email: z.string().min(1, 'Email is required').email(),
  password: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
  confirmpassword: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
  rememberme: z.boolean().optional(),
  contactNumberSchema: z
    .string()
    .regex(/^\d{10}$/, 'Contact number must be a 10-digit number'),
  address: z
    .string()
    .min(2, 'Address must be at least 2 characters')
    .max(50, "Address can't exceed 50 characters"),
  city: z
    .string()
    .min(2, 'City must be at least 2 characters')
    .max(50, "City can't exceed 50 characters"),
  state: z
    .string()
    .min(2, 'State must be at least 2 characters')
    .max(50, "State can't exceed 50 characters"),
  country: z
    .string()
    .min(2, 'Country must be at least 2 characters')
    .max(50, "Country can't exceed 50 characters"),
  zipCodeSchema: z
    .string()
    .regex(/^\d{5}(?:-\d{4})?$/, 'Invalid zip code format'),
});

type SignUpSchemaType = z.infer<typeof signUpSchema>;

type IconProps = {
  iconName: typeof Icon | LucideIcon;
  iconText: string;
};

const list: IconProps[] = [
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
    iconName: Scroll,
    iconText: 'Privacy Policies',
  },
  {
    iconName: UserPlus,
    iconText: 'Help & Support',
  },
  {
    iconName: Share2,
    iconText: 'Refer & Earn',
  },
];

function WebDisplay() {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [pwMatched, setPwMatched] = useState(false);
  const toast = useToast();

  const onSubmit = (_data: SignUpSchemaType) => {
    if (_data.password === _data.confirmpassword) {
      setPwMatched(true);
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="success">
              <ToastTitle>Signed in successfully</ToastTitle>
            </Toast>
          );
        },
      });
      reset();
    } else {
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="outline" action="error">
              <ToastTitle>Passwords do not match</ToastTitle>
            </Toast>
          );
        },
      });
    }
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <VStack space="lg">
      <HStack alignItems="center" justifyContent="space-between">
        <Pressable>
          <Avatar size="xl">
            <AvatarImage source={require('./assets/images/janedoe.png')} />
            <AvatarBadge
              alignItems="center"
              justifyContent="center"
              bg="$backgroundDark50"
              sx={{
                _dark: {
                  bg: '$backgroundDark700',
                  borderColor: '$backgroundDark700',
                },
              }}
            >
              <Icon as={Camera} size="md" color="$textLight400" />
            </AvatarBadge>
          </Avatar>
        </Pressable>

        <Button variant="outline" size="xl">
          <ButtonIcon as={Pencil} mr="$2" size="lg" />
          <ButtonText fontSize="$sm">Edit Details</ButtonText>
        </Button>
      </HStack>

      <VStack mt="$8" space="4xl">
        <FormControl
          isInvalid={
            (!!errors.nameSchema || isNameFocused) && !!errors.nameSchema
          }
          isRequired={true}
        >
          <Controller
            defaultValue="John"
            name="nameSchema"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ nameSchema: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input isDisabled={true}>
                <InputField
                  placeholder="Full Name"
                  type="text"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertCircle} size="md" />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          isInvalid={(!!errors.email || isEmailFocused) && !!errors.email}
          isRequired={true}
        >
          <Controller
            defaultValue="Johnlegend2@gmail.com"
            name="email"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ email: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input isDisabled={true}>
                <InputField
                  placeholder="Email"
                  type="text"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertCircle} size="md" />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          isInvalid={
            (!!errors.contactNumberSchema || isEmailFocused) &&
            !!errors.contactNumberSchema
          }
          isRequired={true}
        >
          <Controller
            defaultValue="+91-8239635900"
            name="contactNumberSchema"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({
                    contactNumberSchema: value,
                  });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input isDisabled={true}>
                <InputField
                  placeholder="contact number"
                  type="text"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertCircle} size="md" />
            <FormControlErrorText>
              {errors?.contactNumberSchema?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          isInvalid={(!!errors.address || isEmailFocused) && !!errors.address}
          isRequired={true}
        >
          <Controller
            defaultValue="+Langford Road"
            name="address"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ address: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input isDisabled={true}>
                <InputField
                  placeholder="Address"
                  type="text"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertCircle} size="md" />
            <FormControlErrorText>
              {errors?.address?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <HStack alignItems="center" justifyContent="space-between">
          <FormControl
            w="$12/25"
            isInvalid={(!!errors.city || isEmailFocused) && !!errors.city}
            isRequired={true}
          >
            <Controller
              defaultValue="Bangalore"
              name="city"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ city: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input isDisabled={true}>
                  <InputField
                    placeholder="City"
                    type="text"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.city?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            w="$12/25"
            isInvalid={(!!errors.state || isEmailFocused) && !!errors.state}
            isRequired={true}
          >
            <Controller
              defaultValue="Karnataka"
              name="state"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ state: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input isDisabled={true}>
                  <InputField
                    placeholder="State"
                    type="text"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.state?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </HStack>

        <HStack alignItems="center" justifyContent="space-between">
          <FormControl
            w="$12/25"
            isInvalid={
              (!!errors.zipCodeSchema || isEmailFocused) &&
              !!errors.zipCodeSchema
            }
            isRequired={true}
          >
            <Controller
              defaultValue="12367"
              name="zipCodeSchema"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ zipCodeSchema: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input isDisabled={true}>
                  <InputField
                    placeholder="Zip code"
                    type="text"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.zipCodeSchema?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            w="$12/25"
            isInvalid={(!!errors.country || isEmailFocused) && !!errors.country}
            isRequired={true}
          >
            <Controller
              defaultValue="India"
              name="country"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await signUpSchema.parseAsync({ country: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input isDisabled={true}>
                  <InputField
                    placeholder="Country"
                    type="text"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError>
              <FormControlErrorIcon as={AlertCircle} size="md" />
              <FormControlErrorText>
                {errors?.country?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </HStack>
      </VStack>
    </VStack>
  );
}

function MobileScreen() {
  const [showModal, setShowModal] = useState(false);

  const ref = React.useRef(null);
  const [selectedButton, setSelectedButton] = useState<number | null>(4);
  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  return (
    <Box
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
      h="$full"
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <VStack
          pb="$4.5"
          mt="$10"
          alignItems="center"
          borderBottomWidth="$1"
          sx={{
            _light: {
              borderBottomColor: '$borderLight200',
            },
            _dark: {
              borderBottomColor: '$borderDark800',
            },
          }}
        >
          <Avatar size="2xl">
            <AvatarImage source={require('./assets/images/janedoe.png')} />
          </Avatar>
          <HStack
            alignItems="center"
            justifyContent="center"
            space="sm"
            pt="$3"
          >
            <Text
              fontSize="$xl"
              fontWeight="$bold"
              color="$textLight800"
              sx={{ _dark: { color: '$textDark50' } }}
            >
              Jane Doe
            </Text>

            <Icon
              as={Pen}
              size="sm"
              color="$textLight800"
              sx={{ _dark: { color: '$textDark50' } }}
            />
          </HStack>
          <Text
            fontSize="$sm"
            fontWeight="medium"
            textAlign="center"
            pt="$1"
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
        <VStack px="$4" py="$4">
          {list.map((item, idx) => {
            return (
              <Button
                key={idx}
                variant="solid"
                pl="$4"
                py="$2.5"
                pr="$5"
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

                  '_dark': {
                    bg:
                      selectedButton === idx
                        ? '$backgroundDark800'
                        : '$backgroundDark900',
                  },
                }}
              >
                <HStack w="$full" alignItems="center">
                  <ButtonIcon
                    as={item.iconName}
                    size="lg"
                    mr="$4"
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
                    fontWeight="$normal"
                    sx={{
                      'color':
                        selectedButton === idx
                          ? '$primary500'
                          : '$textLight700',
                      '_dark': {
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
        bg="$backgroundLight200"
        sx={{ _dark: { bg: '$backgroundDark800' } }}
      />
      <Box px="$4" py="$2">
        <Button
          variant="solid"
          justifyContent="flex-start"
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

            '_dark': {
              bg:
                selectedButton === -1
                  ? '$backgroundDark800'
                  : '$backgroundDark900',
            },
          }}
        >
          <ButtonIcon
            as={LogOut}
            mr="$4"
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
            fontWeight="$normal"
            sx={{
              'color': selectedButton === -1 ? '$primary500' : '$textLight700',
              '_dark': {
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
          <ModalHeader justifyContent="flex-end">
            <ModalCloseButton>
              <Icon size="lg" as={X} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Image
              justifyContent="center"
              alignSelf="center"
              alt="gluestack-ui"
              source={require('./assets/images/janedoe.png')}
            />
            <Text>
              Are you sure that you want to logout from account? All your
              unsaved data will be lost.
            </Text>
          </ModalBody>
          <ModalFooter flexDirection="row" alignItems="center">
            <Button
              flex={1}
              size="sm"
              py="$2.5"
              action="primary"
              borderWidth="$0"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>YES</ButtonText>
            </Button>
            <Button
              ml="$4"
              py="$2.5"
              variant="outline"
              size="sm"
              action="secondary"
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

export default function ProfileScreen() {
  return (
    <DashboardLayout
      title="Profile"
      rightPanelMobileHeader={true}
      displayBackButton={true}
    >
      <Box
        bg="$backgroundLight0"
        sx={{
          '@lg': { px: '$35' },
          '@md': { rounded: '$sm', pb: '$35', pt: '$8', px: '$8' },
          '_dark': { bg: '$backgroundDark900' },
        }}
      >
        <Box display="none" sx={{ '@md': { display: 'flex' } }}>
          <WebDisplay />
        </Box>

        <Box sx={{ '@md': { display: 'none' } }}>
          <MobileScreen />
        </Box>
      </Box>
    </DashboardLayout>
  );
}
