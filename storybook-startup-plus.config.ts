import Contact from './storybooks/StartupPlus/Accounts/ContactDetails';
import ContactList from './storybooks/StartupPlus/Accounts/ContactList';
import DeactivateAccount from './storybooks/StartupPlus/Accounts/DeactivateAccount';
import EditDetails from './storybooks/StartupPlus/Accounts/EditDetails';
import LinkedAccounts from './storybooks/StartupPlus/Accounts/LinkedAccounts';
import ManageAccounts from './storybooks/StartupPlus/Accounts/ManageAccounts';
import Settings from './storybooks/StartupPlus/Accounts/Settings';
import MyCart from './storybooks/StartupPlus/Catalog/MyCart';
import MyOrders from './storybooks/StartupPlus/Catalog/MyOrders';
import MyWishlist from './storybooks/StartupPlus/Catalog/MyWishlist';
import PhotoLibrary from './storybooks/StartupPlus/Catalog/PhotoLibrary';
import ProductCatalogue from './storybooks/StartupPlus/Catalog/ProductCatalog';
import RefundOrder from './storybooks/StartupPlus/Catalog/RefundOrder';
import RequestCancellationMultipleProducts from './storybooks/StartupPlus/Catalog/RequestCancellationMultipleProducts';
import ReturnOrder from './storybooks/StartupPlus/Catalog/ReturnOrder';
import TrackOrders from './storybooks/StartupPlus/Catalog/TrackOrders';
import CreatePassword from './storybooks/StartupPlus/Login/CreatePassword';
import ForgotPassword from './storybooks/StartupPlus/Login/ForgotPassword';
import OtpVerification from './storybooks/StartupPlus/Login/OTPVerification';
import SignIn from './storybooks/StartupPlus/Login/SignIn';
import SignUp from './storybooks/StartupPlus/Login/SignUp';
import SplashScreen from './storybooks/StartupPlus/Login/SplashScreen';

export { config } from './storybooks/StartupPlus/gluestack-ui.config';

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
  MyCart: {
    story: MyCart,
  },
  MyOrders: {
    story: MyOrders,
  },
  MyWishlist: {
    story: MyWishlist,
  },
  // PhotoLibrary: {
  //   story: PhotoLibrary,
  // },
  // ProductCatalogue: {
  //   story: ProductCatalogue,
  // },
  // RefundOrder: {
  //   story: RefundOrder,
  // },
  RequestCancellationMultipleProducts: {
    story: RequestCancellationMultipleProducts,
  },
  ReturnOrder: {
    story: ReturnOrder,
  },
  TrackOrders: {
    story: TrackOrders,
  },
  CreatePassword: {
    story: CreatePassword,
  },
  ForgotPassword: {
    story: ForgotPassword,
  },
  OtpVerification: {
    story: OtpVerification,
  },
  SignIn: {
    story: SignIn
  },
  SignUp: {
    story: SignUp,
  },
  SplashScreen: {
    story: SplashScreen
  }
} as any;
