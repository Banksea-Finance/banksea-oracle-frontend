import { Variants } from './variants'

type ColorByVariant = Record<Variants, string>

export type Colors = ColorByVariant & {
  primaryBright: string;
  primaryDark: string;
  contrast: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundSecondary: string
  backgroundDisabled: string;
  text: string;
  textContrary: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  card: string;

  rainbow: string
};
