export const defaultBaseFontSize = 16;
const defaultScaleFactor = 6;

export type FontSize = "XXS" | "XS" | "S" | "M" | "L" | "XL" | "XXL" | "X3L";
type Tokens = { [key in FontSize]: number };

const Size: Tokens = {
  XXS: 3,
  XS: 2,
  S: 1,
  M: 0,
  L: -1,
  XL: -2,
  XXL: -3,
  X3L: -4,
};

const createFontSize = () => {
  return Object.keys(Size)
    .map((key) => {
      const size: string = `${
        defaultScaleFactor / (defaultScaleFactor + Size[key as FontSize])
      }rem`;
      return { [key]: size };
    })
    .reduce((a, c) => Object.assign(a, c), {});
};

export const defaultFontSize = createFontSize();
