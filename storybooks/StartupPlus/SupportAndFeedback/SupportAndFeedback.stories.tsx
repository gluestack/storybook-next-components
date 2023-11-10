import type { ComponentMeta } from '@storybook/react-native';
import KeywordSearch from './KeywordSearch';
import HelpAndSupport from './HelpAndSupport';
import ProductFeedback from './ProductFeedback';
import SearchHistory from './SearchHistory';
import AddOns from './AddOns';
import GroupChat from './GroupChat';
import ChatList from './ChatList';
import ChatList1 from './ChatList1';
import ChatScreen from './ChatScreen';

const SupportAndFeedback: ComponentMeta<typeof KeywordSearch> = {
  title: 'stories/STARTUP PLUS/SupportAndFeedback',
  component: KeywordSearch,
};

export default SupportAndFeedback;

export {
  KeywordSearch,
  HelpAndSupport,
  ProductFeedback,
  SearchHistory,
  AddOns,
  GroupChat,
  ChatList,
  ChatList1,
  ChatScreen,
};
