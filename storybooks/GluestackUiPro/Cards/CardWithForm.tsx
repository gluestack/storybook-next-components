import React from 'react';

import {
  Box,
  VStack,
  Text,
  Button,
  Input,
  FormControl,
  useToast,
  Toast,
  ButtonText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputField,
  ToastTitle,
  Heading,
  ButtonIcon,
} from '@gluestack-ui/themed';
import {
  AlertTriangle,
  FacebookIcon,
  MessageCircle,
  TwitterIcon,
} from 'lucide-react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { Keyboard } from 'react-native';

const schema: any = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .nonempty('Email is required'),
});

const ButtonComponent = ({
  buttonText,
  IconName,
  color,
  handleChange,
}: any) => {
  return (
    <Button
      variant="outline"
      action="secondary"
      my="$2"
      onPress={handleChange}
      sx={{
        '@md': {
          mr: '$3',
          my: '$0',
        },
      }}
    >
      <ButtonIcon as={IconName} color={color} px="$2" />
      <ButtonText>{buttonText}</ButtonText>
    </Button>
  );
};

const CardWithForm = (_props: any) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  }: any = useForm();

  const toast = useToast();

  const onSubmit = () => {
    reset();
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <ToastTitle>Invite Sent Successfully!</ToastTitle>
          </Toast>
        );
      },
    });
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/', '_blank');
  };
  const handleTwitter = () => {
    window.open('https://twitter.com/', '_blank');
  };
  const handleWhatsapp = () => {
    window.open('https://www.whatsapp.com/', '_blank');
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const iconsArray = [
    {
      iconName: 'Facebook',
      icon: FacebookIcon,
      color: '$primary500',
      handleChange: handleFacebook,
    },
    {
      iconName: 'Twitter',
      icon: TwitterIcon,
      color: '$primary300',
      handleChange: handleTwitter,
    },
    {
      iconName: 'WhatsApp',
      icon: MessageCircle,
      color: '$success500',
      handleChange: handleWhatsapp,
    },
  ];

  return (
    <VStack
      p="$4"
      m="$4"
      rounded="$lg"
      sx={{
        'shadowColor': '$backgroundLight800',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '_light': { bg: '$backgroundLight100' },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@md': {
          mx: '$auto',
          width: 680,
          p: '$6',
        },
      }}
    >
      <Heading
        sx={{
          _light: { color: '$textLight900' },
          _dark: { color: '$textDark0' },
        }}
      >
        Share GlueStack UI with friends
      </Heading>
      <Text
        mt="$1"
        size="sm"
        sx={{
          _light: { color: '$textLight400' },
          _dark: { color: '$textDark500' },
        }}
      >
        Email friends who have never tried GlueStack UI
      </Text>

      <VStack
        mt="$5"
        sx={{
          '@md': {
            flexDirection: 'row',
          },
        }}
      >
        {iconsArray.map((item, index) => {
          const { iconName, icon, color, handleChange } = item;
          return (
            <ButtonComponent
              key={index}
              IconName={icon}
              buttonText={iconName}
              color={color}
              handleChange={handleChange}
            />
          );
        })}
      </VStack>

      <Box mt="$5">
        <Text
          sx={{
            _light: { color: '$textLight700' },
            _dark: { color: '$textDark300' },
          }}
          size="sm"
          mb="$1.5"
        >
          Send an invite
        </Text>
        <VStack
          sx={{
            '@md': {
              flexDirection: 'row',
              alignItems: 'flex-start',
            },
          }}
        >
          <FormControl
            w="$full"
            flexDirection="column"
            sx={{
              '@md': {
                w: 'auto',
                flexDirection: 'column',
                alignItems: 'flex-start',
              },
            }}
            isInvalid={errors.email ? true : false}
          >
            <Controller
              name="email"
              defaultValue=""
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
                <Input w="$full">
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
            />
            <FormControlError mt="$2" mb="$2">
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.email && JSON.parse(errors?.email?.message)[0].message}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <Button
            size="sm"
            ml="$0"
            mt="$3"
            px="$4"
            sx={{ '@md': { ml: '$3', mt: '$0' } }}
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText>Send</ButtonText>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

export default CardWithForm;
