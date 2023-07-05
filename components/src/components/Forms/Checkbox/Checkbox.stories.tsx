import type { ComponentMeta } from '@storybook/react-native';
import { CheckboxStory as Checkbox } from './Checkbox';

const CheckboxMeta: ComponentMeta<typeof Checkbox> = {
  title: 'stories/FORMS/Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    isInvalid: {
      type: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      type: 'boolean',
      options: [true, false],
    },
    isReadOnly: {
      type: 'boolean',
      options: [true, false],
    },
    isChecked: {
      type: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
};

export default CheckboxMeta;
export { Checkbox };
