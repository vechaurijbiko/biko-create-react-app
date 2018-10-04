import { Size, SizeName } from '../size'
import { css } from '..'
import { rem } from 'polished'

export interface HorizontalMarginProps {
  marginRight?: SizeName
  marginLeft?: SizeName
}

export interface VerticalMarginProps {
  marginTop?: SizeName
  marginBottom?: SizeName
}

export const horizontalMarginsCss = css`
  margin-right: ${(p: HorizontalMarginProps) =>
    p.marginRight && rem(Size[p.marginRight])};

  margin-left: ${(p: HorizontalMarginProps) =>
    p.marginLeft && rem(Size[p.marginLeft])};
`

export const verticalMarginsCss = css`
  margin-top: ${(p: VerticalMarginProps) =>
    p.marginTop && rem(Size[p.marginTop])};

  margin-bottom: ${(p: VerticalMarginProps) =>
    p.marginBottom && rem(Size[p.marginBottom])};
`
