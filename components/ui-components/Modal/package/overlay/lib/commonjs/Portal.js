"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OverlayContainer = OverlayContainer;
exports.OverlayProvider = void 0;
exports.PortalProvider = PortalProvider;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const PortalContext = /*#__PURE__*/_react.default.createContext(null);
let globalOverlayCounter = 0;
function PortalProvider(props) {
  const [items, setItems] = _react.default.useState([]);
  const setOverlayItem = element => {
    const overlayId = ++globalOverlayCounter;
    setItems(prev => prev.concat([{
      id: overlayId,
      node: element
    }]));
    return overlayId;
  };
  const updateOverlayItem = (id, node) => {
    setItems(prev => {
      const overlayItem = prev.find(item => item.id == id);
      if (!overlayItem) {
        return prev.concat([{
          id: id,
          node
        }]);
      } else {
        return prev.map(item => {
          if (item.id === id) {
            return {
              id,
              node
            };
          }
          return item;
        });
      }
    });
  };
  const removeOverlayItem = id => {
    setItems(prev => {
      const newItems = prev.filter(item => item.id !== id);
      return newItems;
    });
  };
  return /*#__PURE__*/_react.default.createElement(PortalContext.Provider, {
    value: {
      items,
      setOverlayItem,
      removeOverlayItem,
      updateOverlayItem,
      isSSR: props === null || props === void 0 ? void 0 : props.isSSR
    }
  }, props.children, items.map(item => {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: item.id
    }, item.node);
  }));
}
function OverlayView(_ref) {
  let {
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, _extends({
    pointerEvents: "box-none",
    style: [_reactNative.StyleSheet.absoluteFill, style],
    collapsable: false
  }, props));
}
const OverlayProvider = PortalProvider;
exports.OverlayProvider = OverlayProvider;
function OverlayContainer(props) {
  const context = usePortalProvider();
  const overlayId = _react.default.useRef(undefined);
  const element = /*#__PURE__*/_react.default.createElement(OverlayView, props);
  (0, _react.useEffect)(() => {
    // Mount
    if (overlayId.current === undefined) {
      overlayId.current = context === null || context === void 0 ? void 0 : context.setOverlayItem(element);
    }
    // Update
    else {
      if (overlayId.current) {
        context === null || context === void 0 ? void 0 : context.updateOverlayItem(overlayId.current, element);
      }
    }
  },
  // To re-render the child
  [props]);

  // Unmount
  (0, _react.useEffect)(() => {
    return () => {
      if (overlayId.current) {
        context === null || context === void 0 ? void 0 : context.removeOverlayItem(overlayId.current);
      }
    };
  }, []);

  // Rendering elements for SSR
  // if (context?.isSSR && !overlayId.current) {
  //   return <View style={{ display: 'none' }}>{element}</View>;
  // }
  if (context !== null && context !== void 0 && context.isSSR && !overlayId.current) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, element);
  }
  return null;
}
function usePortalProvider() {
  const context = _react.default.useContext(PortalContext);
  return context;
}
//# sourceMappingURL=Portal.js.map