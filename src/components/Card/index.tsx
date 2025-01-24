import { useCallback } from 'react';
import useSwitch from '../../hooks/useSwitch';
import { Outer } from './styled';
import { PlayingCard } from './types';

type Props = {
  card: PlayingCard;
  onClick: (card: PlayingCard) => void;
  isFlipped?: boolean;
  isMatched?: boolean;
};
const Card = ({
  card,
  onClick,
  isFlipped = false,
  isMatched = false,
}: Props) => {
  return (
    <Outer
      $isFlipped={isFlipped || isMatched}
      onClick={() => onClick(card)}
      id={card.id}
    >
      {isFlipped && card.value}
    </Outer>
  );
};

export default Card;
