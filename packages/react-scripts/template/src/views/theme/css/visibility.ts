import { css } from '..'
import { ThemeInterface } from '../themedStyledComponents'

export type VisibilityProps = OnlyMobileProps | OnlyDesktopProps

export interface OnlyMobileProps {
  onlyMobile?: true
  onlyDesktop?: false
}

export interface OnlyDesktopProps {
  onlyMobile?: false
  onlyDesktop?: true
}

type Props = VisibilityProps & { theme: ThemeInterface }

export const visibilityCss = css`
  ${(p: Props) =>
    p.onlyMobile &&
    p.theme.media.desktop`
      display: none;
  `};

  ${(p: Props) =>
    p.onlyDesktop &&
    p.theme.media.onlyMobile`
      display: none;
  `};
`
