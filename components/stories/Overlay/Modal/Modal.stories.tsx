import type { ComponentMeta } from '@storybook/react-native';
import { ModalStory as Modal } from './Modal';
import MultipleModal from './MultipleModal';

const ModalMeta: ComponentMeta<typeof Modal> = {
  title: 'stories/OVERLAY/Modal',
  component: Modal,
  argTypes: {
    size: {
      control: 'select',
      options: ['md'],
      description: 'The width of modal.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    showModal: {
      control: 'boolean',
      option: [true, false],
    },
  },
  args: { size: 'md' },
};

export default ModalMeta;
export { MultipleModal };
export { Modal };
