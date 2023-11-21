import type { ComponentMeta } from '@storybook/react-native';

import Wallet from './Wallet';
import EmiDetails from './EmiDetails';
import UpiPayment from './UpiPayment';
import OrderConfirmation from './OrderConfirmation';
import BalanceCheckTwo from './BalanceCheckTwo';
import UpiPaymentsOne from './UpiPaymentsOne';
import PaymentMethodOptions from './PaymentMethodOptions';
import BalanceCheck from './BalanceCheck';
const Accounts: ComponentMeta<typeof Wallet> = {
  title: 'stories/STARTUP PLUS/Payment',
  component: Wallet,
};

export default Accounts;

export {
  Wallet,
  EmiDetails,
  UpiPayment,
  OrderConfirmation,
  BalanceCheckTwo,
  UpiPaymentsOne,
  PaymentMethodOptions,
  BalanceCheck,
};
