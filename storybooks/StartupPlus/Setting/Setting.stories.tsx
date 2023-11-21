import type { ComponentMeta } from '@storybook/react-native';
import General from './General';
import TermsAndConditions from './TermsAndConditions';
import PrivacySettings from './PrivacySettings';
import Language from './Language';

const Setting: ComponentMeta<typeof General> = {
  title: 'stories/STARTUP PLUS/Setting',
  component: General,
};

export default Setting;

export {
  General,
  TermsAndConditions,
  PrivacySettings,
  Language
};
