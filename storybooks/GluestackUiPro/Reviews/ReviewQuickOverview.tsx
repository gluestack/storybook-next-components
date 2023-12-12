import React, { useRef, useState } from 'react';

import {
  HStack,
  Heading,
  VStack,
  Icon,
  Text,
  Button,
  Box,
  Modal,
  FormControl,
  Input,
  Textarea,
  TextareaInput,
  useToast,
  Toast,
  CloseIcon,
  Pressable,
  ScrollView,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  InputField,
  FormControlLabelText,
  FormControlLabel,
  FormControlError,
  FormControlErrorIcon,
  ButtonText,
  ToastTitle,
} from '@gluestack-ui/themed';
import { AlertTriangle, Star } from 'lucide-react-native';
import { Keyboard } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { FormControlErrorText } from '@gluestack-ui/themed';

type Review = {
  id: string;
  rating: number;
  username: string;
  date: string;
  title: string;
  comment: string;
};

type AddReviewDailogProps = {
  showModal: boolean;
  setShowModal: Function;
  setReviews: Function;
};

const reviewsData: Review[] = [
  {
    id: uuidv4(),
    rating: 4,
    username: 'Christopher',
    date: 'July 15th 2020',
    title: 'Love this product!',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 4,
    username: 'Toby',
    date: 'July 13th 2020',
    title: 'Highly recommended',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 5,
    username: 'Pheobe',
    date: 'July 11th 2020',
    title: 'First class customer service',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 3,
    username: 'Sarah',
    date: 'July 15th 2020',
    title: 'Love my new watch',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 5,
    username: 'Dakota',
    date: 'July 13th 2020',
    title: 'Great price & quality',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: uuidv4(),
    rating: 4,
    username: 'George',
    date: 'July 11th 2020',
    title: 'Best watch I have ever bought',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const RatingIcon = ({
  iconSize,
  isFilled,
}: {
  iconSize: any;
  isFilled: boolean;
}) => {
  return (
    <Icon
      as={Star}
      color={isFilled ? '$primary500' : '$gray400'}
      fill={isFilled ? '$primary500' : '$gray400'}
      size={iconSize}
    />
  );
};

const Rating = ({
  iconSize = 'sm',
  totalRating = 5,
  ratingValue,
  isInteractive = false,
  onChangeRating,
}: {
  iconSize?: any;
  totalRating?: number;
  ratingValue: number;
  isInteractive?: boolean;
  onChangeRating?: (value: any) => void;
}) => {
  const renderRating = Array.from({ length: totalRating }, (_, index) => {
    const starNumber = index + 1;
    const isFilled = starNumber <= ratingValue;
    const handleRatingChange = () => {
      if (isInteractive && onChangeRating) onChangeRating(starNumber);
    };
    return (
      <Pressable disabled={!isInteractive} onPress={handleRatingChange}>
        <RatingIcon iconSize={iconSize} isFilled={isFilled} />
      </Pressable>
    );
  });

  return <HStack>{renderRating}</HStack>;
};

const SingleReview = ({ rating, username, date, title, comment }: Review) => {
  return (
    <VStack
      space="sm"
      mt="$12"
      sx={{
        '@md': {
          flexBasis: '$1/2',
          maxWidth: 360,
        },
        '@lg': {
          maxWidth: 520,
        },
      }}
      flex={1}
    >
      <VStack space="sm">
        <Rating ratingValue={rating} />
        <Text size="sm" color="$gray600">{`by ${username}, ${date}`}</Text>
      </VStack>
      <Text fontWeight="$semibold">{title}</Text>
      <Text flex={1}>{comment}</Text>
    </VStack>
  );
};

const AddReviewDailog = ({
  showModal,
  setShowModal,
  setReviews,
}: AddReviewDailogProps) => {
  const ref = useRef(null);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const toast = useToast();

  const handleKeyPress = () => {
    Keyboard.dismiss();
    handleSubmit(onSubmit)();
  };

  const onSubmit = (data: any) => {
    setShowModal(false);

    setReviews((prev: any) => {
      return [{ ...data, date: 'Aug 12th 2020', id: uuidv4() }, ...prev];
    });
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <ToastTitle>Added Successfully!</ToastTitle>
          </Toast>
        );
      },
    });
    reset();
  };

  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
        reset();
      }}
      initialFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="xl" fontWeight="$semibold">
            Write a review
          </Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <VStack space="md">
            <FormControl isInvalid={errors.username}>
              <VStack space="xs">
                <FormControlLabel>
                  <FormControlLabelText>Name</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={control}
                  rules={{
                    required: 'Name is required!',
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Your name"
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                  name="username"
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.username?.message}
                  </FormControlErrorText>
                </FormControlError>
              </VStack>
            </FormControl>
            <FormControl isInvalid={errors.rating}>
              <VStack space="xs">
                <FormControlLabel>
                  <FormControlLabelText>Rating</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={control}
                  rules={{
                    required: 'Rating is required!',
                  }}
                  render={({ field: { onChange, value } }) => (
                    <Rating
                      iconSize="md"
                      ratingValue={value}
                      isInteractive={true}
                      onChangeRating={onChange}
                    />
                  )}
                  name="rating"
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.rating?.message}
                  </FormControlErrorText>
                </FormControlError>
              </VStack>
            </FormControl>
            <FormControl isInvalid={errors.title}>
              <VStack space="xs">
                <FormControlLabel>
                  <FormControlLabelText>Title</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  control={control}
                  rules={{
                    required: 'Title is required!',
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Your title"
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                  name="title"
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.title?.message}
                  </FormControlErrorText>
                </FormControlError>
              </VStack>
            </FormControl>
            <FormControl isInvalid={errors.comment}>
              <VStack space="xs">
                <FormControlLabel>
                  <FormControlLabelText>Comment</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="comment"
                  control={control}
                  rules={{
                    maxLength: {
                      value: 100,
                      message: 'Maximum length is 100 characters',
                    },
                    required: 'Comment is required!',
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Textarea>
                      <TextareaInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Your comment"
                      />
                    </Textarea>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.comment?.message}
                  </FormControlErrorText>
                </FormControlError>
              </VStack>
            </FormControl>
          </VStack>
          <Button
            mt="$4"
            sx={{
              h: 50,
              alignSelf: 'flex-start',
            }}
            size="sm"
            onPress={handleSubmit(onSubmit)}
          >
            <ButtonText fontSize="$lg">Submit review</ButtonText>
          </Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const ReviewQuickOverview = (_props: any) => {
  const [reviews, setReviews] = useState<Review[]>(reviewsData);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [maxLimit, setMaxLimit] = useState<number>(6);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  const averageStartValue = Math.floor(averageRating);

  const handleLoadMore = () => {
    setMaxLimit(reviews.length);
    setLoadMoreVisible(false);
  };

  return (
    <ScrollView>
      {showModal && (
        <AddReviewDailog
          showModal={showModal}
          setShowModal={setShowModal}
          setReviews={setReviews}
        />
      )}
      <VStack
        width="$full"
        mx="auto"
        maxWidth={1280}
        p="$4"
        sx={{
          '@md': {
            px: '$8',
          },
        }}
      >
        <Heading size="xl" fontWeight="$semibold">
          Customer reviews
        </Heading>
        <VStack space="md" mt="$4">
          <HStack space="md" alignItems="center">
            <Text size="4xl" fontWeight="$semibold">
              {averageRating.toFixed(1)}
            </Text>
            <VStack space="xs">
              <Rating iconSize="sm" ratingValue={averageStartValue} />
              <Text color="$gray600">{`Based on ${reviews.length} reviews`}</Text>
            </VStack>
          </HStack>
          <HStack>
            <Button
              variant="outline"
              borderColor="$borderLight100"
              onPress={handleLoadMore}
              mr="$2"
              display={loadMoreVisible ? 'flex' : 'none'}
            >
              <ButtonText>See all reviews</ButtonText>
            </Button>
            <Button onPress={() => setShowModal(true)}>
              <ButtonText>Write a review</ButtonText>
            </Button>
          </HStack>
        </VStack>

        <Box
          sx={{
            '@md': {
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            },
          }}
        >
          {reviews.slice(0, maxLimit).map((review) => (
            <SingleReview {...review} />
          ))}
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default ReviewQuickOverview;
