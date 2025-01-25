import styled from 'styled-components'

export const Outer = styled.div`
  width: 90px;
  height: 140px;
  border-radius: 8px;
  perspective: 1000px;
  cursor: pointer;
`

export const CardInner = styled.div<{ $isFlipping?: boolean }>`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: rotateY(0deg);
  transition: transform 0.6s ease;

  ${({ $isFlipping }) =>
    $isFlipping &&
    `
    transform: rotateY(180deg);
    `}
`

const baseCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border-radius: 10px;
`

export const CardFront = styled(baseCard)`
  background-color: #c5d5ea;
`

export const CardBack = styled(baseCard)`
  background-color: #7392b7;
  transform: rotateY(180deg);
`
