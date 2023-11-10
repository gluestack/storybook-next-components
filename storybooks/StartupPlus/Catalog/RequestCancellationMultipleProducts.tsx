import React from 'react';
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Radio,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
  Modal,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  Link,
  CircleIcon,
  ModalBackdrop,
  ModalContent,
  RadioGroup,
  Icon,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { ImageSourcePropType } from 'react-native';
import { CheckCircle2 } from 'lucide-react-native';

type ProductProps = {
  id: string;
  imageUri: ImageSourcePropType;
  item: string;
  details: string;
  size: string;
  amount: string;
};

type Order = {
  id: string;
  productList: ProductProps[];
};

const order: Order = {
  id: '#9726895435345',
  productList: [
    {
      id: '1',
      imageUri: require('./assets/images/reebok.png'),
      item: 'Reebok',
      details: 'CL LEGACY',
      size: '8',
      amount: '₹6,599.00',
    },
    {
      id: '2',
      imageUri: require('./assets/images/addidas.png'),
      item: 'Addidas',
      details: 'FLOATRIDE ENERGY',
      size: '8',
      amount: '₹8,999.00',
    },
  ],
};

const reasonList = [
  'I want to change my phone number',
  'I have changed my mind',
  'I have purchased the product elsewhere',
  'Expected delivery time is very long',
  'I want to change address for the order',
  'I want to cancel due to product quality issues',
];

function Card(props: ProductProps) {
  return (
    <HStack alignItems="center" space="md">
      <Checkbox
        size="md"
        isInvalid={false}
        isDisabled={false}
        value={props.id}
        defaultIsChecked={props.id === '2' ? true : false}
        accessibilityLabel="Product"
      >
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
      </Checkbox>

      <HStack
        sx={{
          _light: {
            bg: '$backgroundDark100',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        }}
        rounded="$sm"
        px="$3"
        pt="$3"
        pb="$3"
        flex={1}
        space="md"
        alignItems="center"
      >
        <Link rounded="$sm" href="#">
          <Image source={props.imageUri} alt="Product Image" h="$24" w="$20" />
        </Link>
        <Box>
          <Link href="#">
            <Text
              fontSize="$md"
              fontWeight="$bold"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textLight50',
                },
              }}
            >
              {props.item}
            </Text>
          </Link>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            {props.details}
          </Text>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight500',
              },
              _dark: {
                color: '$textDark400',
              },
            }}
          >
            Size : {props.size}
          </Text>
          <Text
            fontSize="$sm"
            sx={{
              _light: {
                color: '$textLight800',
                fontWeight: '$medium',
              },
              _dark: {
                color: '$textDark50',
                fontWeight: '$bold',
              },
            }}
            mt="$0.5"
          >
            {props.amount}
          </Text>
        </Box>
      </HStack>
    </HStack>
  );
}
function CardSection() {
  return (
    <Box
      sx={{
        '@base': {
          px: '$4',
          pt: '$5',
          pb: '$4',
        },
        '@md': {
          px: '$0',
          pt: '$0',
          pb: '$0',
          mx: '$4',
        },
        '_light': { bg: '$backgroundLight0' },
        '_dark': { bg: '$backgroundDark800' },
      }}
    >
      <Text
        fontSize="$md"
        mb="$4"
        sx={{
          _light: {
            color: '$textLighty800',
          },
          _dark: {
            color: '$textDark50',
          },
        }}
      >
        Order :{order.id}
      </Text>
      <VStack space="lg">
        {order.productList.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </VStack>
    </Box>
  );
}
function ReasonForCancellation() {
  return (
    <Box
      sx={{
        '@base': {
          px: '$4',
          py: '$2',
          mt: '$4',
        },
        '@md': {
          px: '$0',
          py: '$0',
          mt: '$3',
          mb: '$8',
          mx: '$4',
        },
        '_light': { bg: '$backgroundLight0' },
        '_dark': { bg: '$backgroundDark800' },
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
        my="$3"
      >
        Reason for Cancellation
      </Text>
      <RadioGroup>
        {reasonList.map((item, index) => {
          return (
            <Box key={index} my="$3">
              <Radio value={item}>
                <RadioIndicator mr="$2">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>
                  <Text
                    fontSize="$sm"
                    sx={{
                      _light: {
                        color: '$textLight500',
                      },
                      _dark: {
                        color: '$textDark400',
                      },
                    }}
                  >
                    {item}
                  </Text>
                </RadioLabel>
              </Radio>
            </Box>
          );
        })}
      </RadioGroup>
    </Box>
  );
}
function MainContent() {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
    <Box
      flex={1}
      sx={{
        '@base': {
          px: '$0',
          py: '$0',
          _light: {
            bg: '$primary50',
          },
          _dark: {
            bg: '$backgroundDark700',
          },
        },
        '@md': {
          px: '$4',
          py: '$8',
          borderRadius: '$sm',
          _light: {
            bg: '$backgroundLight0',
          },
          _dark: {
            bg: '$backgroundDark800',
          },
        },
        '@lg': {
          px: '$12',
        },
        '@xl': {
          px: '$32',
        },
      }}
    >
      <CardSection />
      <ReasonForCancellation />
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        size="lg"
        w="$full"
      >
        <ModalBackdrop />

        <ModalContent
          sx={{
            '_light': {
              bg: '$backgroundLight50',
            },
            '_dark': {
              bg: '$backgroundDark800',
            },
            '@base': {
              w: '$320',
            },
            '@md': {
              w: '$96',
            },
          }}
          p="$6"
          rounded="$lg"
        >
          <Box alignItems="center">
            <Icon
              as={CheckCircle2}
              h="$16"
              w="$16"
              sx={{
                _light: {
                  color: '$emerald500',
                },
                _dark: {
                  color: '$emerald400',
                },
              }}
            />

            <Text
              fontSize="$md"
              sx={{
                _light: {
                  color: '$textLight800',
                },
                _dark: {
                  color: '$textDark50',
                },
              }}
              textAlign="center"
              mt="$5"
            >
              Your order has been cancelled. Please retain cancellation
              information for records.
            </Text>
            <Button
              variant="solid"
              mt="$6"
              w="$full"
              onPress={() => setModalVisible(false)}
            >
              <Text color="$textLight50" fontSize="$sm">
                VIEW ALL ORDERS
              </Text>
            </Button>
          </Box>
        </ModalContent>
      </Modal>

      <Button
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
        variant="solid"
        mx="$4"
        sx={{
          '@base': {
            mt: '$3',
            mb: '$4',
          },
          '@md': {
            mt: 'auto',
            mb: '$0',
          },
        }}
      >
        <Text color="$textLight50" fontSize="$sm">
          SUBMIT
        </Text>
      </Button>
    </Box>
  );
}

export default function () {
  return (
    <DashboardLayout title="Request Cancellation" displaySidebar>
      <MainContent />
    </DashboardLayout>
  );
}
