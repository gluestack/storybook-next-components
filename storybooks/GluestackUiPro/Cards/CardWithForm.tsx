import React from 'react';

import {
  Box,
  VStack,
  Text,
  Button,
  Input,
  Icon,
  FormControl,
  useToast,
  Toast,
  ButtonText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  InputField,
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
      <Icon as={IconName} color={color} px="$2" />
      <ButtonText fontWeight="$semibold">{buttonText}</ButtonText>
    </Button>
  );
};

const MainCard = () => {
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
            <Toast.Title>Invite Sent Successfully!</Toast.Title>
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
      bg="$backgroundLight0"
      p="$4"
      m="$4"
      rounded="$lg"
      sx={{
        'shadowColor': '$gray600',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
        '_dark': {
          bg: '$backgroundDark950',
        },
        '@md': {
          mx: '$auto',
          width: 680,
          p: '$6',
        },
      }}
    >
      <Text size="lg" fontWeight="$medium">
        Share GlueStack UI with friends
      </Text>
      <Text mt="$1" size="sm" fontWeight="$light">
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
        <Text size="sm" mb="$1.5">
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
            <ButtonText fontWeight="$semibold">Send</ButtonText>
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
};

const CardWithForm = () => {
  return <MainCard />;
};

export default CardWithForm;
