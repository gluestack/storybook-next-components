import type { ComponentMeta } from '@storybook/react-native';
import Popover from './Popover';

const PopoverMeta: ComponentMeta<typeof Popover> = {
  title: 'stories/OVERLAY/Popover',
  component: Popover,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
    },
    placement: {
      control: 'select',
      options: [
        'top',
        // 'bottom left',
        // 'bottom right',
        // 'top',
        // 'top left',
        // 'top right',
        // 'left',
        // 'left bottom',
        // 'left right',
        // 'right',
        // 'right bottom',
        // 'right top',
      ],
    },
    // showPopover: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
  },
  args: {
    placement: 'bottom',
    showPopover: true,
  },
};

export default PopoverMeta;

export { Popover };
