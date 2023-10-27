import React, { useState } from 'react';

import {
  Avatar,
  AvatarBadge,
  AvatarImage,
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  HStack,
  Icon,
  Input,
  InputField,
  Modal,
  Pressable,
  Toast,
  ToastTitle,
  VStack,
  useToast,
  ModalBackdrop,
  ModalContent,
  Text,
  Image,
  Heading,
  ActionsheetBackdrop,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItemText,
} from '@gluestack-ui/themed';

import DashboardLayout from '../Layouts/DashboardLayout';

import { AlertCircle, Camera, X } from 'lucide-react-native';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ImageSourcePropType, Keyboard } from 'react-native';
import { z } from 'zod';
import { Actionsheet } from '@gluestack-ui/themed';
import { ActionsheetContent } from '@gluestack-ui/themed';
import { ActionsheetDragIndicator } from '@gluestack-ui/themed';
import { ActionsheetItem } from '@gluestack-ui/themed';

type ImageOptionType = {
  id: string;
  avatar: ImageSourcePropType;
  name: string;
};
const imageOptions: ImageOptionType[] = [
  {
    id: '1',
    avatar: require('./assets/images/photos_icon.png'),
    name: 'Photos',
  },
  {
    id: '1',
    avatar: require('./assets/images/camera.png'),
    name: 'Camera',
  },
  {
    id: '1',
    avatar: require('./assets/images/delete.png'),
    name: 'Remove photo',
  },
];
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
const FormComponent = () => {
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

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

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
            <Toast nativeID={id} variant="accent" action="error">
              <ToastTitle>Passwords do not match</ToastTitle>
            </Toast>
          );
        },
      });
    }
  };

  return (
    <VStack flex={1} space="4xl" justifyContent="space-between">
      <VStack space="md">
        <FormControl
          mt="$8"
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
              <Input>
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
            <FormControlErrorIcon size="sm" as={AlertCircle} />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          mt="$8"
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
              <Input>
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
            <FormControlErrorIcon size="sm" as={AlertCircle} />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          mt="$8"
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
              <Input>
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
            <FormControlErrorIcon size="sm" as={AlertCircle} />
            <FormControlErrorText>
              {errors?.contactNumberSchema?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl
          mt="$8"
          isInvalid={(!!errors.address || isEmailFocused) && !!errors.address}
          isRequired={true}
        >
          <Controller
            defaultValue="Langford Road"
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
              <Input>
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
            <FormControlErrorIcon size="sm" as={AlertCircle} />
            <FormControlErrorText>
              {errors?.address?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <HStack
          sx={{
            '@base': { flexDirection: 'column' },
            '@md': { flexDirection: 'row', justifyContent: 'space-between' },
          }}
        >
          <FormControl
            sx={{ '@md': { w: '$12/25' } }}
            w="$full"
            mt="$8"
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
                <Input>
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
              <FormControlErrorIcon size="sm" as={AlertCircle} />
              <FormControlErrorText>
                {errors?.city?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            mt="$8"
            sx={{ '@md': { w: '$12/25' } }}
            w="$full"
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
                <Input>
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
              <FormControlErrorIcon size="sm" as={AlertCircle} />
              <FormControlErrorText>
                {errors?.state?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </HStack>
        <HStack
          sx={{
            '@base': { flexDirection: 'column' },
            '@md': { flexDirection: 'row', justifyContent: 'space-between' },
          }}
        >
          <FormControl
            mt="$8"
            sx={{ '@md': { w: '$12/25' } }}
            w="$full"
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
                <Input>
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
              <FormControlErrorIcon size="sm" as={AlertCircle} />
              <FormControlErrorText>
                {errors?.zipCodeSchema?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>

          <FormControl
            mt="$8"
            sx={{ '@md': { w: '$12/25' } }}
            w="$full"
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
                <Input>
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
              <FormControlErrorIcon size="sm" as={AlertCircle} />
              <FormControlErrorText>
                {errors?.country?.message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </HStack>
      </VStack>
      <Button
        mt="auto"
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>SAVE </ButtonText>
      </Button>
    </VStack>
  );
};
const Main = () => {
  const [showModal, setShowModal] = useState(false);

  const ref = React.useRef(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <VStack
      sx={{
        '@base': { px: '$4', py: '$5' },
        '@md': { px: '$8', py: '$8', rounded: '$sm' },
        '@lg': { px: '$32' },
        '_light': { bg: '$backgroundLight0' },
        '_dark': { bg: '$backgroundDark800' },
      }}
    >
      <Pressable
        sx={{
          '@base': { alignSelf: 'center', mb: '$0' },
          '@md': { alignSelf: 'flex-start' },
        }}
        onPress={() => {
          setModalVisible(!modalVisible);
          setShowModal(true);
          handleClose();
        }}
      >
        <VStack>
          <Modal
            sx={{ '@base': { display: 'none' }, '@md': { display: 'flex' } }}
            isOpen={showModal}
            onClose={() => {
              setShowModal(false);
            }}
            flex={1}
            finalFocusRef={ref}
          >
            <ModalBackdrop />
            <ModalContent p="$10">
              <Heading px="$6" size="lg">
                Profile Picture
              </Heading>

              <HStack p="$6" justifyContent="space-between" my="$5" space="lg">
                {imageOptions.map((item, index) => (
                  <Pressable key={index} onPress={() => {}}>
                    <VStack space="xs" alignItems="center">
                      <Image
                        w="$10"
                        h="$10"
                        alt="NativeBase Startup+"
                        resizeMode="contain"
                        source={item.avatar}
                      />
                      <Text
                        fontSize="$sm"
                        sx={{
                          _light: { color: '$backgroundLight800' },
                          _dark: { color: '$backgroundDark50' },
                        }}
                      >
                        {item.name}
                      </Text>
                    </VStack>
                  </Pressable>
                ))}
              </HStack>
            </ModalContent>
          </Modal>

          <Actionsheet
            sx={{ '@base': { display: 'flex' }, '@md': { display: 'none' } }}
            isOpen={showActionsheet}
            onClose={handleClose}
            zIndex={999}
          >
            <ActionsheetBackdrop />
            <ActionsheetContent zIndex={999}>
              <ActionsheetDragIndicatorWrapper>
                <ActionsheetDragIndicator />
              </ActionsheetDragIndicatorWrapper>
              <ActionsheetItem onPress={handleClose}>
                <VStack>
                  <ActionsheetItemText>Profile Picture</ActionsheetItemText>
                  <HStack justifyContent="space-between" my="$5" space="lg">
                    {imageOptions.map((item, index) => (
                      <Pressable key={index} onPress={() => {}}>
                        <VStack space="xs" alignItems="center">
                          <Image
                            w="$10"
                            h="$10"
                            alt="gluestack-ui"
                            resizeMode="contain"
                            source={item.avatar}
                          />
                          <Text
                            fontSize="$sm"
                            sx={{
                              _light: { color: '$backgroundLight800' },
                              _dark: { color: '$backgroundDark50' },
                            }}
                          >
                            {item.name}
                          </Text>
                        </VStack>
                      </Pressable>
                    ))}
                  </HStack>
                </VStack>
              </ActionsheetItem>
            </ActionsheetContent>
          </Actionsheet>
        </VStack>

        <Avatar size="xl">
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
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
      <FormComponent />
    </VStack>
  );
};
export default function EditDetails() {
  return (
    <DashboardLayout title="Edit Details">
      <Main />
    </DashboardLayout>
  );
}
