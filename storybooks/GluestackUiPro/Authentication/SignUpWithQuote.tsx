import React from 'react';
import {
  Avatar,
  Button,
  Divider,
  FormControl,
  HStack,
  Heading,
  Icon,
  Input,
  Text,
  VStack,
  Link,
  Image,
  useToast,
  Toast,
  InputField,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  ButtonText,
  ButtonIcon,
  AvatarImage,
} from '@gluestack-ui/themed';
import {
  AlertTriangle,
  GithubIcon,
  StarIcon,
  TwitterIcon,
} from 'lucide-react-native';
import { Keyboard } from 'react-native';
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { GoogleIcon } from '../assets/icons/Social';

const signUpSchema = z.object({
  name: z.string().min(3, 'Enter atleast 3 characters'),
  email: z.string().min(1, 'Email is required').email(),
  password: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
});

type SignUpSchemaType = z.infer<typeof signUpSchema>;

// const QuotesRightIcon = createIcon({
//   Root,
//   viewBox: '0 0 24 24',
//   path: (
//     <G fill="none">
//       <Path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" />
//       <Path
//         d="M16.5,6 C18.4137,6 19.9686,7.5358 19.9995,9.44208 C20.0897,10.3071 20.0766,11.5831 19.492,13.0563 C18.8945,14.5618 17.7276,16.2042 15.6,17.7999 C15.1582,18.1313 14.5314,18.0418 14.2,17.5999 C13.8686,17.1581 13.9582,16.5313 14.4,16.1999 C15.964,15.027 16.8609,13.8865 17.3729,12.8903 C17.0938,12.9619 16.8014,13 16.5,13 C14.567,13 13,11.433 13,9.5 C13,7.567 14.567,6 16.5,6 Z M7.5,6 C9.41366,6 10.9686,7.5358 10.9995,9.44209 C11.0897,10.3071 11.0766,11.5831 10.492,13.0563 C9.89452,14.5618 8.72758,16.2042 6.59999,17.7999 C6.15816,18.1313 5.53136,18.0418 5.19999,17.5999 C4.86861,17.1581 4.95815,16.5313 5.39998,16.1999 C6.96395,15.027 7.86093,13.8865 8.37288,12.8903 C8.09385,12.9619 7.80137,13 7.5,13 C5.567,13 4,11.433 4,9.5 C4,7.567 5.567,6 7.5,6 Z"
//         fill="currentColor"
//       />
//     </G>
//   ),
// });

// const QuotesLeftIcon = createIcon({
//   Root,
//   viewBox: '0 0 24 24',
//   path: (
//     <G fill="none">
//       <Path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" />
//       <Path
//         d="M8.40001,6.20006 C8.84184,5.86869 9.46864,5.95823 9.80001,6.40005 C10.1314,6.84188 10.0418,7.46868 9.60002,7.80006 C8.03605,8.97305 7.13907,10.1135 6.62712,11.1097 C6.90615,11.0381 7.19863,11.0000002 7.5,11.0000002 C9.433,11.0000002 11,12.567 11,14.5000002 C11,16.433 9.433,18.0000002 7.5,18.0000002 C5.58635,18.0000002 4.0314,16.4642 4.00047,14.5579 C3.91027,13.6929 3.92344,12.4169 4.50804,10.9437 C5.10548,9.43818 6.27242,7.79577 8.40001,6.20006 Z M17.4,6.20006 C17.8418,5.86869 18.4686,5.95823 18.8,6.40005 C19.1314,6.84188 19.0418,7.46868 18.6,7.80006 C17.036,8.97305 16.1391,10.1135 15.6271,11.1097 C15.9061,11.0381 16.1986,11.0000002 16.5,11.0000002 C18.433,11.0000002 20,12.567 20,14.5000002 C20,16.433 18.433,18.0000002 16.5,18.0000002 C14.5863,18.0000002 13.0314,16.4642 13.0005,14.5579 C12.9103,13.6929 12.9234,12.4169 13.508,10.9437 C14.1055,9.43818 15.2724,7.79577 17.4,6.20006 Z"
//         fill="currentColor"
//       />
//     </G>
//   ),
// });

const profileDetail = {
  profileQuote: 'What can I say - I fell in love with Gluestack UI Pro.',
  profileName: 'Geetanjali Shree',
  profileEmail: 'geetanjalis@geekyants.com',
  profileImg: require('../assets/AuthModule/avatar.jpeg'),
  profileRating: [1, 2, 3, 4, 5],
};

