import React, { useState } from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Image,
  Pressable,
  FormControl,
  Textarea,
  Input,
  Divider,
  Button,
  Link,
  Center,
  TextareaInput,
  InputField,
} from '@gluestack-ui/themed';
import { ImageSourcePropType, Keyboard } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import DashboardLayout from '../Layouts/DashboardLayout';
import { ChevronRight, UploadCloud } from 'lucide-react-native';

type ProductProps = {
  id: string;
  imageUri: ImageSourcePropType;
  item: string;
  details: string;
  amount: string;
};
const productList: ProductProps[] = [
  {
    id: '1',
    imageUri: require('./assets/images/sweater.png'),
    item: 'Sweater dress',
    details: ' Girls self design',
    amount: '₹1,199',
  },
];
function Card(props: ProductProps) {
  return (
    <HStack
      space="md"
      rounded="$sm"
      sx={{
        _light: {
          bg: '$backgroundDark100',
        },
        _dark: {
          bg: '$backgroundDark700',
        },
      }}
      p="$3"
    >
      <Link href="" rounded="$sm" overflow="hidden">
        <Image source={props.imageUri} alt="Alternate Text" h="$24" w="$20" />
      </Link>
      <Link href="">
        <Box>
          <Text
            fontSize="$md"
            fontWeight="$bold"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            {props.item}
          </Text>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$backgrpundLight500',
              },
              _dark: {
                color: '$textLight400',
              },
            }}
          >
            {props.details}
          </Text>
          <Text
            fontSize="$sm"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
            mt="auto"
          >
            {props.amount}
          </Text>
        </Box>
      </Link>
    </HStack>
  );
}
function CardSection() {
  return (
    <VStack
      space="md"
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          px: '$4',
          pt: '$5',
        },
        '@md': {
          px: '$0',
          pt: '$0',
        },
      }}
      pb="$2"
    >
      {productList.map((item, index) => {
        return <Card key={index} {...item} />;
      })}
      <Pressable>
        <HStack py="$3" justifyContent="space-between" alignItems="center">
          <Text
            fontSize="$md"
            fontWeight="$medium"
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textDark50',
              },
            }}
          >
            Select reason
          </Text>

          <Icon
            as={ChevronRight}
            sx={{
              _light: {
                color: '$textLight800',
              },
              _dark: {
                color: '$textLight50',
              },
            }}
          ></Icon>
        </HStack>
      </Pressable>
    </VStack>
  );
}
function AddPhoto() {
  const [image, setImage] = useState<string>('');

  const pickImage = async () => {
    // const result: ImagePicker.ImagePickerResult =
    //   await ImagePicker.launchImageLibraryAsync({
    //     mediaTypes: ImagePicker.MediaTypeOptions.All,
    //     allowsEditing: true,
    //     aspect: [4, 3],
    //     quality: 1,
    //   });

    // if (!result.canceled) {
    //   setImage(result.assets[0].uri);
    // }
  };

  return (
    <Box
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          px: '$4',
          py: '$4',
          mt: '$4',
        },
        '@md': {
          px: '$0',
          py: '$0',
          mt: '$6',
        },
      }}
    >
      <Text
        fontSize="$sm"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        Add Photo or Video
      </Text>

      <Center
        w="$full"
        h="$32"
        sx={{
          _light: {
            borderColor: '$borderLight300',
          },
          _dark: {
            borderColor: '$borderDark700',
          },
        }}
        borderWidth="$1"
        borderStyle="dashed"
        rounded="$sm"
        mt="$3"
      >
        <Pressable alignItems="center" onPress={pickImage}>
          {image === '' ? (
            <>
              <Icon as={UploadCloud} color="$textLight400"></Icon>
              <Text
                fontSize="$sm"
                mt="$0.5"
                sx={{
                  _light: {
                    color: '$textLight500',
                  },
                  _dark: {
                    color: '$textDark400',
                  },
                }}
              >
                Upload
              </Text>
            </>
          ) : (
            <Image
              source={{ uri: image }}
              w="$24"
              h="$24"
              alt="Gallery Image"
            />
          )}
        </Pressable>
      </Center>
    </Box>
  );
}
function Description() {
  const [name, setName] = React.useState('');
  return (
    <Box
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          px: '$4',
          py: '$4',
          mt: '$4',
        },
        '@md': {
          px: '$0',
          py: '$0',
          mt: '$8',
        },
      }}
    >
      <Text
        fontSize="$sm"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textLight50',
          },
        }}
      >
        Description
      </Text>
      <Textarea h="$32" mt="$3">
        <TextareaInput
          value={name}
          fontSize="$sm"
          color="$textLight500"
          onChangeText={setName}
          onSubmitEditing={Keyboard.dismiss}
          placeholder="Refund Reason (optional)"
        />
      </Textarea>
    </Box>
  );
}
function RefundAmount() {
  const [refundAmount, setRefundAmount] = useState('');
  return (
    <Box
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          px: '$4',
          py: '$4',
          mt: '$4',
        },
        '@md': {
          px: '$0',
          py: '$0',
          mt: '$8',
        },
      }}
    >
      <Text
        fontSize="$sm"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textLight50',
          },
        }}
      >
        Refund Amount
      </Text>
      <FormControl isRequired mt="$3">
        <Input py="$2">
          <InputField
            keyboardType="numeric"
            fontSize="$sm"
            color="$textLight500"
            value={refundAmount}
            onChangeText={setRefundAmount}
            placeholder="Enter amount you want to be refunded"
          />
        </Input>
      </FormControl>
    </Box>
  );
}
function EmailAddress() {
  const [emailId, setEmailId] = useState('');
  return (
    <Box
      sx={{
        '_light': {
          bg: '$backgroundLight0',
        },
        '_dark': {
          bg: '$backgroundDark800',
        },
        '@base': {
          px: '$4',
          py: '$4',
          mt: '$4',
        },
        '@md': {
          px: '$0',
          py: '$0',
          mt: '$8',
        },
      }}
    >
      <Text
        fontSize="$sm"
        fontWeight="$medium"
        sx={{
          _light: {
            color: '$textLight800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        Email Address
      </Text>
      <FormControl isRequired mt="$3">
        <Input py="$2">
          <InputField
            placeholder="Enter your email address"
            value={emailId}
            onChangeText={setEmailId}
            fontSize="$sm"
            color="$textLight500"
          ></InputField>
        </Input>
      </FormControl>
    </Box>
  );
}
function SubmitButton() {
  return (
    <Button
      variant="solid"
      sx={{
        '@base': {
          mx: '$4',
          mt: '$4',
        },
        '@md': {
          mx: '$0',
          mt: '$8',
        },
      }}
    >
      <Text fontWeight="$medium" color="$textLight50" fontSize="$sm">
        SUBMIT
      </Text>
    </Button>
  );
}
function MainContent() {
  return (
    <Box
      sx={{
        '@base': {
          pb: '$4',
          _dark: {
            bg: '$backgroundDark700',
          },
        },
        '@md': {
          rounded: '$sm',
          px: '$8',
          pb: '$8',
          pt: '$8',
          _light: {
            bg: '$backgroundLight0',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        },
        '@lg': {
          px: '$24',
        },
        '@xl': {
          px: '$35',
        },
      }}
    >
      <CardSection />
      <Box
        sx={{
          '@base': {
            display: 'none',
          },
          '@md': {
            display: 'flex',
          },
        }}
      >
        <Divider
          sx={{
            _light: {
              bg: '$backgroundLight200',
            },
            _dark: {
              bg: '$backgroundDark700',
            },
          }}
        />
      </Box>
      <AddPhoto />
      <Description />
      <RefundAmount />
      <EmailAddress />
      <SubmitButton />
    </Box>
  );
}

export default function RefundOrder() {
  return (
    <DashboardLayout title="Refund order">
      <MainContent />
    </DashboardLayout>
  );
}
