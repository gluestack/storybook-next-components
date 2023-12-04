import React, { useState } from 'react';
import {
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  Link,
  Checkbox,
  CheckIcon,
  Heading,
  Image,
  Icon,
  useToast,
  Toast,
  FormControlLabel,
  FormControlLabelText,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@gluestack-ui/themed';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Keyboard } from 'react-native';
import { FacebookIcon, GoogleIcon } from '../../../assets/icons/Social';
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
  password: z.string().min(1, 'Password is required'),
  rememberme: z.boolean().optional(),
});

type LoginSchemaType = z.infer<typeof loginSchema>;

const LoginWithEmailPasswordOrGoogle = () => {
  const [validated, setValidated] = useState({
    emailValid: true,
    passwordValid: true,
  });
  const toast = useToast();
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
        p="$4"
        maxWidth={400}
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
          letterSpacing={0.8}
          size="xl"
          sx={{
            '@sm': { fontSize: '$3xl' },
          }}
          fontWeight="$semibold"
        >
          Log in to your account
        </Heading>
        <Text textAlign="center" fontWeight="$light" letterSpacing="$lg">
          Start making your dreams come true
        </Text>
        <FormControl
          isInvalid={!!errors?.email || !validated.emailValid}
          mt="$3"
        >
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Controller
            name="email"
            defaultValue=""
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
              <Input>
                <InputField
                  placeholder="Enter your email"
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
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.email?.message ||
                (!validated.emailValid && 'User not found')}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <FormControl
          mt="$3"
          isInvalid={!!errors.password || !validated.passwordValid}
        >
          <FormControl.Label>
            <FormControl.Label.Text mr="$1">Password</FormControl.Label.Text>
          </FormControl.Label>
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
              <Input>
                <InputField
                  placeholder="********"
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
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.password?.message ||
                (!validated.passwordValid && 'Incorrect password')}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
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
                <CheckboxLabel>Remember me</CheckboxLabel>
              </Checkbox>
            )}
          />
          <Link href="" isExternal>
            <Text textAlign="right" fontWeight="$medium" size="sm">
              Forgot Password?
            </Text>
          </Link>
        </HStack>
        <Button w="$full" onPress={handleSubmit(onSubmit)} mb="$2">
          <Button.Text textAlign="center" fontWeight="$medium">
            Sign in with email
          </Button.Text>
        </Button>
        <Button action="secondary" variant="outline" w="$full">
          <Icon as={GoogleIcon} />
          <Button.Text textAlign="center" ml="$3" fontWeight="$medium">
            Sign in with Google
          </Button.Text>
        </Button>
        <HStack mt="$4">
          <Text size="sm">Don't have an account?</Text>
          <Link href="" isExternal>
            <Text ml="$1" fontWeight="$medium" size="sm">
              Sign up
            </Text>
          </Link>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default LoginWithEmailPasswordOrGoogle;
