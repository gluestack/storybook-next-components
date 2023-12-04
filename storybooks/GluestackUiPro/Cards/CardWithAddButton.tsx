import React, { useState, useRef } from 'react';
import {
  Button,
  HStack,
  Heading,
  Text,
  VStack,
  Modal,
  Icon,
  Input,
  Textarea,
  FormControl,
  CloseIcon,
  Toast,
  useToast,
  InputField,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlError,
  ModalFooter,
  TextareaInput,
  ScrollView,
  ButtonText,
} from '@gluestack-ui/themed';
import { Edit2, Trash2, AlertTriangle } from 'lucide-react-native';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

type Experience = {
  id?: string;
  title?: string;
  description?: string;
};

type List = {
  item: Experience;
  index: number;
  setShowModal: Function;
  setEditExperience: Function;
  setCardData: Function;
};

type AddModal = {
  showModal: boolean;
  setShowModal: Function;
  setCardData: Function;
  editExperience: Experience;
};

type DeleteModal = {
  deleteModal: boolean;
  setDeleteModal: Function;
  setCardData: Function;
  item: Experience;
};

const EXPERIENCE_DATA: Experience[] = [
  {
    id: uuidv4(),
    title: 'UX Strategist & Sales Funnel Designer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: uuidv4(),
    title: 'Freelance Graphic & Web Designer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

const AddCardModal = ({
  showModal,
  setShowModal,
  setCardData,
  editExperience,
}: AddModal) => {
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
    if (Object.keys(editExperience).length !== 0) {
      setCardData((prev: any) => {
        const updatedArray = prev.map((item: any) => {
          if (item.id === editExperience.id) {
            return { ...data, id: item.id };
          }
          return item;
        });
        return updatedArray;
      });
    } else {
      setCardData((prev: any) => {
        return [...prev, { ...data, id: uuidv4() }];
      });
    }
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="accent" action="success">
            <Toast.Title>
              {editExperience?.title
                ? 'Edited Successfully!'
                : 'Added Successfully!'}
            </Toast.Title>
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
          <Heading>
            {editExperience?.title ? 'Edit Experience' : 'Add Experience'}
          </Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <VStack space="md">
            <FormControl isInvalid={errors.title}>
              <VStack space="xs">
                <Controller
                  control={control}
                  rules={{
                    required: 'Title is required!',
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input w="$full" ref={ref}>
                      <InputField
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Enter title"
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                    </Input>
                  )}
                  name="title"
                  defaultValue={
                    editExperience?.title ? editExperience?.title : ''
                  }
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.title?.message}
                  </FormControlErrorText>
                </FormControlError>
              </VStack>
            </FormControl>
            <FormControl isInvalid={errors.description}>
              <VStack space="xs">
                <Controller
                  name="description"
                  defaultValue={
                    editExperience?.description
                      ? editExperience?.description
                      : ''
                  }
                  control={control}
                  rules={{
                    maxLength: {
                      value: 100,
                      message: 'Maximum length is 100 characters',
                    },
                  }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    // @ts-ignore
                    <Textarea w="$full">
                      <TextareaInput
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        type="text"
                        placeholder="Enter description"
                      />
                    </Textarea>
                  )}
                />

                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.description?.message}
                  </FormControlErrorText>
                </FormControlError>
              </VStack>
            </FormControl>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              setShowModal(false);
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button size="sm" action="positive" onPress={handleSubmit(onSubmit)}>
            <ButtonText>Save</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const DeleteCardModal = ({
  deleteModal,
  setDeleteModal,
  item,
  setCardData,
}: DeleteModal) => {
  const toast = useToast();

  const deleteCard = (id: string) => {
    setCardData((prev: any) => {
      return prev.filter((x: any) => x.id !== id);
    });
    toast.show({
      placement: 'bottom right',
      render: ({ toastid }) => {
        return (
          <Toast nativeID={toastid} variant="accent" action="success">
            <Toast.Title>Deleted Successfully!</Toast.Title>
          </Toast>
        );
      },
    });
  };

  return (
    <Modal
      isOpen={deleteModal}
      onClose={() => {
        setDeleteModal(false);
      }}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading>Delete Experience</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Text fontSize="$sm">Are you sure you want to delete?</Text>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            mr="$3"
            onPress={() => {
              setDeleteModal(false);
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            size="sm"
            action="negative"
            onPress={() => {
              if (item.id) deleteCard(item.id);
              setDeleteModal(false);
            }}
          >
            <ButtonText>Delete</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const List = ({ item, setCardData, setShowModal, setEditExperience }: List) => {
  const [deleteModal, setDeleteModal] = useState(false);

  return (
    <HStack
      alignItems="flex-start"
      borderTopWidth="$1"
      borderTopColor="$borderDark100"
      pt="$4"
      justifyContent="space-between"
      sx={{
        _dark: {
          borderTopColor: '$borderDark700',
        },
      }}
    >
      <VStack flex={1}>
        <Heading m="$0" lineHeight={'$md'} fontSize="$sm" fontWeight="$normal">
          {item.title}
        </Heading>
        <Text
          mt="$0.5"
          sx={{ _dark: { color: '$textDark400' } }}
          color="$textLight600"
          size="sm"
          fontWeight="$light"
        >
          {item.description}
        </Text>
      </VStack>
      <HStack
        sx={{
          '@base': { flexDirection: 'column' },
          '@sm': { flexDirection: 'row', alignItems: 'center' },
        }}
      >
        <Button
          mr="$1"
          action="secondary"
          variant="outline"
          borderColor="transparent"
          onPress={() => {
            setShowModal(true);
            setEditExperience(item);
          }}
        >
          <ButtonText
            sx={{ _dark: { color: '$backgroundLight0' } }}
            mt="$1"
            color="$backgroundDark950"
          >
            <Edit2 width={20} height={20} />
          </ButtonText>
        </Button>
        <Button
          action="secondary"
          variant="outline"
          borderColor="transparent"
          onPress={() => setDeleteModal(true)}
        >
          <ButtonText
            sx={{ _dark: { color: '$backgroundLight0' } }}
            mt="$1"
            color="$backgroundDark950"
          >
            <Trash2 width={20} height={20} />
          </ButtonText>
        </Button>
        <DeleteCardModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          setCardData={setCardData}
          item={item}
        />
      </HStack>
    </HStack>
  );
};

const CardMain = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [cardData, setCardData] = useState<Experience[]>(EXPERIENCE_DATA);
  const [editExperience, setEditExperience] = useState<Experience>({});

  React.useEffect(() => {
    if (!showModal) {
      setEditExperience({});
    }
  }, [showModal]);

  return (
    <VStack
      p="$6"
      m="$4"
      rounded="$lg"
      space="md"
      bg="$backgroundLight0"
      sx={{
        '@base': { px: '$4', pt: '$4', mx: '$4', w: '$auto' },
        '@md': { mx: '$auto', w: 700 },
        '_dark': { bg: '$backgroundDark950' },
        'shadowColor': '$gray600',
        'shadowOpacity': '$10',
        'shadowRadius': '$1',
        'elevation': '$20',
      }}
    >
      <VStack
        justifyContent="space-between"
        sx={{
          '@sm': { flexDirection: 'row', alignItems: 'center' },
        }}
      >
        <VStack
          sx={{
            '@base': { w: '$full' },
            '@sm': { w: '85%' },
          }}
        >
          <Heading m="$0" size="md" fontWeight="$medium">
            Experiences
          </Heading>
          <Text
            mt="$1"
            sx={{ _dark: { color: '$textDark400' } }}
            color="$textLight600"
            size="sm"
            fontWeight="$light"
          >
            Write in a few short sentences where you have already worked.
          </Text>
        </VStack>
        <Button
          mt="$4"
          sx={{ '@sm': { mt: '$0' } }}
          onPress={() => setShowModal(true)}
        >
          <ButtonText>Add</ButtonText>
        </Button>
        {showModal && (
          <AddCardModal
            showModal={showModal}
            setShowModal={setShowModal}
            setCardData={setCardData}
            editExperience={editExperience}
          />
        )}
      </VStack>
      {cardData.map((item, index) => (
        <List
          item={item}
          setCardData={setCardData}
          index={index}
          setShowModal={setShowModal}
          setEditExperience={setEditExperience}
        />
      ))}
    </VStack>
  );
};

const CardWithAddButton = () => {
  return <CardMain />;
};

export default CardWithAddButton;
