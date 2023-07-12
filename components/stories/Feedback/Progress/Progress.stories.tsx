import type { ComponentMeta } from '@storybook/react-native';
import Progress from './Progress';

const ProgressMeta: ComponentMeta<typeof Progress> = {
  title: 'stories/FEEDBACK/Progress',
  component: Progress,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl'],
    },
  },
  args: {
    size: 'md',
  },
};

export default ProgressMeta;

export { Progress };
