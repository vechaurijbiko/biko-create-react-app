export const gridBaseSize = 5 // px

export enum Size {
  xtiny = gridBaseSize,
  tiny = gridBaseSize * 2, // 10 px
  mini = gridBaseSize * 3, // 15 px
  small = gridBaseSize * 4, // 20 px
  base = gridBaseSize * 5, // 25 px
  medium = gridBaseSize * 6, // 30 px
  large = gridBaseSize * 8, // 40 px
  huge = gridBaseSize * 12, // 60 px
}

export type SizeName =
  | 'xtiny'
  | 'tiny'
  | 'mini'
  | 'small'
  | 'base'
  | 'medium'
  | 'large'
  | 'huge'

export interface SizesInterface {
  /** 5 px */
  xtiny: Size
  /** 10 px */
  tiny: Size
  /** 15 px */
  mini: Size
  /** 20 px */
  small: Size
  /** 25 px */
  base: Size
  /** 30 px */
  medium: Size
  /** 40 px */
  large: Size
  /** 60 px */
  huge: Size
  scale: (factor: number) => number
}

export const sizes = {
  xtiny: Size.xtiny,
  tiny: Size.tiny,
  mini: Size.mini,
  small: Size.small,
  base: Size.base,
  medium: Size.medium,
  large: Size.large,
  huge: Size.huge,
  scale: (factor: number) => factor * gridBaseSize,
}
