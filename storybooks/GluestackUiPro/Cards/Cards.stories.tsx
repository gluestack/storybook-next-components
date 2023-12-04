import type { ComponentMeta } from '@storybook/react-native';
import CardWithAddButton from './CardWithAddButton';
import CardWithDownloadItem from './CardWithDownloadItem';
import CardWithForm from './CardWithForm';
import CardWithSwitch from './CardWithSwitch';
import CardWithRightButton from './CardWithRightButton';
import CardWithTwoButtons from './CardWithTwoButtons';

const Cards: ComponentMeta<typeof CardWithAddButton> = {
  title: 'stories/Cards',
  component: CardWithAddButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  args: {
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        component: '**markdown** description goes here',
      },
    },
  },
};

export default Cards;

export {
  CardWithAddButton,
  CardWithDownloadItem,
  CardWithForm,
  CardWithSwitch,
  CardWithRightButton,
  CardWithTwoButtons,
};
