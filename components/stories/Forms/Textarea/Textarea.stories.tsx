import type { ComponentMeta } from '@storybook/react-native';
import TextareaStory from './Textarea';

const TextareaMeta: ComponentMeta<typeof TextareaStory> = {
  title: 'stories/FORMS/Textarea',
  component: TextareaStory,
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    isInvalid: {
      control: 'boolean',
      options: [true, false],
    },
    isReadonly: {
      control: 'boolean',
      options: [true, false],
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
  args: { size: 'md', isInvalid: false, isDisabled: false },
  parameters: {
    docs: {
      description: {
        component:
          'The **Textarea** component helps create multi-line text inputs.',
      },
    },
  },
};

export default TextareaMeta;

export { TextareaStory };
