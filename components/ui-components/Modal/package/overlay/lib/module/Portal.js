function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
const PortalContext = /*#__PURE__*/React.createContext(null);
let globalOverlayCounter = 0;
export function PortalProvider(props) {
  const [items, setItems] = React.useState([]);
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
  return /*#__PURE__*/React.createElement(PortalContext.Provider, {
    value: {
      items,
      setOverlayItem,
      removeOverlayItem,
      updateOverlayItem,
      isSSR: props === null || props === void 0 ? void 0 : props.isSSR
    }
  }, props.children, items.map(item => {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: item.id
    }, item.node);
  }));
}
function OverlayView(_ref) {
  let {
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(View, _extends({
    pointerEvents: "box-none",
    style: [StyleSheet.absoluteFill, style],
    collapsable: false
  }, props));
}
export const OverlayProvider = PortalProvider;
export function OverlayContainer(props) {
  const context = usePortalProvider();
  const overlayId = React.useRef(undefined);
  const element = /*#__PURE__*/React.createElement(OverlayView, props);
  useEffect(() => {
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
  useEffect(() => {
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
    return /*#__PURE__*/React.createElement(React.Fragment, null, element);
  }
  return null;
}
function usePortalProvider() {
  const context = React.useContext(PortalContext);
  return context;
}
//# sourceMappingURL=Portal.js.map