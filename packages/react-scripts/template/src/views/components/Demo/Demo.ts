import { styled } from '../../theme'

export const Demo = styled.div`
  border: 1px solid gray;
  padding: 10px;
  ${p => p.theme.font.base()};
`
