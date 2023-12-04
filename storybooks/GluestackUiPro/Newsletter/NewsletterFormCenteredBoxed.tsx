import React, { FC } from 'react';
import {
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
  Toast,
  useToast,
  ToastTitle,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  ButtonText,
} from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { Keyboard } from 'react-native';
import { AlertCircle } from 'lucide-react-native';
import { zodResolver } from '@hookform/resolvers/zod';

const newsletterFormSchema = z.object({
  email: z.string().nonempty('Email is required').email('Email is invalid'),
});

interface FormData {
  email: string;
}

const Newsletter: FC = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(newsletterFormSchema),
  });
  const toast = useToast();

  const onSubmit = () => {
    reset();

    toast.show({
      placement: 'top right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success" px="$4">
            <ToastTitle
              sx={{
                _dark: {
                  color: '$white',
                },
              }}
              textAlign="left"
              fontSize="$sm"
              lineHeight="$sm"
            >
              Subscribed Successfully!
            </ToastTitle>
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
    <VStack
      mx="$4"
      my="$16"
      shadowColor="$gray800"
      shadowOpacity="$5"
      shadowRadius="$1"
      elevation="$10"
      px="$6"
      py="$10"
      alignItems="center"
      bgColor="$backgroundLight0"
      borderRadius="$lg"
      sx={{
        '_dark': {
          bg: '$backgroundDark950',
          shadowColor: '$gray900',
          shadowOpacity: '$0',
          shadowRadius: '$1',
          elevation: '$10',
        },
        '@md': {
          py: '$16',
          mx: '$8',
          my: '$24',
        },
        '@xl': {
          width: 1216,
          mx: 'auto',
        },
        'shadowColor': '$backgroundLight800',
        // @ts-ignore
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 4,
        'elevation': 3,
      }}
    >
      <Heading
        fontSize="$3xl"
        lineHeight="$3xl"
        textAlign="center"
        sx={{
          '@md': {
            fontSize: '$4xl',
            lineHeight: '$5xl',
          },
        }}
      >
        Stay up to date
      </Heading>
      <Text
        mt="$2"
        size="md"
        textAlign="center"
        maxWidth={400}
        sx={{
          '@md': {
            maxWidth: 412,
            letterSpacing: '$xl',
          },
          '@lg': { fontSize: '$lg', lineHeight: '$xl' },
        }}
      >
        Subscribe to our newsletter for the latest news and product updates
        straight to your inbox.
      </Text>

      <FormControl
        w="$full"
        sx={{
          '@md': {
            maxWidth: 512,
          },
        }}
        isInvalid={!!errors.email}
      >
        <VStack
          mt="$8"
          sx={{
            '@md': {
              flexDirection: 'row',
            },
          }}
          space="lg"
        >
          <VStack
            sx={{
              '@md': {
                flexGrow: 1,
              },
            }}
          >
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input>
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
            <FormControlError mt="$1">
              <FormControlErrorIcon as={AlertCircle} />
              <FormControlErrorText
                sx={{
                  fontSize: '$sm',
                  lineHeight: '$sm',
                  fontWeight: '$normal',
                }}
              >
                {errors.email && errors.email.message}
              </FormControlErrorText>
            </FormControlError>
          </VStack>
          <Button
            onPress={handleSubmit(onSubmit)}
            ml="$0"
            sx={{
              '@md': {
                ml: '$3',
              },
            }}
          >
            <ButtonText>Subscribe</ButtonText>
          </Button>
        </VStack>
      </FormControl>
    </VStack>
  );
};

const NewsletterFormCenteredBoxed: FC = () => {
  return <Newsletter />;
};

export default NewsletterFormCenteredBoxed;
