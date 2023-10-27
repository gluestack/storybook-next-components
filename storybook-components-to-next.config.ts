import Contact from './StartupPlus/Accounts/ContactDetails';
import ContactList from './StartupPlus/Accounts/ContactList';
import DeactivateAccount from './StartupPlus/Accounts/DeactivateAccount';
import EditDetails from './StartupPlus/Accounts/EditDetails';
import LinkedAccounts from './StartupPlus/Accounts/LinkedAccounts';
import ManageAccounts from './StartupPlus/Accounts/ManageAccounts';
import Settings from './StartupPlus/Accounts/Settings';

export default {
  ContactDetails: {
    story: Contact,
  },
  ContactList: {
    story: ContactList,
  },
  DeactivateAccount: {
    story: DeactivateAccount,
  },
  EditDetails: {
    story: EditDetails,
  },
  LinkedAccounts: {
    story: LinkedAccounts,
  },
  ManageAccounts: {
    story: ManageAccounts,
  },
  Settings: {
    story: Settings,
  },
} as any;
