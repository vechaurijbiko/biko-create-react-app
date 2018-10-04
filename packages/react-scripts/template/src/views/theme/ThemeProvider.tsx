import * as React from 'react'
import { ThemeProvider as Root, injectGlobal } from './themedStyledComponents'
import { theme } from './theme'
import { reset } from './reset'
import { reboot } from './reboot'
import { fontFaces } from './css/fonts'

const baseStyles = () => injectGlobal`
  ${reset};
  ${reboot};
  ${fontFaces};
`

export const ThemeProvider: React.SFC = ({ children }) => {
  baseStyles()
  return <Root theme={theme}>{children}</Root>
}
