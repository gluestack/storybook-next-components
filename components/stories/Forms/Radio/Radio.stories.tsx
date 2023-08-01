import type { ComponentMeta } from '@storybook/react-native';
import RadioStory from './Radio';

const RadioMeta: ComponentMeta<typeof RadioStory> = {
  title: 'stories/FORMS/Radio',
  component: RadioStory,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isInvalid: {
      type: 'boolean',
      options: [false, true],
    },
    isDisabled: {
      type: 'boolean',
      options: [false, true],
    },
    isReadOnly: {
      type: 'boolean',
      options: [false, true],
    },
    isActive: {
      type: 'boolean',
      options: [false, true],
    },
  },
  args: {
    size: 'md',
    isInvalid: false,
    isDisabled: false,
    isReadOnly: false,
  },
};

export default RadioMeta;

export { RadioStory };
