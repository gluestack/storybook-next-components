import type { ComponentMeta } from '@storybook/react-native';
import Settings from './Settings';
import ManageAccounts from './ManageAccounts';
import ContactDetails from './ContactDetails';
import LinkedAccounts from './LinkedAccounts';
import DeactivateAccount from './DeactivateAccount';
import ContactList from './ContactList';

import EditDetails from './EditDetails';
const Accounts: ComponentMeta<typeof Settings> = {
  title: 'stories/STARTUP PLUS/Accounts',
  component: Settings,
};

export default Accounts;

export {
  Settings,
  ManageAccounts,
  ContactDetails,
  LinkedAccounts,
  DeactivateAccount,
  ContactList,
  EditDetails,
};
