import { css } from '..'
type Alignment = 'left' | 'center' | 'right'

export interface AlignmentProps {
  textAlign?: Alignment
}

export const alignmentCss = css`
  text-align: ${(p: AlignmentProps) => p.textAlign};
`
