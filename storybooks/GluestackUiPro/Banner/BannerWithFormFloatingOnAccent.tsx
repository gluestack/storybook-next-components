import React, { useState } from 'react';
import {
  Button,
  Icon,
  Input,
  Text,
  Box,
  FormControl,
  CloseIcon,
  VStack,
  Toast,
  useToast,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  ButtonText,
  ToastTitle,
  ButtonIcon,
} from '@gluestack-ui/themed';

import { AlertTriangle, Mail } from 'lucide-react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { Keyboard } from 'react-native';

const schema: any = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
});

const CloseButton = ({ setIsVisible, sx, ...props }: any) => {
  const handleCloseBtnPress = () => {
    setIsVisible(false);
  };

  return (
    <Button
      sx={{
        ...sx,
        _light: {
          'bg': '$primary500',
          ':hover': { bg: '$primary600' },
          ':active': { bg: '$primary700' },
        },
        _dark: {
          'bg': '$primary400',
          ':hover': { bg: '$primary500' },
          ':active': { bg: '$primary600' },
        },
      }}
      p="$3"
      onPress={handleCloseBtnPress}
      {...props}
    >
      <ButtonIcon
        as={CloseIcon}
        sx={{
          _light: { color: '$textLight0' },
          _dark: { color: '$textDark0' },
        }}
      />
    </Button>
  );
};


const BannerWithButtonFloatingOnAccent = (_props: any) => {
  const [isVisible, setIsVisible] = useState(true);

  const toast = useToast();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const onSubmit = () => {
    reset();
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <ToastTitle>Subscribed Successfully!</ToastTitle>
          </Toast>
        );
      },
    });
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <Box
    maxWidth={1280}
    width="$full"
    mx="auto"
    p="$4"
    sx={{
      '@md': {
        p: '$8',
      },
    }}
    display={isVisible ? 'flex' : 'none'}
  >
    <Box
      p="$4"
      rounded="$xl"
      bg="$primary500"
      sx={{
        shadowColor: '$backgroundLight800',
        //@ts-ignore
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}
    >
      <CloseButton
        setIsVisible={setIsVisible}
        position="absolute"
        ml="$2"
        mb="$4"
        top={10}
        right={10}
        zIndex={999}
        sx={{
          '@md': { display: 'none' },
        }}
      />
      <VStack
        justifyContent="space-between"
        sx={{
          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        <VStack
          mb="$2"
          sx={{
            '@md': {
              flexDirection: 'row',
              alignItems: 'center',
              mb: '$0',
            },
          }}
        >
          <Icon
            bg="$primary600"
            color="$white"
            as={Mail}
            p="$3"
            rounded="$lg"
            display="none"
            size="xl"
            sx={{
              '@md': { display: 'flex', size: 'lg', mr: '$3' },
            }}
          />

          <VStack
            mr="$10"
            space="xs"
            sx={{
              '@lg': {
                flex: 1,
              },
            }}
          >
            <Text mr="$1" color="$textLight0">
              Stay up-to-date with our newsletter.
            </Text>
            <Text color="$textLight300">
              Get early access to our product when we launch.
            </Text>
          </VStack>
        </VStack>
        <FormControl
          isInvalid={errors.email ? true : false}
          w="$full"
          sx={{ '@md': { w: 'auto' } }}
        >
          <VStack
            space="sm"
            w="$full"
            mt="$3"
            sx={{
              '@md': {
                flexDirection: 'row',
                alignItems: 'flex-start',
                mt: '$0',
              },
            }}
          >
            <VStack sx={{ '@md': { mr: '$2', flex: 1 } }}>
              <Controller
                control={control}
                rules={{
                  validate: async (value) => {
                    try {
                      await schema.parseAsync({ email: value });
                      return true;
                    } catch (error: any) {
                      return error.message;
                    }
                  },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <Input bg="$backgroundLight0">
                    <InputField
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      type="text"
                      placeholder="Enter your email"
                      onSubmitEditing={handleKeyPress}
                      returnKeyType="done"
                    />
                  </Input>
                )}
                name="email"
                defaultValue=""
              />

              <FormControlError mb="$1">
                <FormControlErrorIcon as={AlertTriangle} />
                <FormControlErrorText>
                  {errors?.email &&
                    JSON.parse(errors?.email?.message)[0].message}
                </FormControlErrorText>
              </FormControlError>
            </VStack>
            <Button
              bg="$backgroundLight0"
              onPress={handleSubmit(onSubmit)}
              sx={{
                ':hover': { bg: '$backgroundLight50' },
                ':active': { bg: '$backgroundLight100' },
                '@md': { mr: '$2' },
              }}
            >
              <ButtonText color="$primary500">Subscribe</ButtonText>
            </Button>
            <CloseButton
              sx={{
                '@md': { display: 'flex' },
              }}
              setIsVisible={setIsVisible}
              display="none"
            />
          </VStack>
        </FormControl>
      </VStack>
    </Box>
  </Box>
  )
};

export default BannerWithButtonFloatingOnAccent;
