import type { ComponentMeta } from '@storybook/react-native';
import ProfileScreen from './ProfileScreen';
import SellerDetails from './SellerDetails';
import TutorProfile from './TutorProfile';
import QrCodeScreen from './TutorQRCode';
import TutorSyllabusScreen from './TutorSyllabus';
const UserDetails: ComponentMeta<typeof ProfileScreen> = {
  title: 'stories/STARTUP PLUS/UserDetails',
  component: ProfileScreen,
};

export default UserDetails;

export {
  ProfileScreen,
  SellerDetails,
  TutorProfile,
  QrCodeScreen,
  TutorSyllabusScreen,
};
