import type { ComponentMeta } from '@storybook/react-native';
import SubscriptionPlan from './SubscriptionPlan';
import GiftCard from './GiftCard';
import Notifications from './Notifications';
import SubscriptionFeatures from './SubscriptionFeatures';
import Offers from './Offers';
import ReferAndEarn from './ReferAndEarn';
import ReferAndEarn2 from './ReferAndEarn2';

const OffersAndPromotions: ComponentMeta<typeof SubscriptionPlan> = {
  title: 'stories/STARTUP PLUS/Offers And Promotions',
  component: SubscriptionPlan,
};

export default OffersAndPromotions;

export {
  SubscriptionPlan,
  GiftCard,
  Notifications,
  SubscriptionFeatures,
  Offers,
  ReferAndEarn,
  ReferAndEarn2
};
