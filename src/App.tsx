import { useCallback, useEffect, useState } from 'react'
import Card from './components/Card'
import { AppOuter, CardContainer } from './styled'
import { PlayingCard } from './components/Card/types'
import { generateCards } from './utils/generate'

const App = () => {
  const pairs = 6
  const [cards, setCards] = useState<PlayingCard[]>()

  const generateCardPairs = useCallback(() => {
    setCards(generateCards(pairs))
  }, [setCards])

  const [matchA, setMatchA] = useState<PlayingCard>()
  const [matchB, setMatchB] = useState<PlayingCard>()
  const [foundIndexes, setFoundIndexes] = useState<string[]>([])
  const hasWon = foundIndexes.length === cards?.length

  const resetMatches = useCallback(() => {
    setMatchA(undefined)
    setMatchB(undefined)
  }, [setMatchA, setMatchB])

  const resetGame = useCallback(() => {
    resetMatches()
    setFoundIndexes([])
    generateCardPairs()
  }, [generateCardPairs, resetMatches])

  const onCardClicked = useCallback(
    (card: PlayingCard) => {
      if (matchA && matchB) return // do nothing
      if (!matchA) return setMatchA(card)
      if (!matchB) return setMatchB(card)
    },
    [matchA, matchB, setMatchA, setMatchB],
  )

  useEffect(() => {
    if (!matchA || !matchB) return
    if (matchA.value === matchB.value) {
      setFoundIndexes((prev) => [...prev, matchA.id, matchB.id])
    }
    setTimeout(() => {
      resetMatches()
    }, 1000)
  }, [matchA, matchB, resetMatches])

  return (
    <AppOuter>
      <h1>Memory</h1>
      {hasWon && (
        <>
          <h1>You won!</h1>
          <button onClick={resetGame}>Reset Game</button>
        </>
      )}
      {!cards && <button onClick={resetGame}>Start Game</button>}
      <CardContainer>
        {cards?.map((card) => (
          <Card
            card={card}
            key={card.id}
            onClick={onCardClicked}
            isFlipped={card.id === matchA?.id || card.id === matchB?.id}
            isMatched={foundIndexes.includes(card.id)}
          />
        ))}
      </CardContainer>
    </AppOuter>
  )
}

export default App
