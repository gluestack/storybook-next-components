"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = MenuItem;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@gluestack-ui/utils");
var _interactions = require("@react-native-aria/interactions");
var _focus = require("@react-native-aria/focus");
var _menu = require("@react-native-aria/menu");
var _reactNative = require("react-native");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const usePressed = (onPressIn, onPressOut) => {
  if (_reactNative.Platform.OS === 'web') {
    return {
      pressEvents: {
        onMouseDown: onPressIn,
        onMouseUp: onPressOut,
        onTouchStart: onPressIn,
        onTouchEnd: onPressOut
      }
    };
  }
  return {
    pressEvents: {
      onPressIn,
      onPressOut
    }
  };
};
function MenuItem(_ref) {
  let {
    StyledMenuItem,
    item,
    state,
    onAction,
    onClose,
    closeOnSelect
  } = _ref;
  const itemProps = {
    ...item.props
  };
  // Get props for the menu item element
  const ref = _react.default.useRef(null);
  const {
    menuItemProps: {
      focusable,
      ...restMenuProps
    }
  } = (0, _menu.useMenuItem)({
    'key': item.key,
    onAction,
    onClose,
    closeOnSelect,
    'aria-label': itemProps.textValue,
    ...itemProps
  }, state, ref);

  // Handle focus events so we can apply highlighted
  // style to the focused menu item
  const toggleSelection = (0, _react.useCallback)(() => {
    if (_reactNative.Platform.OS === 'web') {
      state.selectionManager.toggleSelection(item.key);
    }
  }, [state.selectionManager, item.key]);
  const {
    focusProps: focusRingProps,
    isFocusVisible
  } = (0, _focus.useFocusRing)();
  const {
    pressProps,
    isPressed
  } = (0, _interactions.usePress)({});
  const {
    isHovered,
    hoverProps
  } = (0, _interactions.useHover)();
  const isFocused = state.selectionManager.focusedKey === item.key;
  const {
    children,
    ...rest
  } = item.props;
  const {
    pressEvents
  } = usePressed(
  // @ts-ignore
  (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onPressIn, pressProps.onPressIn), (0, _utils.composeEventHandlers)(restMenuProps.onPressIn, toggleSelection)), (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onPressOut, pressProps.onPressOut), restMenuProps.onPressOut));
  const pressEvents1 = (0, _react.useMemo)(() => !state.selectionManager.isDisabled(item.key) ? pressEvents : {}, [item.key, pressEvents, state.selectionManager]);
  return /*#__PURE__*/_react.default.createElement(StyledMenuItem, _extends({
    ref: ref,
    focusable: focusable === undefined ? false : focusable
  }, restMenuProps, {
    states: {
      hover: isHovered,
      focus: isFocused,
      active: isPressed,
      focusVisible: isFocusVisible,
      selected: state.selectionManager.isSelected(item.key),
      disabled: state.selectionManager.isDisabled(item.key)
    }
  }, rest, pressEvents1, {
    // @ts-ignore - web only
    onHoverIn: (0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: (0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onFocus, focusRingProps.onFocus), restMenuProps === null || restMenuProps === void 0 ? void 0 : restMenuProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: (0, _utils.composeEventHandlers)((0, _utils.composeEventHandlers)(rest === null || rest === void 0 ? void 0 : rest.onBlur, focusRingProps.onBlur), restMenuProps === null || restMenuProps === void 0 ? void 0 : restMenuProps.onBlur)
  }), children);
}
//# sourceMappingURL=MenuItem.js.map