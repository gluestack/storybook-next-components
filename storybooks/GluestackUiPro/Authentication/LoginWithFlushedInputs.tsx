import React, { useState } from 'react';
import {
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
  Link,
  Checkbox,
  CheckIcon,
  Image,
  Heading,
  Toast,
  useToast,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  CheckboxIndicator,
  CheckboxIcon,
  ButtonText,
} from '@gluestack-ui/themed';

import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Keyboard } from 'react-native';
import { FacebookIcon, GoogleIcon } from '../../../assets/icons/Social';
import { AlertTriangle } from 'lucide-react-native';
import { InputField } from '@gluestack-ui/themed';

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
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const LoginWithFlushedInputs = () => {
  const toast = useToast();
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    const user = USERS.find((element) => element.email === data.email);
    if (user) {
      if (user.password !== data.password)
        setValidated({ emailValid: true, passwordValid: false });
      else {
        setValidated({ emailValid: true, passwordValid: true });
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
      }
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
        space="md"
      >
        <Image
          height="$16"
          width="$16"
          source={require('../../../assets/GlustackSubstitute.png')}
        />
        <Heading
          textAlign="center"
          size="xl"
          sx={{
            '@md': { fontSize: '$3xl' },
          }}
          fontWeight="$semibold"
          letterSpacing={0.8}
        >
          Log in to your account
        </Heading>
        <HStack space="sm">
          <Text fontWeight="$light" size="md">
            Don't have an account?
          </Text>
          <Link href="" isExternal>
            <Text fontWeight="$medium" size="md">
              Sign up
            </Text>
          </Link>
        </HStack>
        <VStack w="$full" mt="$4">
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
                <Input
                  w="$full"
                  borderBottomLeftRadius="$none"
                  borderBottomRightRadius="$none"
                >
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
            <FormControlError m="$1">
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.email?.message ||
                  (!validated.emailValid && 'Email ID not found')}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
          <FormControl
            isInvalid={!!errors.password || !validated.passwordValid}
          >
            <Controller
              defaultValue=""
              name="password"
              control={control}
              rules={{
                validate: async (value) => {
                  try {
                    await loginSchema.parseAsync({ password: value });
                    return true;
                  } catch (error: any) {
                    return error.message;
                  }
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  w="$full"
                  borderTopLeftRadius="$none"
                  borderTopRightRadius="$none"
                >
                  <InputField
                    placeholder="Password"
                    type="password"
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                </Input>
              )}
            />
            <FormControlError m="$1">
              <FormControlErrorIcon as={AlertTriangle} />
              <FormControlErrorText>
                {errors?.password?.message ||
                  (!validated.passwordValid && 'Password was incorrect')}
              </FormControlErrorText>
            </FormControlError>
          </FormControl>
        </VStack>
        <HStack
          w="$full"
          justifyContent="space-between"
          alignItems="center"
          my="$3"
        >
          <Controller
            name="rememberme"
            defaultValue={false}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Checkbox
                size="sm"
                value="Remember me"
                isChecked={value}
                onChange={onChange}
                aria-label="Remember me"
              >
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <Checkbox.Label>Remember me</Checkbox.Label>
              </Checkbox>
            )}
          />
          <Link href="" isExternal>
            <Text textAlign="right" fontWeight="$medium" size="sm">
              Forgot Password
            </Text>
          </Link>
        </HStack>
        <Button w="$full" onPress={handleSubmit(onSubmit)}>
          <Button.Text textAlign="center" fontWeight="$medium">
            Sign in
          </Button.Text>
        </Button>
        <Button
          action="secondary"
          variant="outline"
          w="$full"
          onPress={() => {}}
        >
          <Icon as={GoogleIcon} />
          <ButtonText textAlign="center" fontWeight="$medium" ml="$3">
            Sign in with Google
          </ButtonText>
        </Button>
      </VStack>
    </HStack>
  );
};

export default LoginWithFlushedInputs;
