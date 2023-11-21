import type { ComponentMeta } from '@storybook/react-native';
import CreatePassword from './CreatePassword';
import ForgotPassword from './ForgotPassword';
import SignIn from './SignIn';
import OtpVerification from './OTPVerification';
import SignUp from './SignUp';
import SplashScreen from './SplashScreen';
const Login: ComponentMeta<typeof CreatePassword> = {
  title: 'stories/STARTUP PLUS/Login',
  component: CreatePassword,
};

export default Login;

export {
  CreatePassword,
  ForgotPassword,
  SignIn,
  OtpVerification,
  SignUp,
  SplashScreen,
};
