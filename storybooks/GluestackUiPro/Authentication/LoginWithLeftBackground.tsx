import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
  AvatarImage,
  Badge,
  BadgeText,
  Button,
  ButtonIcon,
  ButtonText,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Heading,
  Image,
  Input,
  InputField,
  Link,
  Text,
  Toast,
  VStack,
  useToast,
} from '@gluestack-ui/themed';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AlertTriangle } from 'lucide-react-native';
import { GoogleIcon } from '../../../assets/icons/Social';

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

const ProfileAvatars = [
  require('../../../assets/AuthModule/avatar.jpeg'),
  require('../../../assets/AuthModule/avatar2.jpeg'),
  require('../../../assets/AuthModule/avatar3.jpeg'),
  require('../../../assets/AuthModule/avatar4.jpeg'),
];

const LoginLeft = () => {
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

  const formDetails = {
    heading: ' Gluestack UI',
    badge: 'Pro',
    subHeading: 'Start making your dreams come true',
    description:
      'Create an account and discover the worlds best UI component framework.',
    avatarNumber: '+ 2',
    subDescription: 'Join 10,000+ users',
    license: ' © 2023 Gluestack UI. All rights reserved.',
  };

  return (
    <HStack
      alignItems="center"
      h="$full"
      bg="$backgroundLight50"
      sx={{
        _dark: {
          bg: '$backgroundDark950',
        },
      }}
    >
      <VStack
        bg="$primary500"
        w="$0"
        display="none"
        sx={{
          '@md': {
            minWidth: '50%',
            h: '$full',
            display: 'flex',
            pr: '$4',
          },
          '@lg': { pr: '$16' },
        }}
        alignItems="flex-start"
        justifyContent="space-between"
        pl="$8"
        py="$4"
        space="md"
      >
        <HStack alignItems="center" space="sm">
          <Image
            height="$16"
            width="$16"
            source={require('../../../assets/GlustackSubstitute.png')}
          />
          <Heading fontWeight="$medium" size="xl" color="$white">
            {formDetails.heading}
          </Heading>
          <Badge
            bg="$backgroundLight50"
            sx={{
              _dark: {
                bg: '$backgroundLight50',
              },
            }}
          >
            <BadgeText
              color="$primary500"
              sx={{
                _dark: {
                  color: '$primary500',
                },
              }}
              fontWeight="$bold"
              px="$1"
              fontSize={16}
            >
              {formDetails.badge}
            </BadgeText>
          </Badge>
        </HStack>
        <VStack space="3xl">
          <Heading
            sx={{
              '@md': { w: '98%', fontSize: '$5xl' },
            }}
            color="$white"
            fontWeight="$medium"
            fontSize="$3xl"
            lineHeight="$3xl"
            numberOfLines={5}
          >
            {formDetails.subHeading}
          </Heading>
          <Text size="md" color="$white" letterSpacing={0.5}>
            {formDetails.description}
          </Text>
          <HStack ml="$2" alignItems="center">
            <HStack justifyContent="center" alignItems="center">
              {/* @ts-ignore */}
              <AvatarGroup>
                {ProfileAvatars.slice(0, 2).map((avatar) => {
                  return (
                    <Avatar
                      display="flex"
                      sx={{
                        '@lg': { display: 'none' },
                      }}
                      size="md"
                    >
                      <AvatarImage
                        source={avatar}
                        borderColor="$white"
                        borderWidth="$2"
                      />
                    </Avatar>
                  );
                })}
                {ProfileAvatars.map((avatar) => {
                  return (
                    <Avatar
                      display="none"
                      sx={{
                        '@lg': { display: 'flex' },
                      }}
                      size="md"
                    >
                      <AvatarImage
                        source={avatar}
                        borderColor="$white"
                        borderWidth="$2"
                      />
                    </Avatar>
                  );
                })}
                <Avatar
                  display="flex"
                  sx={{
                    '@lg': { display: 'none' },
                  }}
                  size="md"
                >
                  <AvatarFallbackText>
                    {formDetails.avatarNumber}
                  </AvatarFallbackText>
                </Avatar>
              </AvatarGroup>
            </HStack>
            <Text ml="$6" color="$white">
              {formDetails.subDescription}
            </Text>
          </HStack>
        </VStack>
        <Heading
          fontWeight="$light"
          size="xs"
          color="$backgroundDark200"
          mb="$4"
          letterSpacing={0.4}
        >
          {formDetails.license}
        </Heading>
      </VStack>
      <VStack
        alignItems="center"
        justifyContent="center"
        w="$full"
        maxWidth={440}
        p="$4"
        m="auto"
        sx={{
          '@lg': {
            w: '$full',
          },
        }}
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
          sx={{
            '@md': { fontSize: '$3xl' },
          }}
          letterSpacing={0.8}
        >
          Log in to your account
        </Heading>
        <HStack>
          <Text fontWeight="$light" size="md">
            Don't have an account?
          </Text>
          <Link href="" isExternal>
            <Text fontWeight="$medium" ml="$1" size="md">
              Sign up
            </Text>
          </Link>
        </HStack>
        <FormControl isInvalid={!!errors?.email || !validated.emailValid}>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
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
              <Input>
                <InputField
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
        {/* Label Message */}
        <FormControl isInvalid={!!errors.password || !validated.passwordValid}>
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
              <Input>
                <InputField
                  type="password"
                  placeholder="******"
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
                (!validated.passwordValid && 'Password was incorrect')}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <HStack w="$full" justifyContent="space-between" alignItems="center">
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
            <Text textAlign="right" ml="$1" fontWeight="$medium" fontSize="$sm">
              Forgot Password?
            </Text>
          </Link>
        </HStack>
        <Button w="$full" onPress={handleSubmit(onSubmit)}>
          <Button.Text fontWeight="$medium">Sign in</Button.Text>
        </Button>
        <Button
          variant="outline"
          action="secondary"
          w="$full"
          onPress={() => {}}
        >
          <ButtonIcon as={GoogleIcon} />
          <ButtonText fontWeight="$medium" ml="$3">
            Continue with Google
          </ButtonText>
        </Button>
      </VStack>
    </HStack>
  );
};

const LoginWithLeftBackground = () => {
  return <LoginLeft />;
};

export default LoginWithLeftBackground;
