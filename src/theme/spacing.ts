const DefineBaseSpacing: number = 16;

export type SpacingTokens =
  | "X3S"
  | "XXS"
  | "XS"
  | "S"
  | "M"
  | "L"
  | "XL"
  | "XXL"
  | "X3L"
  | "X4L"
  | "X5L";
type Tokens = { [key in SpacingTokens]: number };

const tokens: Tokens = {
  X3S: 0.125,
  XXS: 0.25,
  XS: 0.5,
  S: 0.75,
  M: 1,
  L: 1.5,
  XL: 2,
  XXL: 2.5,
  X3L: 3,
  X4L: 4,
  X5L: 5,
};

const createSpacing = () => {
  return Object.keys(tokens)
    .map((key) => {
      const spacing: string = `${
        tokens[key as SpacingTokens] * DefineBaseSpacing
      }px`;
      return { [key]: spacing };
    })
    .reduce((a, c) => Object.assign(a, c), {});
};

export const DefineSpacing = createSpacing();
