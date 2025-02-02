import { DefineColor } from "./color";

const createLevelShadow = (depth: number) =>
  depth === 0
    ? "none"
    : `0 ${2 ** (depth - 1)}px ${2 ** depth}px ${
        depth - 1 > 0 ? `${2 ** (depth - 2)}px` : 0
      } ${DefineColor.TRANSPARENT_15}`;

export const DefineShadow = {
  BASE: `${DefineColor.TRANSPARENT_15} 0 0 4px 0`,
  DIALOG: `${DefineColor.TRANSPARENT_30} 0 4px 10px 0`,
  POPOVER: `${DefineColor.TRANSPARENT_15} 0 0 4px 2px`,
  LEVEL0: createLevelShadow(0),
  LEVEL1: createLevelShadow(1),
  LEVEL2: createLevelShadow(2),
  LEVEL3: createLevelShadow(3),
  LEVEL4: createLevelShadow(4),
};
