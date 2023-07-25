function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import { ModalContext } from './Context';
import { useHover, usePress } from '@react-native-aria/interactions';
import { composeEventHandlers } from '@gluestack-ui/utils';
import { useFocusRing, useFocus } from '@react-native-aria/focus';
const ModalCloseButton = StyledModalCloseButton => /*#__PURE__*/forwardRef((props, ref) => {
  const {
    hoverProps,
    isHovered
  } = useHover();
  const {
    pressProps,
    isPressed
  } = usePress({
    isDisabled: props.isDisabled
  });
  const {
    focusProps,
    isFocused
  } = useFocus();
  const {
    isFocusVisible,
    focusProps: focusRingProps
  } = useFocusRing();
  const {
    // _icon,
    onPressIn,
    onPressOut,
    onHoverIn,
    onHoverOut,
    onFocus,
    onBlur,
    children,
    ...resolvedProps
  } = props;
  const {
    handleClose
  } = React.useContext(ModalContext);
  return /*#__PURE__*/React.createElement(StyledModalCloseButton, _extends({
    accessibilityRole: "button",
    ref: ref,
    onPressIn: composeEventHandlers(onPressIn, pressProps.onPressIn),
    onPressOut: composeEventHandlers(onPressOut, pressProps.onPressOut)
    // @ts-ignore - web only
    ,
    onHoverIn: composeEventHandlers(onHoverIn, hoverProps.onHoverIn)
    // @ts-ignore - web only
    ,
    onHoverOut: composeEventHandlers(onHoverOut, hoverProps.onHoverOut)
    // @ts-ignore - web only
    ,
    onFocus: composeEventHandlers(composeEventHandlers(onFocus, focusProps.onFocus), focusRingProps.onFocus)
    // @ts-ignore - web only
    ,
    onBlur: composeEventHandlers(composeEventHandlers(onBlur, focusProps.onBlur), focusRingProps.onBlur),
    onPress: handleClose,
    states: {
      hover: isHovered,
      focus: isFocused,
      active: isPressed,
      focusVisible: isFocusVisible
    }
  }, resolvedProps), children);
});
export default ModalCloseButton;
//# sourceMappingURL=ModalCloseButton.js.map