import type { ComponentMeta } from '@storybook/react-native';
import GuestLayout from './GuestLayout';
import DashboardLayout from './DashboardLayout';
import ChatLayout from './ChatLayout';
const Layouts: ComponentMeta<typeof DashboardLayout> = {
  title: 'stories/STARTUP PLUS/Layouts',
  component: DashboardLayout,
};

export default Layouts;

export { GuestLayout, DashboardLayout, ChatLayout };
