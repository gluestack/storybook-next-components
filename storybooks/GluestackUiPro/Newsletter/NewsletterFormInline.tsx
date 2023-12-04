import React, { FC } from 'react';
import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  VStack,
  Heading,
  Toast,
  useToast,
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
            <Toast.Title
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
            </Toast.Title>
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
      bg="$backgroundLight0"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
        shadowColor: '$backgroundLight800',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      }}
    >
      <VStack
        w="$full"
        px="$6"
        py="$10"
        justifyContent="space-between"
        sx={{
          '@md': {
            px: '$16',
            py: '$12',
          },
          '@xl': { maxWidth: 1280, mx: 'auto' },
        }}
      >
        <Box
          sx={{
            '@lg': {
              flexDirection: 'row',
            },
          }}
        >
          <Box
            sx={{
              '@lg': {
                flex: 1,
              },
            }}
          >
            <Heading
              fontSize="$3xl"
              lineHeight="$3xl"
              fontWeight="$semibold"
              sx={{
                '@md': {
                  fontSize: '$4xl',
                },
              }}
            >
              Stay up to date
            </Heading>

            <Text
              mt="$3"
              size="md"
              fontWeight="$light"
              sx={{
                '@lg': { fontSize: '$lg', lineHeight: '$xl' },
                '@md': {
                  letterSpacing: '$xl',
                },
              }}
            >
              Subscribe to our newsletter for the latest news and product
              updates straight to your inbox.
            </Text>
          </Box>

          <FormControl
            isInvalid={!!errors.email}
            sx={{ '@lg': { ml: '$8', flex: 1, mt: '$0' } }}
            justifyContent="center"
            mt="$5"
          >
            <Box
              w="$full"
              sx={{
                '@md': {
                  flexDirection: 'row',
                  flexShrink: 1,
                  maxWidth: 512,
                },
                '@lg': {
                  alignSelf: 'flex-end',
                  maxWidth: '$full',
                },
              }}
            >
              <Box
                sx={{
                  '@md': {
                    flexGrow: 1,
                  },
                }}
                justifyContent="center"
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
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                        placeholder="Enter your email"
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
              </Box>

              <Button
                onPress={handleSubmit(onSubmit)}
                ml="$0"
                mt="$4"
                sx={{
                  '@md': {
                    ml: '$3',
                    mt: '$0',
                  },
                }}
              >
                <ButtonText>Subscribe</ButtonText>
              </Button>
            </Box>
          </FormControl>
        </Box>
        <Box
          pt="$8"
          sx={{
            '@lg': {
              alignItems: 'flex-end',
            },
          }}
        >
          <Text>We respect your privacy. No spam!</Text>
        </Box>
      </VStack>
    </Box>
  );
};

const NewsletterFromInline: FC = () => {
  return <Newsletter />;
};

export default NewsletterFromInline;
