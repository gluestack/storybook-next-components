import React, { FC, useState } from 'react';
import {
  Button,
  Tabs,
  Heading,
  Text,
  VStack,
  HStack,
  Select,
  ChevronDownIcon,
  Icon,
  Divider,
  TabsTab,
  TabsTabTitle,
  ButtonText,
  TabsTabList,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
} from '@gluestack-ui/themed';

const TABS_DATA = ['Overview', 'Admins', 'Moderators', 'Users', 'Invitations'];

type CustomTabProps = {
  text: string;
  index: number;
  handleTabSelection: (tab: string) => void;
  selectedTab: string;
};

const CustomTab: FC<CustomTabProps> = ({
  text,
  index,
  handleTabSelection,
  selectedTab,
}) => {
  return (
    <TabsTab
      p="$3"
      borderRadius="$none"
      sx={{
        '@sm': {
          borderTopRightRadius: '$md',
          borderTopLeftRadius: '$md',
          borderWidth: '$1',
          borderColor:
            selectedTab === text ? '$backgroundLight200' : 'transparent',
          borderBottomColor:
            selectedTab !== text ? '$backgroundLight200' : 'transparent',
        },
      }}
      key={`${index}`}
      value="tab-3"
      onPress={() => handleTabSelection(text)}
    >
      <TabsTabTitle
        sx={{
          _dark: { color: selectedTab === text ? '$primary500' : '$text400' },
        }}
        color={selectedTab === text ? '$primary500' : '$text700'}
      >
        {text}
      </TabsTabTitle>
    </TabsTab>
  );
};

const SectionHeaderWithTabs: FC = () => {
  const [selectedTab, setSelectedTab] = useState('Overview');
  const handleCreate = () => {};
  const handleInvite = () => {};

  const handleTabSelection = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <VStack
      p="$4"
      pb="$12"
      width="$full"
      alignSelf="center"
      bg="$backgroundLight0"
      space="lg"
      sx={{
        '@md': {
          p: '$8',
          pb: '$24',
        },
        '@xl': {
          maxWidth: 1280,
        },
        '_dark': {
          bg: '$backgroundLight950',
        },
      }}
    >
      <VStack
        space="md"
        sx={{
          '@sm': {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        }}
      >
        <VStack>
          <Heading fontWeight="$medium" fontSize="$lg">
            Member Profile
          </Heading>
          <Text fontSize="$sm">View of all logged-in users</Text>
        </VStack>
        <HStack space="md" alignSelf="flex-start">
          <Button variant="outline" onPress={handleInvite}>
            <ButtonText>Invite</ButtonText>
          </Button>
          <Button alignSelf="flex-start" onPress={handleCreate}>
            <ButtonText>Create</ButtonText>
          </Button>
        </HStack>
      </VStack>
      <HStack display="none" sx={{ '@sm': { display: 'flex' } }}>
        <Tabs value="tab-3">
          <TabsTabList flexDirection="row">
            {TABS_DATA.map((text, index) => (
              <CustomTab
                text={text}
                index={index}
                handleTabSelection={handleTabSelection}
                selectedTab={selectedTab}
                key={index}
              />
            ))}
          </TabsTabList>
        </Tabs>
        <Divider alignSelf="flex-end" w="auto" flex={1} />
      </HStack>

      <Select
        sx={{ '@sm': { display: 'none' } }}
        selectedValue={selectedTab}
        onValueChange={handleTabSelection}
      >
        <SelectTrigger>
          <SelectInput placeholder="Select option" />
          <SelectIcon mr="$3">
            <Icon as={ChevronDownIcon} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            {TABS_DATA.map((text, index) => (
              <Select.Item label={text} value={text} key={index} />
            ))}
          </SelectContent>
        </SelectPortal>
      </Select>
    </VStack>
  );
};

export default SectionHeaderWithTabs;
