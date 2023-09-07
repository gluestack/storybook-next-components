import type { ComponentMeta } from '@storybook/react-native';
import FormControl from './FormControl';

const FormControlMeta: ComponentMeta<typeof FormControl> = {
  title: 'stories/FORMS/FormControl',
  component: FormControl,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isDisabled: {
      control: 'boolean',
      options: [true, false],
    },
    isRequired: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    isInvalid: true,
    isRequired: true,
    isDisabled: false,
    size: 'md',
  },
};

export default FormControlMeta;

export { FormControl };
