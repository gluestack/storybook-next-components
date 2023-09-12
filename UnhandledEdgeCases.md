// UNHANDLED EDGE CASES

- As View is by default display: flex in react native, for root layer, i.e. \_\_next it is difficult to find weather it is FIXED or HUG.

  - For Fixed, it should match it's parent width,
  - For HUG, it should match the child's width, but in case it has view as its child, it was take full space as it's display: flex by default
    so, in this case root layer should be FIXED and child should be FILLED, but instead it gives root layer as "HUG" and child layer as "FIX"

- When flex direction is row, and we have some childrens then row takes the height of biggest child height wise, and in other child if any height is passed it will take that, but if no height is passed then it will take available space, SO in this case it should be FILLED but there is no way to find weather height was passed or not so it returns FIXED.
