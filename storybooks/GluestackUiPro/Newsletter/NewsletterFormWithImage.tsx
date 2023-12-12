import React, { FC } from 'react';
import {
  Button,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  Toast,
  VStack,
  useToast,
  Box,
  ScrollView,
  ToastTitle,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  ButtonText,
} from '@gluestack-ui/themed';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { AlertCircle } from 'lucide-react-native';
import { zodResolver } from '@hookform/resolvers/zod';

const newsletterFormSchema = z.object({
  email: z.string().nonempty('Email is required').email('Email is invalid'),
});

interface FormData {
  email: string;
}

const NewsletterFromWithImage: FC = (_props: any) => {
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
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <VStack
        bgColor="$backgroundLight0"
        alignItems="center"
        justifyContent="space-between"
        width="$full"
        px="$8"
        py="$24"
        space="4xl"
        sx={{
          '_dark': {
            bgColor: '$backgroundDark950',
          },
          '@md': {
            flexDirection: 'row',
            px: '$10',
          },
          '@lg': {
            px: '$24',
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
        <VStack flex={1} width="$full">
          <Heading
            fontSize="$3xl"
            lineHeight="$3xl"
            fontWeight="$semibold"
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
            size="md"
            fontWeight="$light"
            letterSpacing="$xl"
            mt="$2"
            sx={{
              '@lg': { fontSize: '$lg', lineHeight: '$xl', mt: '$3' },
            }}
          >
            Subscribe to our newsletter for the latest news and product updates
            straight to your inbox.
          </Text>

          <FormControl
            isInvalid={!!errors.email}
            mt="$8"
            sx={{
              '@lg': {
                maxWidth: 512,
              },
            }}
          >
            <VStack
              space="lg"
              sx={{
                '@sm': {
                  flexDirection: 'row',
                },
              }}
            >
              <Box
                sx={{
                  '@sm': {
                    flexGrow: 1,
                  },
                  '@md': {
                    flexDirection: 'row',
                  },
                }}
              >
                <Box flex={1}>
                  <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        sx={{
                          '@md': {
                            flexGrow: 1,
                          },
                        }}
                      >
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
            </VStack>
          </FormControl>

          <Text
            fontWeight="$normal"
            mt="$4"
            sx={{
              '@md': {
                mt: '$8',
              },
            }}
          >
            We respect your privacy. No spam!
          </Text>
        </VStack>

        <Image
          h="$96"
          w="$full"
          mx="auto"
          my="auto"
          sx={{
            '@md': {
              flex: 1,
              ml: '$16',
            },
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
          }}
          resizeMode="cover"
        />
      </VStack>
    </ScrollView>
  );
};

export default NewsletterFromWithImage;
