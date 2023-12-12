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
  ToastTitle,
  InputField,
  FormControlErrorIcon,
  FormControlError,
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

const NewsletterFormInlineBoxed: FC = (_props: any) => {
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
    <Box>
      <Box
        width="$full"
        height="50%"
        bgColor="$primary600"
        position="absolute"
        top={0}
      />
      <Box width="$full" height="50%" position="absolute" top="50%" />
      <VStack
        width="90%"
        alignSelf="center"
        mx="$4"
        my="$16"
        px="$6"
        py="$10"
        borderRadius="$lg"
        justifyContent="space-between"
        bgColor="$backgroundLight0"
        shadowColor="$gray800"
        shadowOpacity="$5"
        shadowRadius="$1"
        elevation="$10"
        sx={{
          '@md': {
            px: '$16',
            py: '$12',
            mx: '$8',
            my: '$24',
          },
          '@lg': {
            width: '90%',
            maxWidth: 1216,
            mx: 'auto',
          },
          '_dark': {
            bg: '$backgroundDark950',
            shadowColor: '$gray900',
            shadowOpacity: '$0',
            shadowRadius: '$1',
            elevation: '$10',
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
        <Box
          sx={{
            '@lg': {
              flexDirection: 'row',
            },
          }}
        >
          <Box
            sx={{
              '@sm': {
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

export default NewsletterFormInlineBoxed;
