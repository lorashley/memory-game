import styled from 'styled-components'
import { gray1 } from '../../colors'

export const Outer = styled.div<{ $isFlipped?: boolean }>`
  width: 150px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${gray1};
`
