import type { ComponentMeta } from '@storybook/react-native';
import Slider from './Slider';

const SliderMeta: ComponentMeta<typeof Slider> = {
  title: 'stories/FORMS/Slider',
  component: Slider,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isHovered: {
      control: 'boolean',
      options: [true, false],
    },
    isPressed: {
      control: 'boolean',
      options: [true, false],
    },
    isFocused: {
      control: 'boolean',
      options: [true, false],
    },
    isFocusVisible: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    size: 'md',
  },
};

export default SliderMeta;

export { Slider };
