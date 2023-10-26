import React, { useCallback } from 'react';

import {
  Center,
  ChevronDownIcon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectSectionList,
  SelectSectionHeaderText,
  SelectTrigger,
  Icon,
} from '../../../ui-components';

const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  const Item = useCallback(({ item }: any) => {
    return <SelectItem label={item} value={item} />;
  }, []);

  return (
    <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
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
          <SelectSectionList
            sections={DATA}
            keyExtractor={(item: any, index: any) => item + index}
            renderItem={({ item }: any) => <Item item={item} />}
            renderSectionHeader={({ section: { title, data } }: any) => (
              <SelectSectionHeaderText>
                {title} ({data.length})
              </SelectSectionHeaderText>
            )}
          />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

export default SelectStory;

export { Center, Select, Icon, ChevronDownIcon };
