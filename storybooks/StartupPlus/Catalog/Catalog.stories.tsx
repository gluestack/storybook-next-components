import type { ComponentMeta } from '@storybook/react-native';
import ProductCatalog from './ProductCatalog';
import MyCart from './MyCart';
import MyOrders from './MyOrders';
import ReturnOrder from './ReturnOrder';
import RequestCancellationMultipleProducts from './RequestCancellationMultipleProducts';
import PhotoLibrary from './PhotoLibrary';
import TrackOrders from './TrackOrders';
import MyWishlist from './MyWishlist';
import RefundOrder from './RefundOrder';

const Catalog: ComponentMeta<typeof ProductCatalog> = {
  title: 'stories/STARTUP PLUS/Catalog',
  component: ProductCatalog,
};

export default Catalog;

export {
  ProductCatalog,
  MyCart,
  MyOrders,
  ReturnOrder,
  RequestCancellationMultipleProducts,
  PhotoLibrary,
  TrackOrders,
  MyWishlist,
  RefundOrder,
};
