import React, { useState, FC } from 'react';
import type { ImageSourcePropType } from 'react-native';
import {
  HStack,
  Icon,
  VStack,
  Button,
  Text,
  Box,
  Pressable,
  Image,
  Avatar,
  StarIcon,
  FavouriteIcon,
  AvatarImage,
  ButtonText,
  Heading,
  ButtonIcon,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';

type SizesType = {
  size: string;
};

type ProductType = {
  title: string;
  category: string;
  rate: string;
  rating: number;
  numberOfRatings: number;
  description: string;
};

type ReviewType = {
  imageUrl: ImageSourcePropType;
  name: string;
  time: string;
  review: string;
};

const product: ProductType = {
  title: 'Body Suit',
  category: 'Mother care',
  rate: '500',
  rating: 4.9,
  numberOfRatings: 120,
  description: `Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.Your Body suit has a round neck with detail along the shoulder,short sleeves and snap button closer along the front.`,
};

const sizeOptions: SizesType[] = [
  {
    size: 'New Born',
  },
  {
    size: 'Tiny Baby',
  },
  {
    size: '0-3 M',
  },
];

const reviews: ReviewType[] = [
  {
    imageUrl: require('./assets/images/laura.png'),
    name: 'Laura Jones',
    time: '02 Jan 2021',
    review:
      "I ordered this product for my 2 M old baby but it's too small. Go for 3-6M size even if you're ordering for a 3M old. Product quality is good.",
  },
  {
    imageUrl: require('./assets/images/wade.png'),
    name: 'Wade Warren',
    time: '02 Jan 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
];

const AddToCartButton = () => {
  const [favorite, setFavorite] = useState(false);
  return (
    <HStack space="lg" alignItems="center">
      <Button
        size="lg"
        variant="solid"
        onPress={() => setFavorite(!favorite)}
        bg="$primary50"
        sx={{
          _dark: { bg: '$backgroundDark700' },
        }}
      >
        {favorite ? (
          <ButtonIcon
            as={FavouriteIcon}
            size="lg"
            color="$primary500"
            sx={{
              _light: {
                props: {
                  fill: '$primary500',
                },
              },
              _dark: {
                color: '$primary300',
                props: {
                  fill: '$primary300',
                },
              },
            }}
          />
        ) : (
          <ButtonIcon
            as={FavouriteIcon}
            size="lg"
            color="$primary500"
            sx={{
              _dark: {
                color: '$primary300',
              },
            }}
          />
        )}
      </Button>

      <Button flex={1} size="lg" variant="solid">
        <ButtonText fontWeight="$medium">CONTINUE</ButtonText>
      </Button>
    </HStack>
  );
};

function SizeOptions({ options }: { options: SizesType[] }) {
  const [selectedSize, setSelectedSize] = useState<string | null>('New Born');
  const handleSizeClick = (size: string) => {
    setSelectedSize((prevSelectedSize) => {
      if (prevSelectedSize === size) {
        return prevSelectedSize;
      } else {
        return size;
      }
    });
  };
  return (
    <HStack space="sm" alignItems="center">
      {options.map((item, index) => {
        const isSelected = item.size === selectedSize;
        return (
          <Button
            key={index + ''}
            size="sm"
            sx={{
              _dark: {
                'bg': isSelected ? '$backgroundDark500' : '$backgroundDark700',
                ':hover': {
                  bg: '$backgroundDark600',
                },
                ':pressed': {
                  bg: '$backgroundDark700',
                },
              },

              _light: {
                'bg': isSelected ? '$primary200' : '$primary50',
                ':hover': {
                  bg: '$primary100',
                },
                ':pressed': {
                  bg: '$primary50',
                },
              },
            }}
            onPress={() => handleSizeClick(item.size)}
          >
            <ButtonText
              color={isSelected ? '$textLight900' : '$textLight800'}
              sx={{
                _dark: { color: isSelected ? '$textDark50' : '$textDark100' },
              }}
              fontWeight="$normal"
            >
              {item.size}
            </ButtonText>
          </Button>
        );
      })}
    </HStack>
  );
}

function SizeChart({ options }: { options: SizesType[] }) {
  return (
    <VStack space="md">
      <HStack alignItems="center">
        <Text
          fontSize="$sm"
          fontWeight="$normal"
          color="$textLight800"
          sx={{
            _dark: { color: '$textDark50' },
          }}
        >
          Select Size
        </Text>
        <Text
          fontSize="$sm"
          fontWeight="$normal"
          color="$textLight500"
          sx={{
            _dark: { color: '$textDark400' },
          }}
        >
          {' '}
          (Age Group)
        </Text>

        <Button variant="link" ml="auto">
          <ButtonText>Size Chart</ButtonText>
        </Button>
      </HStack>
      <SizeOptions options={options} />
    </VStack>
  );
}

function ProductInfo({ productInfo }: { productInfo: ProductType }) {
  return (
    <Box>
      <HStack
        alignItems="center"
        space="xs"
        sx={{
          '@base': {
            mt: '$4',
          },
          '@md': {
            mt: '$0',
          },
        }}
      >
        <Heading fontSize="$lg" fontWeight="$medium">
          {productInfo.title}
        </Heading>
        <Icon
          color="$amber400"
          as={StarIcon}
          sx={{
            props: {
              fill: '$amber400',
            },
          }}
          ml="auto"
        />
        <Text
          fontSize="$sm"
          sx={{
            _dark: {
              color: '$textDark50',
            },
          }}
          color="$textLight800"
        >
          {productInfo.rating}
        </Text>
        <Text
          fontSize="$sm"
          fontWeight="$normal"
          color="$textLight500"
          sx={{
            _dark: {
              color: '$textDark400',
            },
          }}
        >
          ({productInfo.numberOfRatings})
        </Text>
      </HStack>

      <Text
        fontSize="$md"
        fontWeight="$normal"
        sx={{
          _dark: {
            color: '$textDark400',
          },
        }}
        color="$textLight500"
      >
        {productInfo.category}
      </Text>
      <Text
        fontSize="$xl"
        fontWeight="$medium"
        sx={{
          _dark: {
            color: '$textDark50',
          },
        }}
        color="$textLight800"
        lineHeight="$2xl"
      >
        ₹{productInfo.rate}
      </Text>
    </Box>
  );
}

function Description({ productDescription }: { productDescription: string }) {
  return <Text fontSize="$sm">{productDescription}</Text>;
}

const Review: FC = () => {
  return (
    <VStack space="4xl">
      {reviews.map((item, idx) => {
        return (
          <VStack key={idx} space="sm">
            <HStack space="sm">
              <Avatar size="sm">
                <AvatarImage source={item.imageUrl} />
              </Avatar>

              <VStack>
                <Text fontSize="$sm" fontWeight="$medium">
                  {item.name}
                </Text>

                <HStack space="xs">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Icon
                      key={index}
                      color="$amber400"
                      as={StarIcon}
                      sx={{
                        props: {
                          fill: '$amber400',
                        },
                      }}
                      size="2xs"
                    />
                  ))}
                </HStack>
              </VStack>
              <Text fontSize="$sm" ml="auto">
                {item.time}
              </Text>
            </HStack>
            <Text alignItems="center" fontSize="$sm">
              {item.review}
            </Text>
          </VStack>
        );
      })}
    </VStack>
  );
};

