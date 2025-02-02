import { rgba } from "polished";

const grayScale = {
  GRAY_100: "#EDF0F2",
  GRAY_200: "#DEE4E7",
  GRAY_300: "#C9D1D8",
  GRAY_400: "#B2BCC7",
  GRAY_500: "#A3ADBB",
  GRAY_600: "#8790A4",
  GRAY_700: "#747C8E",
  GRAY_800: "#50555f",
  GRAY_900: "#2f3237",
};

const transparencyScale = {
  TRANSPARENT_15: rgba("black", 0.15),
  TRANSPARENT_30: rgba("black", 0.3),
  TRANSPARENT_65: rgba("black", 0.65),
  TRANSPARENT_80: rgba("black", 0.8),
};

export const DefineColor = {
  background: "#dfdfdf",
  black: "#000000",
  white: "#ffffff",
  blue: "#3420FA",
  yellow: "#B2FF00",
  text_gray: "#50555f",
  ...grayScale,
  ...transparencyScale,
};
