import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FacebookIcon, GoogleIcon } from '../../../assets/icons/Social';
import { z } from 'zod';
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
  Link,
  Heading,
  Image,
  CheckIcon,
  useToast,
  Toast,
  ButtonIcon,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabelText,
  FormControlLabel,
  InputSlot,
  InputIcon,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@gluestack-ui/themed';
import {
  AlertTriangle,
  EyeIcon,
  EyeOffIcon,
  GithubIcon,
  TwitterIcon,
} from 'lucide-react-native';

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

const LoginForm = () => {
  const toast = useToast();
  const [showPassword, setShowPassword] = React.useState(false);
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

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  return (
    <HStack
      alignItems="center"
      justifyContent="center"
      bg="$backgroundLight50"
      flex={1}
      h="$full"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <VStack
        w="$full"
        p="$4"
        maxWidth={512}
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
          size="xl"
          fontWeight="$semibold"
          sx={{
            '@sm': { fontSize: '$3xl' },
          }}
        >
          Log in to your account
        </Heading>
        <HStack>
          <Text fontWeight="$light" fontSize="$md">
            Don't have an account?
          </Text>
          <Link
            sx={{
              _text: {
                ml: '$1',
              },
            }}
            href=""
            isExternal
          >
            <Text fontWeight="$medium" fontSize="$md">
              Sign up
            </Text>
          </Link>
        </HStack>
        <VStack
          bg="$backgroundLight0"
          borderRadius="$md"
          mt="$8"
          p="$6"
          space="lg"
          w="$full"
          sx={{
            '_dark': {
              backgroundColor: '$backgroundDark900',
            },
            '@sm': {
              p: '$9',
            },
          }}
        >
          <FormControl isInvalid={!!errors?.email || !validated.emailValid}>
            <FormControl.Label>
              <FormControl.Label.Text>Email</FormControl.Label.Text>
            </FormControl.Label>
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
            isInvalid={!!errors.password || !validated.passwordValid}
          >
            <FormControlLabel>
              <FormControlLabelText>Password</FormControlLabelText>
            </FormControlLabel>
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
                <Input pr="$3">
                  <InputField
                    type={!showPassword ? 'password' : 'text'}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    onSubmitEditing={handleKeyPress}
                    returnKeyType="done"
                  />
                  <InputSlot onPress={handleShowPasswordToggle}>
                    <InputIcon
                      as={!showPassword ? EyeIcon : EyeOffIcon}
                      sx={{
                        h: 18,
                        w: 18,
                        color: '$backgroundDark900',
                        _dark: {
                          color: '$backgroundLight0',
                        },
                      }}
                    />
                  </InputSlot>
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
            space="md"
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
              <Text textAlign="right" fontWeight="$medium" fontSize={14}>
                Forgot Password?
              </Text>
            </Link>
          </HStack>
          <Button w="$full" onPress={handleSubmit(onSubmit)}>
            <Button.Text fontWeight="$medium">Sign in</Button.Text>
          </Button>
          <HStack w="$full" alignItems="center" justifyContent="center">
            <Divider flex={1} />
            <Text
              textAlign="center"
              numberOfLines={1}
              fontSize="$xs"
              fontWeight="$light"
              mx="$2"
            >
              Or Continue With
            </Text>
            <Divider flex={1} />
          </HStack>
          <HStack justifyContent="space-between" space="md">
            <Button
              action="secondary"
              flex={1}
              variant="outline"
              onPress={() => {}}
            >
              <ButtonIcon as={GoogleIcon} />
            </Button>
            <Button
              action="secondary"
              flex={1}
              variant="outline"
              onPress={() => {}}
            >
              <ButtonIcon as={TwitterIcon} />
            </Button>
            <Button
              action="secondary"
              flex={1}
              variant="outline"
              onPress={() => {}}
            >
              <ButtonIcon as={GithubIcon} />
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </HStack>
  );
};

const LoginWithCentredForm = () => {
  return <LoginForm />;
};

export default LoginWithCentredForm;