const SignUpWithQuote = (_props: any) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  });
  const toast = useToast();
  const onSubmit = (_data: SignUpSchemaType) => {
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <Toast.Title>Signed up successfully</Toast.Title>
          </Toast>
        );
      },
    });
    reset();
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
      sx={{
        _dark: {
          backgroundColor: '$backgroundDark950',
        },
      }}
      h="$full"
    >
      <VStack
        alignItems="center"
        justifyContent="center"
        space="lg"
        w="$full"
        flex={1}
        p="$6"
        mx="$2"
        maxWidth={450}
        bg="$backgroundLight0"
        sx={{
          '_dark': { backgroundColor: '$backgroundDark900' },
          '@md': {
            p: '$8',
          },
          '@lg': { mr: '$6' },
        }}
        borderRadius="$md"
      >
        <Image
          height="$16"
          width="$16"
          source={require('../assets/GlustackSubstitute.png')}
        />
        <Heading fontWeight="$medium" size="2xl">
          Create an account
        </Heading>
        <HStack space="sm">
          <Text fontWeight="$light" size="md">
            Already have an account?
          </Text>
          <Link href="" isExternal>
            <Text fontWeight="$medium" size="md">
              Log in
            </Text>
          </Link>
        </HStack>
        <FormControl isInvalid={!!errors.name} isRequired={true} w="$full">
          <FormControl.Label alignItems="flex-start">
            <FormControl.Label.Text mr="$1">Name</FormControl.Label.Text>
          </FormControl.Label>
          <Controller
            defaultValue=""
            name="name"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ name: value });
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
            <FormControlErrorText>{errors?.name?.message}</FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isInvalid={!!errors.email} isRequired={true} w="$full">
          <FormControlLabel alignItems="flex-start">
            <FormControlLabelText mr="$1">Email</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ email: value });
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
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isInvalid={!!errors.password} isRequired={true} w="$full">
          <FormControlLabel alignItems="flex-start">
            <FormControlLabelText mr="$1">Password</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="password"
            control={control}
            rules={{
              validate: async (value) => {
                try {
                  await signUpSchema.parseAsync({ password: value });
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
              {errors?.password?.message}
            </FormControlErrorText>
          </FormControlError>

          <FormControlHelper>
            <FormControlHelperText fontSize="$sm">
              At least 8 characters long
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        <Button w="$full" onPress={handleSubmit(onSubmit)}>
          <ButtonText>Create Account</ButtonText>
        </Button>
        <HStack
          w="$full"
          my="$2"
          alignItems="center"
          space="md"
          justifyContent="center"
        >
          <Divider flex={1} />
          <Text size="xs" fontWeight="$light">
            Or Sign Up With
          </Text>
          <Divider flex={1} />
        </HStack>
        <HStack w="$full" justifyContent="space-between" space="md">
          <Button
            flex={1}
            action="secondary"
            variant="outline"
            onPress={() => {}}
          >
            <ButtonIcon as={GoogleIcon} />
          </Button>
          <Button
            flex={1}
            action="secondary"
            variant="outline"
            onPress={() => {}}
          >
            <ButtonIcon as={TwitterIcon} />
          </Button>
          <Button
            flex={1}
            action="secondary"
            variant="outline"
            onPress={() => {}}
          >
            <ButtonIcon as={GithubIcon} />
          </Button>
        </HStack>
      </VStack>
      <VStack
        space="lg"
        display="none"
        sx={{
          '@lg': { w: '50%', display: 'flex' },
        }}
        alignItems="center"
        justifyContent="center"
        maxWidth={550}
      >
        <HStack>
          <Icon
            w={65}
            h={65}
            as={GoogleIcon}
            color="$black"
            // sx={{
            //   _dark: {
            //     color: '$white',
            //   },
            //   transform: [{ translateY: -25 }],
            // }}
          />
          <Heading
            mx="$2"
            fontSize={'$3xl'}
            lineHeight="$3xl"
            fontWeight="$normal"
            textAlign="center"
            numberOfLines={3}
          >
            {profileDetail.profileQuote}
          </Heading>
          <Icon
            w={65}
            h={65}
            // sx={{
            //   _dark: {
            //     color: '$white',
            //   },
            //   transform: [{ translateY: 25 }],
            // }}
            alignSelf="flex-end"
            as={GoogleIcon}
            color="$black"
          />
        </HStack>
        <Avatar size="lg">
          <AvatarImage source={profileDetail.profileImg} />
        </Avatar>
        <Text size="lg">{profileDetail.profileName}</Text>
        <Text size="sm">{profileDetail.profileEmail}</Text>
        <HStack>
          {profileDetail.profileRating?.map(() => (
            <Icon
              as={StarIcon}
              size="md"
              sx={{
                props: { fill: '$primary300' },
              }}
            />
          ))}
        </HStack>
      </VStack>
    </HStack>
  );
};

export default SignUpWithQuote;
