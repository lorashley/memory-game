import { CardBack, CardFront, CardInner, Outer } from './styled'
import { PlayingCard } from './types'

type Props = {
  card: PlayingCard
  onClick: (card: PlayingCard) => void
  isFlipped?: boolean
  isMatched?: boolean
}
const Card = ({
  card,
  onClick,
  isFlipped = false,
  isMatched = false,
}: Props) => {
  return (
    <Outer onClick={() => onClick(card)} id={card.id}>
      <CardInner $isFlipping={isFlipped || isMatched}>
        <CardFront></CardFront>
        <CardBack>{card.value}</CardBack>
      </CardInner>
    </Outer>
  )
}

export default Card
