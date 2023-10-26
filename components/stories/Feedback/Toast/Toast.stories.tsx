import type { ComponentMeta } from '@storybook/react-native';
import { ToastStory as Toast } from './Toast';
import DuplicateToastPrevent from './DuplicateToastPrevent';

const ToastMeta: ComponentMeta<typeof Toast> = {
  title: 'stories/FEEDBACK/Toast',
  component: Toast,
  argTypes: {
    placement: {
      control: 'select',
      figmaIgnore: true,
      options: [
        'top',
        'top right',
        'top left',
        'bottom',
        'bottom left',
        'bottom right',
      ],
    },
    action: {
      control: 'select',
      options: ['error', 'warning', 'success', 'info', 'attention'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'accent'],
    },
  },
  args: {
    placement: 'bottom',
    action: 'attention',
    variant: 'solid',
  },
  parameters: {
    docs: {
      description: {
        component: `**Toast** displays alerts on top of an overlay. The **Toast** terminates itself when the close button is clicked or after a preset timeout — the default is 5 seconds. The component also allows users to give feedback when an action is completed.
        Toasts can also be configured to pop up at different areas of the application window—top or bottom. More than one instance of toast can be present onscreen at one time.`,
      },
    },
  },
};

export default ToastMeta;

export { Toast, DuplicateToastPrevent };
