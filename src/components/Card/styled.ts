import styled from 'styled-components';

export const Outer = styled.div<{ $isFlipped?: boolean }>`
  width: 90px;
  height: 140px;
  border-radius: 8px;
  border: 1px solid black;

  background: ${({ $isFlipped }) => ($isFlipped ? `white` : `blue`)};
`;
