import type { ComponentMeta } from '@storybook/react-native';
import SectionHeaderWithTitle from './SectionHeaderWithTitle';
import SectionHeaderWithDescription from './SectionHeaderWithDescription';
import SectionHeaderWithButton from './SectionHeaderWithButton';
import SectionHeaderWithTwoButtons from './SectionHeaderWithTwoButtons';
import SectionHeaderWithSearch from './SectionHeaderWithSearch';
import SectionHeaderWithFilterButton from './SectionHeaderWithFilterButton';
import SectionHeaderWithTabs from './SectionHeaderWithTabs';

const StatsWithLabelStory: ComponentMeta<typeof SectionHeaderWithTitle> = {
  title: 'stories/SectionHeader',
  component: SectionHeaderWithTitle,
  argTypes: {},
  args: {
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Used to display a prominent call-to-action that converts leads to customers.    ',
      },
    },
  },
};

export default StatsWithLabelStory;
export {
  SectionHeaderWithTitle,
  SectionHeaderWithDescription,
  SectionHeaderWithButton,
  SectionHeaderWithTwoButtons,
  SectionHeaderWithSearch,
  SectionHeaderWithFilterButton,
  SectionHeaderWithTabs,
};
