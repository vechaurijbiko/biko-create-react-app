import { rem } from 'polished'
import { media } from './media'
import { InterpolationValue } from 'styled-components'
import { css } from './themedStyledComponents'
import { sizes } from './size'

export enum FontFamily {
  base = 'Arial, Helvetica, sans-serif',
  title = '"Trebuchet MS", Helvetica, sans-serif',
}

export interface TypiValue {
  size: number
  lineHeight: number
  letterSpacing: number | null
  family: FontFamily
}

export interface TypiSize {
  default: TypiValue
  desktop: TypiValue
}

interface TypiConfig {
  [size: string]: TypiSize
}

export const typi: TypiConfig = {
  base: {
    default: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.base,
    },
    desktop: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
  h6: {
    default: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
    desktop: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
  },
  h5: {
    default: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.base,
    },
    desktop: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
  },
  h4: {
    default: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
    desktop: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
  },
  h3: {
    default: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
    desktop: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
  },
  h2: {
    default: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
    desktop: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
  },
  h1: {
    default: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.title,
    },
    desktop: {
      size: 16,
      lineHeight: sizes.base,
      letterSpacing: null,
      family: FontFamily.base,
    },
  },
}

export type TextFontWeight =
  // | 'light'
  'regular'
// | 'medium'
// | 'semiBold'
// | 'bold'

export enum FontWeight {
  // light = 300,
  regular = 400,
  // medium = 500,
  // semiBold = 600,
  // bold = 700,
}

type FontName = (
  fontWeight?: FontWeight | TextFontWeight,
) => InterpolationValue[]

export interface FontInterface {
  base: FontName
  h6: FontName
  h5: FontName
  h4: FontName
  h3: FontName
  h2: FontName
  h1: FontName
}

export const font: FontInterface = {
  base: generateResponsiveFontSize(typi.base),
  h6: generateResponsiveFontSize(typi.h6),
  h5: generateResponsiveFontSize(typi.h5),
  h4: generateResponsiveFontSize(typi.h4),
  h3: generateResponsiveFontSize(typi.h3),
  h2: generateResponsiveFontSize(typi.h2),
  h1: generateResponsiveFontSize(typi.h1),
}

function generateResponsiveFontSize(size: TypiSize) {
  const fontBaseCss = css`
    ${generateFontSize(size.default)};
    ${media.desktop`
      ${generateFontSize(size.desktop)}
    `};
  `
  return (fontWeight: FontWeight | TextFontWeight = FontWeight.regular) => css`
    font-weight: ${typeof fontWeight === 'string'
      ? FontWeight[fontWeight]
      : fontWeight};
    ${fontBaseCss};
  `
}

function generateFontSize(value: TypiValue) {
  return css`
    font-family: ${value.family};
    font-size: ${rem(value.size)};
    line-height: ${value.lineHeight / value.size};
    ${!!value.letterSpacing && `letter-spacing: ${value.letterSpacing}px`};
  `
}
