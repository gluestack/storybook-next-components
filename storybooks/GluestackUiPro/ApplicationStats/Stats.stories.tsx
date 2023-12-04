import type { ComponentMeta } from '@storybook/react-native';
import StatsWithLabel from './StatsWithLabel';
import StatsWithCTA from './StatsWithCTA';
import StatsWithProgressBar from './StatsWithProgressBar';
import StatsWithIcon from './StatsWithIcon';
import StatsWithDivider from './StatsWithDivider';
import StatsWithRateBadge from './StatsWithRateBadge';

// var st = document.createElement('style');
// st.innerHTML = `#story--alertdialog--basic{ height: 350px }`;
// document.body.append(st);
const StatsWithLabelStory: ComponentMeta<typeof StatsWithLabel> = {
  title: 'stories/ApplicationStats',
  component: StatsWithLabel,
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
  StatsWithLabel,
  StatsWithCTA,
  StatsWithRateBadge,
  StatsWithProgressBar,
  StatsWithIcon,
  StatsWithDivider,
};
