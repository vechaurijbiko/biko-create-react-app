import * as React from 'react'
import { ThemeInterface, ThemedComponent } from './themedStyledComponents'
import { withTheme } from 'styled-components'

export const createGlobalStylesComponent = (
  styles: (theme: ThemeInterface) => string,
) => {
  const CustomGlobalStylesRaw: React.SFC<ThemedComponent> = ({ theme }) => (
    <style
      dangerouslySetInnerHTML={{
        __html: styles(theme),
      }}
    />
  )

  return withTheme(CustomGlobalStylesRaw)
}
