import styled from 'styled-components'

export const Outer = styled.div<{ $isFlipped?: boolean }>`
  width: 150px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #c5d5ea;
`
