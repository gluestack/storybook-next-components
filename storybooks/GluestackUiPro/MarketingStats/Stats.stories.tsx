import type { ComponentMeta } from '@storybook/react-native';
import StatsMarketWithCTA from './StatsMarketWithCTA';
import StatsMarketWithCTAA from './StatsMarketWithCTAA';
import StatsMarketOnBrand from './StatsMarketOnBrand';
import StatsMarketWithDivider from './StatsMarketWithDivider';

const StatsWithLabelStory: ComponentMeta<typeof StatsMarketWithCTA> = {
  title: 'stories/MarketingStats',
  component: StatsMarketWithCTA,
};

export default StatsWithLabelStory;
export {
  StatsMarketWithCTA,
  StatsMarketWithCTAA,
  StatsMarketOnBrand,
  StatsMarketWithDivider,
};
