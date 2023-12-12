import React, { FC } from 'react';
import {
  Button,
  FormControl,
  Heading,
  Input,
  Text,
  VStack,
  useToast,
  Toast,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  ButtonText,
  ToastTitle,
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

const NewsletterFormCentered: FC = (_props: any) => {
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
      bg="$backgroundLight0"
      alignItems="center"
      px="$4"
      py="$16"
      sx={{
        '@md': {
          px: '$8',
        },
        '_dark': {
          bg: '$backgroundDark950',
        },
        'shadowColor': '$backgroundLight800',
        'shadowOffset': {
          width: 0,
          height: 1,
        },
        'shadowOpacity': 0.22,
        'shadowRadius': 2.22,
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
          '@lg': { fontSize: '$lg', lineHeight: '$xl' },
          '@md': {
            maxWidth: 412,
            letterSpacing: '$xl',
          },
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

export default NewsletterFormCentered;
