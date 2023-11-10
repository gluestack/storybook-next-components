import type { ComponentMeta } from '@storybook/react-native';
import Home from './Home';
import RateUs from './RateUs';
import Gallery from './Gallery';
import NoInternet from './NoInternet';

const HomeMenu: ComponentMeta<typeof Home> = {
  title: 'stories/STARTUP PLUS/HomeMenu',
  component: Home,
};

export default HomeMenu;

export { Home, NoInternet, RateUs, Gallery };