const tabs = [
  {
    id: 1,
    title: 'Description',
    component: <Description productDescription={product.description} />,
  },
  {
    id: 2,
    title: 'Review',
    component: <Review />,
  },
];

function TabItem({
  tabName,
  currentTab,
  handleTabChange,
}: {
  tabName: string;
  currentTab: string;
  handleTabChange: (tabTitle: string) => void;
}) {
  const isTabSelected = tabName === currentTab;
  return (
    <Pressable
      onPress={() => {
        handleTabChange(tabName);
      }}
    >
      <VStack>
        <Text
          fontSize="$sm"
          fontWeight="$medium"
          color={isTabSelected ? '$primary500' : '$textLight400'}
          sx={{
            _dark: {
              color: isTabSelected ? '$primary300' : '$textDark400',
            },
          }}
          px="$4"
          py="$2"
        >
          {tabName}
        </Text>

        {tabName === currentTab && (
          <Box
            borderTopLeftRadius="$sm"
            borderTopRightRadius="$sm"
            bg="$primary500"
            sx={{
              _dark: {
                bg: '$primary300',
              },
            }}
            h="$1"
          />
        )}
      </VStack>
    </Pressable>
  );
}

function Tabs() {
  const [tabName, setTabName] = React.useState('Description');
  const [tabChildren, setTabChildren] = useState<React.ReactNode>(
    <Description productDescription={product.description} />
  );
  return (
    <>
      <HStack space="xs" borderRadius="$sm">
        {tabs.map(({ id, title, component }) => (
          <TabItem
            key={id}
            tabName={title}
            currentTab={tabName}
            handleTabChange={(tab) => {
              setTabName(tab);
              setTabChildren(component);
            }}
          />
        ))}
      </HStack>
      {tabChildren}
    </>
  );
}

export default function ProductDetail() {
  return (
    <DashboardLayout displaySidebar={false} title="Body Suit">
      <VStack
        sx={{
          '_dark': { bg: '$backgroundDark800' },
          '@base': {
            px: '$4',
            py: '$5',
            flexDirection: 'column',
          },
          '@md': {
            borderRadius: '$sm',
            px: '$8',
            py: '$8',
            flexDirection: 'row',
          },
        }}
        bg="$backgroundLight0"
        flex={1}
      >
        <Box
          p="$2"
          borderRadius="$md"
          justifyContent="center"
          alignItems="center"
          bg="$backgroundLight100"
          sx={{
            '_dark': { bg: '$backgroundDark700' },
            '@lg': { w: '$2/4' },
            '@base': {
              w: '$full',
              h: '$64',
              mr: '$0',
            },
            '@md': {
              w: '$2/4',
              h: '$622',
              mr: '$4',
            },
          }}
        >
          <Image
            w="$full"
            sx={{
              '@base': {
                h: '$64',
                borderRadius: '$none',
              },
              '@md': {
                borderRadius: '$lg',
                h: '$full',
              },
            }}
            alt="Alternate Text"
            source={require('./assets/images/tinybaby.png')}
          />
        </Box>

        <VStack
          space="xl"
          sx={{
            '@md': {
              display: 'none',
            },
          }}
        >
          <ProductInfo productInfo={product} />
          <SizeChart options={sizeOptions} />
          <Tabs />
          <AddToCartButton />
        </VStack>

        <VStack
          flex={1}
          space="xl"
          display="none"
          sx={{
            '@md': {
              display: 'flex',
            },
          }}
        >
          <ProductInfo productInfo={product} />
          <SizeChart options={sizeOptions} />
          <AddToCartButton />
          <Tabs />
        </VStack>
      </VStack>
    </DashboardLayout>
  );
}
