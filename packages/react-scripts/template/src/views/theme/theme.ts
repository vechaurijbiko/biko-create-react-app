import { font, FontInterface, FontFamily, FontWeight } from './font'
import { media, MediaInterface } from './media'
import { breakpoints } from './breakpoints'
import { colors, ColorsInterface } from './colors'
import { sizes, SizesInterface } from './size'
import { GridInterface, grid } from './grid'

export interface ThemeInterface {
  controls: {
    height: number
  }
  breakpoints: {
    desktop: number
  }
  contentMaxWidth: number
  formMaxWidth: number
  tabFormContainerPadding: number
  font: FontInterface
  fontFamily: typeof FontFamily
  media: MediaInterface
  colors: ColorsInterface
  fontWeight: typeof FontWeight
  sizes: SizesInterface
  grid: GridInterface
}

export const theme: ThemeInterface = {
  controls: {
    height: sizes.scale(9),
  },
  breakpoints,
  contentMaxWidth: 1200,
  formMaxWidth: 400,
  tabFormContainerPadding: 15,
  font,
  fontFamily: FontFamily,
  fontWeight: FontWeight,
  media,
  colors,
  sizes,
  grid,
}
