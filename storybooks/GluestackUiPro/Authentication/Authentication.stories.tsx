import type { ComponentMeta } from '@storybook/react-native';
import LoginWithCentredForm from './LoginWithCentredForm';
import LoginWithEmailOrProvider from './LoginWithEmailOrProvider';
import SignUpWithQuote from './SignUpWithQuote';
import LoginWithGoogleOrEmail from './LoginWithGoogleOrEmail';
import LoginWithEmailPasswordOrGoogle from './LoginWithEmailPasswordOrGoogle';
import LoginWithGradient from './LoginWithGradient';
import LoginWithFlushedInputs from './LoginWithFlushedInputs';
import LoginWithLeftBackground from './LoginWithLeftBackground';
import SignUpForm from './SignUpForm';
const Authentication: ComponentMeta<typeof LoginWithCentredForm> = {
  title: 'stories/Authentication',
  component: LoginWithCentredForm,
};

export default Authentication;

export {
  LoginWithCentredForm,
  LoginWithEmailOrProvider,
  SignUpWithQuote,
  LoginWithGoogleOrEmail,
  LoginWithEmailPasswordOrGoogle,
  LoginWithGradient,
  LoginWithFlushedInputs,
  LoginWithLeftBackground,
  SignUpForm,
};
