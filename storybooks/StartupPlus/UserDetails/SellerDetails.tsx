import React, { useState } from 'react';
import {
  Box,
  HStack,
  Icon,
  Text,
  VStack,
  Avatar,
  Image,
  Pressable,
  Button,
  AvatarImage,
  Heading,
  ButtonText,
} from '@gluestack-ui/themed';

import { StarIcon } from 'lucide-react-native';

import DashboardLayout from '../Layouts/DashboardLayout';

type SellerType = {
  title: string;
  collection: string;
  date: string;
  rating: number;
  numberOfRatings: number;
  OtherItems: string;
};

type ReviewsType = {
  imageUrl: any;
  name: string;
  time: string;
  review: string;
};

const seller: SellerType = {
  title: 'Cool Store',
  collection: '843 Products',
  date: '24th Sep 2018',
  rating: 4.9,
  numberOfRatings: 120,
  OtherItems:
    'Other Items : Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch. Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.',
};

const tabs = [
  {
    id: 1,
    title: 'Reviews',
    component: <Reviews />,
  },
  {
    id: 2,
    title: 'Other items',
    component: <OtherItems sellerOtherItems={seller.OtherItems} />,
  },
];

const reviews: ReviewsType[] = [
  {
    imageUrl: require('./assets/images/helena.png'),
    name: 'Helena Nava',
    time: '02 Jan 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
  {
    imageUrl: require('./assets/images/Kory.png'),
    name: 'Kory John',
    time: '02 Jan 2021',
    review:
      'I loved the quality of their products. Highly recommended to everyone who is looking for comfortable bodysuits for their kids.',
  },
];

type Feedback = {
  reviewNumber: string | number;
  reviewText: string;
};
const feedback: Feedback[] = [
  {
    reviewNumber: '97%',
    reviewText: '  Positive Feedback',
  },
  {
    reviewNumber: ' 50k',
    reviewText: ' Customers',
  },
];

function BannerImage() {
  return (
    <Box
      p="$2"
      mr="$0"
      bg="$backgroundLight100"
      sx={{
        'h': '$212',
        '_dark': { bg: '$backgroundDark700' },
        '@md': { w: '$1/2', h: '$full', mr: '$4' },
        '@lg': { w: '$1/2' },
      }}
      w="$full"
      borderRadius="$sm"
      alignItems="center"
      justifyContent="center"
    >
      <Image
        w="$full"
        rounded="$sm"
        sx={{
          'h': '$48',
          '@md': { h: '$full' },
        }}
        alt="Alternate Text"
        source={require('./assets/images/clotheshanger.png')}
      />
    </Box>
  );
}
function SellerInfo({ sellerInfo }: { sellerInfo: SellerType }) {
  return (
    <>
      <HStack
        justifyContent="space-between"
        alignItems="center"
        mt="$4"
        sx={{ '@md': { mt: '$0' } }}
      >
        <Heading
          fontSize="$lg"
          color="$textLight800"
          sx={{
            _dark: { color: '$textLight50' },
          }}
          fontWeight="$medium"
        >
          {sellerInfo.title}
        </Heading>
        <HStack alignItems="center">
          <Icon
            color="$amber400"
            sx={{ props: { fill: '$amber400' } }}
            as={StarIcon}
            ml="$auto"
            size="md"
          />
          <Text
            color="$textLight800"
            sx={{
              _dark: { color: '$textDark50' },
            }}
            mx="$1"
          >
            {sellerInfo.rating}
          </Text>
          <Text
            color="$textLight500"
            sx={{
              _dark: { color: '$textDark400' },
            }}
          >
            ({sellerInfo.numberOfRatings})
          </Text>
        </HStack>
      </HStack>

      <Text
        fontSize="$md"
        fontWeight="$medium"
        color="$textLight500"
        sx={{
          _dark: { color: '$textDark400' },
        }}
      >
        {sellerInfo.collection}
      </Text>
      <Text
        color="$textLight500"
        fontSize="$xs"
        sx={{
          _dark: { color: '$textDark400' },
        }}
      >
        {sellerInfo.date}
      </Text>
    </>
  );
}

function Category() {
  return (
    <HStack
      mt="$7"
      mb="$5"
      space="lg"
      sx={{
        '@md': {
          my: '$8',
        },
      }}
      alignItems="stretch"
    >
      {feedback.map((item, index) => {
        return (
          <VStack
            bg="$primary50"
            sx={{
              _dark: { bg: '$backgroundDark700' },
            }}
            py="$5"
            flex={1}
            alignItems="center"
            justifyContent="center"
            rounded="$sm"
            key={index}
          >
            <Text
              fontSize="$xl"
              fontWeight="$bold"
              color="$primary500"
              textAlign="center"
            >
              {item.reviewNumber}
            </Text>
            <Text
              fontSize="$md"
              color="$textLight800"
              sx={{
                _dark: { color: '$textDark50' },
              }}
              textAlign="center"
            >
              {item.reviewText}
            </Text>
          </VStack>
        );
      })}
    </HStack>
  );
}

function OtherItems({ sellerOtherItems }: { sellerOtherItems: string }) {
  return (
    <Text
      fontSize="$sm"
      color="$textLight800"
      sx={{
        _dark: { color: '$textDark400' },
      }}
      mt="$4"
    >
      {sellerOtherItems}
    </Text>
  );
}

function Reviews() {
  return (
    <VStack>
      {reviews.map((item, idx) => {
        return (
          <VStack
            key={idx}
            space="md"
            mt="$4"
            sx={{
              '@md': { mt: '$6' },
            }}
          >
            <HStack space="sm">
              <Avatar size="md">
                <AvatarImage source={item.imageUrl} />
              </Avatar>
              <VStack>
                <Text
                  fontSize="$sm"
                  fontWeight="$medium"
                  color="$textLight800"
                  sx={{
                    _dark: { color: '$textDark50' },
                  }}
                >
                  {item.name}
                </Text>
                <HStack>
                  {Array.from({ length: 5 }, (_, index) => (
                    <Icon
                      color="$amber400"
                      key={index}
                      sx={{ props: { fill: '$amber400' } }}
                      as={StarIcon}
                      ml="$auto"
                      size="md"
                    />
                  ))}
                </HStack>
              </VStack>
              <Text
                fontSize="$sm"
                ml="auto"
                color="$textLight500"
                sx={{
                  _dark: { color: '$textDark400' },
                }}
              >
                {item.time}
              </Text>
            </HStack>
            <Text
              alignItems="center"
              color="$textLight800"
              sx={{
                _dark: { color: '$textDark50' },
              }}
              fontSize="$sm"
            >
              {item.review}
            </Text>
          </VStack>
        );
      })}
    </VStack>
  );
}
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
          letterSpacing="$xl"
          px="$4"
          py="$2"
          color={isTabSelected ? '$primary500' : '$textLight400'}
          sx={{
            _dark: {
              color: isTabSelected ? '$primary300' : '$textDark400',
            },
          }}
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
  const [tabName, setTabName] = React.useState('Reviews');
  const [tabChildren, setTabChildren] = useState<React.ReactNode>(<Reviews />);
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
const AddToCartButton = () => {
  return (
    <Button
      size="lg"
      variant="solid"
      mt="$5"
      sx={{
        '@md': { mt: '$0', mb: '$8' },
      }}
    >
      <ButtonText>CONTINUE</ButtonText>
    </Button>
  );
};

function MainContent() {
  return (
    <VStack
      bg="$backgroundLight0"
      borderRadius="$lg"
      px="$4"
      py="$5"
      flex={1}
      sx={{
        '_dark': { bg: '$backgroundDark800' },
        '@md': { rounded: '$sm', px: '$8', py: '$8', flexDirection: 'row' },
      }}
    >
      <BannerImage />
      <Box
        sx={{
          '@md': { display: 'none' },
        }}
        display="flex"
      >
        <SellerInfo sellerInfo={seller} />
        <Category />
        <Tabs />
        <AddToCartButton />
      </Box>

      <Box
        flex={1}
        sx={{
          '@md': { display: 'flex' },
        }}
        display="none"
      >
        <SellerInfo sellerInfo={seller} />
        <Category />
        <AddToCartButton />
        <Tabs />
      </Box>
    </VStack>
  );
}
export default function () {
  return (
    <DashboardLayout title="Cool Store" displaySidebar={false}>
      <MainContent />
    </DashboardLayout>
  );
}
