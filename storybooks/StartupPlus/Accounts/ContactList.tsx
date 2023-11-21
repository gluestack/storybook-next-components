import React from 'react';
import {
  Avatar,
  AvatarImage,
  Box,
  Button,
  ButtonText,
  Divider,
  Fab,
  FabIcon,
  HStack,
  Icon,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Pressable,
  SearchIcon,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import DashboardLayout from '../Layouts/DashboardLayout';
import { ImageSourcePropType, SectionList } from 'react-native';
import { Keyboard, MoreVertical } from 'lucide-react-native';
const DATA = [
  {
    category: 'Favourites',
    group: null,
    data: [
      {
        imageUri: require('./assets/images/kristin.png'),
        name: 'Kristin Watson',
        email: 'Kristinwatson@gmail.com',
        contactNumber: '(480) 555-0103',
      },
      {
        imageUri: require('./assets/images/william.png'),
        name: 'William James',
        email: 'Williamjames@gmail.com',
        contactNumber: '(480) 555-0103',
      },
    ],
  },
  {
    category: 'Contacts',
    group: 'A',
    data: [
      {
        imageUri: require('./assets/images/alan.png'),
        name: 'Alan Watson',
        email: 'Alanwatson@gmail.com',
        contactNumber: '(480) 555-0103',
      },
      {
        imageUri: require('./assets/images/anny.png'),
        name: 'Anny Geller',
        email: 'Annygeller@gmail.com',
        contactNumber: '(480) 555-0103',
      },
      {
        imageUri: require('./assets/images/aeromy.png'),
        name: 'Aeromy Watson',
        email: 'Alerowatson@gmail.com',
        contactNumber: '(480) 555-0103',
      },
    ],
  },
  {
    category: 'Contacts',
    group: 'B',
    data: [
      {
        group: 'B',
        imageUri: require('./assets/images/brandy.png'),
        name: 'Brandy Watson',
        email: 'Brandywatson@gmail.com',
        contactNumber: '(480) 555-0103',
      },
      {
        group: 'B',
        imageUri: require('./assets/images/bell.png'),
        name: 'Bell',
        email: 'Bell@gmail.com',
        contactNumber: '(480) 555-0103',
      },
      {
        group: 'B',
        imageUri: require('./assets/images/alexandria.png'),
        name: 'Brandy Watson',
        email: 'Brandywatson@gmail.com',
        contactNumber: '(480) 555-0103',
      },
    ],
  },
];
type ContactProps = {
  imageUri: ImageSourcePropType;
  name: string;
  email: string;
  contactNumber: string;
};
type ListItemProps = {
  contact: ContactProps;
};
function ContactItemMobile({ contact }: ListItemProps) {
  return (
    <Pressable
      mr="$6"
      p="$1"
      sx={{
        ':active': {
          _dark: { bg: '$backgroundDark600' },
          _light: { bg: '$backgroundLight200' },
          borderRadius: '$sm',
        },
      }}
    >
      <HStack alignItems="center" space="md">
        <Avatar>
          <AvatarImage source={contact.imageUri} />
        </Avatar>
        <Text fontSize="$md">{contact.name}</Text>
      </HStack>
    </Pressable>
  );
}
function ContactItem({ contact }: ListItemProps) {
  return (
    <Box p="$2">
      <Pressable
        sx={{
          ':hover': {
            _dark: { bg: '$backgroundDark600' },
            _light: { bg: '$backgroundLight100' },
          },
          ':active': {
            _dark: { bg: '$backgroundLight700' },
            _light: { bg: '$backgroundLight200' },
          },
        }}
        flex={1}
        borderRadius="$sm"
      >
        <HStack
          px="$6"
          py="$2"
          space="sm"
          alignItems="center"
          justifyContent="space-between"
        >
          <HStack alignItems="center" space="md" flex={1}>
            <Avatar>
              <AvatarImage source={contact.imageUri} />
            </Avatar>

            <Text
              fontWeight="$medium"
              fontSize="$sm"
              sx={{
                _light: { color: '$textLight500' },
                _dark: { color: '$textDark400' },
              }}
              w="$full"
            >
              {contact.name}
            </Text>
          </HStack>
          <HStack flex={1}>
            <Text
              flex={1}
              fontWeight="$medium"
              fontSize="$sm"
              sx={{
                _light: { color: '$textLight500' },
                _dark: { color: '$textDark400' },
              }}
              w="$full"
            >
              {contact.email}
            </Text>
          </HStack>
          <Text
            flex={1}
            fontWeight="$medium"
            fontSize="$sm"
            sx={{
              _light: { color: '$textLight500' },
              _dark: { color: '$textDark400' },
            }}
            w="$full"
          >
            {contact.contactNumber}
          </Text>

          <Icon as={MoreVertical} />
        </HStack>
      </Pressable>
    </Box>
  );
}
const ContactData = () => {
  const [searchText, setSearchText] = React.useState('');
  const [contactData, setContactData] = React.useState(DATA);
  React.useEffect(() => {
    const result = filterSearch(searchText);
    setContactData(result);
  }, [searchText]);
  function filterSearch(txt: string) {
    const filteredData: any[] = [];
    DATA.map((_data) => {
      const groupData = _data.data.filter((item) => {
        if (
          item.name.toLowerCase().includes(txt.toLowerCase()) ||
          item.email.toLowerCase().includes(txt.toLowerCase()) ||
          item.contactNumber.toLowerCase().includes(txt.toLowerCase())
        ) {
          return {
            ...item,
          };
        }
        return;
      });
      if (groupData.length > 0) {
        filteredData.push({
          ..._data,
          data: groupData,
        });
      }
    });
    return filteredData;
  }
  const textstyle = {
    fontWeight: '$semibold',
    flex: 1,
  };
  return (
    <>
      <Box
        sx={{
          '@md': { display: 'none' },
          'px': '$4',
        }}
      >
        <>
          <Input
            sx={{
              _dark: { borderColor: '$backgroundDark500' },
              _light: { borderColor: '$backgroundLight300' },
            }}
          >
            <InputSlot ml="$3">
              <InputIcon as={SearchIcon} size="lg" />
            </InputSlot>
            <InputField
              fontSize="$md"
              fontWeight="$medium"
              placeholder="Search"
            />
          </Input>
          <SectionList
            keyExtractor={(item, index) => item.name + index}
            sections={contactData}
            contentContainerStyle={{ flexGrow: 1, paddingBottom: 16 }}
            showsVerticalScrollIndicator={false}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={({ section: { category, group } }) => {
              if (!group)
                return (
                  <Text
                    fontSize="$sm"
                    fontWeight="$bold"
                    my="$4"
                    sx={{
                      _light: { color: '$primary500' },
                      _dark: { color: '$primary300' },
                    }}
                  >
                    {category}
                  </Text>
                );
              return (
                <HStack alignItems="center">
                  <Text
                    fontSize="$md"
                    sx={{
                      _light: { color: '$textLight800' },
                      _dark: { color: '$textDark50' },
                    }}
                    my="$5"
                  >
                    {group}
                  </Text>
                  <Divider
                    ml="$2"
                    mr="$8"
                    sx={{
                      _light: { bg: '$backgroundLight200' },
                      _dark: { bg: '$backgroundDark600' },
                    }}
                    flex={1}
                  />
                </HStack>
              );
            }}
            renderItem={({ item }) => {
              return <ContactItemMobile contact={item} />;
            }}
            ItemSeparatorComponent={() => <Box h="$4" />}
          />
        </>
      </Box>

      <Box sx={{ '@md': { display: 'flex' }, '@base': { display: 'none' } }}>
        <VStack space="md">
          <HStack
            flexWrap="wrap"
            flex={1}
            space="sm"
            justifyContent="space-between"
            sx={{ '@lg': { px: '$0' } }}
          >
            <Input
              sx={{
                _dark: { borderColor: '$backgroundDark500' },
                _light: { borderColor: '$backgroundLight300' },
              }}
              maxWidth="$80"
              w="$full"
            >
              <InputSlot>
                <InputIcon ml="$3" size="lg" as={SearchIcon} />
              </InputSlot>
              <InputField
                value={searchText}
                fontSize="$md"
                fontWeight="$medium"
                placeholder="Search"
                onChangeText={(txt: React.SetStateAction<string>) => {
                  setSearchText(txt);
                }}
                py="$3"
                pl="$2"
              />
            </Input>

            <HStack space="md">
              <Button
                px="$10"
                py="$3"
                sx={{
                  _light: { bg: '$none', borderColor: '$primary500' },
                  _dark: {
                    bg: '$backgroundDark700',
                    borderColor: '$backgroundDark400',
                  },
                }}
                variant="outline"
              >
                <ButtonText>ADD SORT</ButtonText>
              </Button>

              <Button variant="solid" px="$10" py="$3">
                <ButtonText> ADD CONTACT</ButtonText>
              </Button>
            </HStack>
          </HStack>

          <VStack
            sx={{
              '_light': { bg: '$backgroundLight0' },
              '_dark': { bg: '$backgroundDark800' },
              '@md': { borderRadius: '$sm' },
            }}
          >
            <HStack
              alignItems="center"
              justifyContent="space-between"
              px="$6"
              pt="$6"
              pb="$4"
            >
              <Text
                sx={{
                  _light: { color: '$textLight500' },
                  _dark: { color: '$textDark500' },
                }}
                {...textstyle}
              >
                Name
              </Text>
              <Text
                sx={{
                  _light: { color: '$textLight500' },
                  _dark: { color: '$textDark500' },
                }}
                {...textstyle}
              >
                Email
              </Text>
              <Text
                sx={{
                  _light: { color: '$textLight500' },
                  _dark: { color: '$textDark500' },
                }}
                {...textstyle}
              >
                Phone Number
              </Text>
              <Text w="$2.5" />
            </HStack>
            <SectionList
              keyExtractor={(index) => index + ''}
              sections={contactData}
              ItemSeparatorComponent={() => (
                <Divider
                  sx={{
                    _light: { bgColor: '$backgroundLight200' },
                    _dark: { bg: '$backgroundDark700' },
                  }}
                />
              )}
              renderSectionHeader={() => (
                <Divider
                  sx={{
                    _light: { bgColor: '$backgroundLight200' },
                    _dark: { bg: '$backgroundDark700' },
                  }}
                />
              )}
              renderItem={({ item }) => <ContactItem contact={item} />}
            />
          </VStack>
        </VStack>
      </Box>
    </>
  );
};
const ContactList = () => {
  const ALPHABETS: string[] = [...Array(26)].map((_, i) =>
    String.fromCharCode(i + 65)
  );

  return (
    <DashboardLayout
      scrollable={false}
      displaySidebar
      title="Contact List"
      displayScreenTitle={false}
    >
      <VStack
        flex={1}
        sx={{
          '@base': { py: '$5' },
          '@md': { rounded: '$sm', py: '$6', pb: '$0', px: '$6' },
          '@lg': { px: '$0' },
          '_light': { bg: '$primary50' },
          '_dark': { bg: '$backgroundDark700' },
        }}
      >
        <Box
          sx={{
            '@md': { display: 'none' },
          }}
        >
          <>
            <VStack
              position="absolute"
              alignItems="center"
              right="$0"
              top="$2"
              mt="$12"
            >
              <Image
                size="2xs"
                source={require('./assets/images/fav_dark.png')}
                mb="$5"
                alt="gluestack-ui"
              />

              {ALPHABETS.map((item, index) => (
                <Pressable key={index}>
                  <Text zIndex={1} fontSize="$xs">
                    {item}
                  </Text>
                </Pressable>
              ))}
              <Box
                mt="$4"
                h="$16"
                w="$16"
                alignSelf="flex-end"
                sx={{
                  '@md': { display: 'none' },
                }}
                borderRadius="$md"
              >
                <Fab
                  sx={{
                    '@md': { display: 'none' },
                    '_light': { bg: '$primary500' },
                    '_dark': { bg: '$primary300' },
                  }}
                  h="$12"
                  w="$12"
                  placement="bottom right"
                  isHovered={false}
                  isDisabled={false}
                  isPressed={false}
                >
                  <FabIcon as={Keyboard} size="lg" />
                </Fab>
              </Box>
            </VStack>
          </>
        </Box>
        <ContactData />
      </VStack>
    </DashboardLayout>
  );
};
export default ContactList;
