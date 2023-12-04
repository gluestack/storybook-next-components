import type { ComponentMeta } from '@storybook/react-native';
import { NotificationsWithTwoLinksAndIcon } from './NotificationsWithTwoLinksAndIcon';
import { NotificationsWithTwoLinks } from './NotificationsWithTwoLinks';
import { NotificationsWithAvatar } from './NotificationsWithAvatar';
import { NotificationsWithSplitButtons } from './NotificationsWithSplitButtons';
import { NotificationsWithSplitButtonsAndIcon } from './NotificationsWithSplitButtonsAndIcon';

// var st = document.createElement('style');
// st.innerHTML = `#story--alertdialog--basic{ height: 350px }`;
// document.body.append(st);

const Notifications: ComponentMeta<typeof NotificationsWithTwoLinksAndIcon> = {
  title: 'stories/Notifications',
  component: NotificationsWithTwoLinksAndIcon,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
  },
  args: {
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        component: '**markdown** description goes here',
      },
    },
  },
};

export default Notifications;

export {
  NotificationsWithTwoLinksAndIcon,
  NotificationsWithTwoLinks,
  NotificationsWithAvatar,
  NotificationsWithSplitButtons,
  NotificationsWithSplitButtonsAndIcon,
};
