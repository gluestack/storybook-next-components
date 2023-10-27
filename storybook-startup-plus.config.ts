import Contact from './storybooks/StartupPlus/Accounts/ContactDetails';
import ContactList from './storybooks/StartupPlus/Accounts/ContactList';
import DeactivateAccount from './storybooks/StartupPlus/Accounts/DeactivateAccount';
import EditDetails from './storybooks/StartupPlus/Accounts/EditDetails';
import LinkedAccounts from './storybooks/StartupPlus/Accounts/LinkedAccounts';
import ManageAccounts from './storybooks/StartupPlus/Accounts/ManageAccounts';
import Settings from './storybooks/StartupPlus/Accounts/Settings';

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
