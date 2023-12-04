import React, { useState } from 'react';
import {
  Button,
  Divider,
  FormControl,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
  Link,
  Heading,
  useToast,
  Toast,
  Image,
  InputField,
  FormControlError,
  FormControlErrorText,
  ButtonText,
} from '@gluestack-ui/themed';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Keyboard } from 'react-native';
import { FacebookIcon, GoogleIcon } from '../../../assets/icons/Social';
import { FormControlErrorIcon } from '@gluestack-ui/themed';
import { AlertTriangle } from 'lucide-react-native';

const USERS = [
  {
    email: 'gabrial@gmail.com',
    password: 'Gabrial@123',
  },
  {
    email: 'tom@gmail.com',
    password: 'Tom@123',
  },
  {
    email: 'thomas@gmail.com',
    password: 'Thomas@1234',
  },
];

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const LoginComp = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const toast = useToast();

  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });

  const onSubmit = (data: any) => {
    const user = USERS.find((element) => element.email === data.email);
    if (user) {
      setValidated({ emailValid: true, passwordValid: false });
      toast.show({
        placement: 'bottom right',
        render: ({ id }) => {
          return (
            <Toast nativeID={id} variant="accent" action="success">
              <Toast.Title>Logged in successfully!</Toast.Title>
            </Toast>
          );
        },
      });
      reset();
    } else {
      setValidated({ emailValid: false, passwordValid: true });
    }
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      h="$full"
      flex={1}
      bg="$backgroundLight50"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <VStack
        maxWidth={400}
        p="$4"
        w="$full"
        alignItems="center"
        justifyContent="center"
        space="lg"
      >
        <Image
          height="$16"
          width="$16"
          source={require('../../../assets/GlustackSubstitute.png')}
        />
        <Heading
          textAlign="center"
          fontWeight="$medium"
          size="xl"
          letterSpacing={0.8}
          sx={{
            '@md': { fontSize: '$3xl' },
          }}
        >
          Log in to your account
        </Heading>
        <Button
          mt="$3"
          action="secondary"
          variant="outline"
          w="$full"
          onPress={() => {}}
        >
          <Icon as={GoogleIcon} />
          <Button.Text fontWeight="$medium" ml="$3">
            Continue with Google
          </Button.Text>
        </Button>
        <Divider my="$2" />
        <FormControl isInvalid={!!errors?.email || !validated.emailValid}>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await loginSchema.parseAsync({ email: value });
                  return true;
                } catch (error: any) {
                  return error.message;
                }
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input w="$full">
                <InputField
                  type="text"
                  placeholder="Enter your email"
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
            <FormControlErrorIcon as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.email?.message ||
                (!validated.emailValid && 'Email ID not found')}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button w="$full" onPress={handleSubmit(onSubmit)}>
          <ButtonText fontWeight="$medium" textAlign="center">
            Continue with email
          </ButtonText>
        </Button>
        <Link mt="$4" href="" isExternal>
          <Text textAlign="center" ml="$1" fontWeight="$semibold" size="sm">
            Continue using Single Sign-on (SSO)
          </Text>
        </Link>
      </VStack>
    </HStack>
  );
};

const LoginWithGoogleOrEmail = () => {
  return <LoginComp />;
};

export default LoginWithGoogleOrEmail;
