import type { ComponentMeta } from '@storybook/react-native';
import CampaignDetails from './CampaignDetails';
import Donations from './Donations';
import InsuranceDashboard from './InsuranceDashboard';
import PortFolioOverview from './PortFolioOverview';
import TopPerformingStocks from './TopPerformingStocks';

const Statistics: ComponentMeta<typeof InsuranceDashboard> = {
  title: 'stories/STARTUP PLUS/Statistics',
  component: InsuranceDashboard,
};

export default Statistics;

export {
  InsuranceDashboard,
  PortFolioOverview,
  CampaignDetails,
  Donations,
  TopPerformingStocks,
};
