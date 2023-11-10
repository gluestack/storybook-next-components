import type { ComponentMeta } from '@storybook/react-native';
import ReviewPage from './ReviewPage';
import ProductDetail from './ProductDetail';
import FullPageProductScreen from './FullPageProductScreen';
import SizeChart from './SizeChart';

const ProductDetails: ComponentMeta<typeof ReviewPage> = {
  title: 'stories/STARTUP PLUS/ProductDetails',
  component: ReviewPage,
};

export default ProductDetails;

export {
  ReviewPage,
  ProductDetail,
  FullPageProductScreen,
  SizeChart
};
