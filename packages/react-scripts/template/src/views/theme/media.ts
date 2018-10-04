import { InterpolationValue } from 'styled-components'
import { css } from './themedStyledComponents'
import { breakpoints } from './breakpoints'

export interface MediaInterface {
  onlyMobile: (strings: TemplateStringsArray, ...args) => InterpolationValue[]
  desktop: (strings: TemplateStringsArray, ...args) => InterpolationValue[]
}

export const media: MediaInterface = {
  onlyMobile: (strings: TemplateStringsArray, ...args) => css`
    @media (max-width: ${breakpoints.desktop - 1}px) {
      ${css(strings, ...args)};
    }
  `,
  desktop: (strings: TemplateStringsArray, ...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(strings, ...args)};
    }
  `,
}
