import { useCallback, useEffect, useState } from 'react'
import Card from './components/Card'
import { AppOuter, CardContainer, H1, TimerContainer } from './styled'
import { PlayingCard } from './components/Card/types'
import { generateCards } from './utils/generate'
import ConfettiExplosion from 'react-confetti-explosion'
import Timer from './components/Timer'
import { DateTime } from 'ts-luxon'

const App = () => {
  const pairs = 6
  const [cards, setCards] = useState<PlayingCard[]>()
  const [startedAt, setStartedAt] = useState<DateTime>()
  const [endedAt, setEndedAt] = useState<DateTime>()
  const [matchA, setMatchA] = useState<PlayingCard>()
  const [matchB, setMatchB] = useState<PlayingCard>()
  const [foundIndexes, setFoundIndexes] = useState<string[]>([])

  const hasWon = foundIndexes.length === cards?.length

  const generateCardPairs = useCallback(() => {
    setCards(generateCards(pairs))
  }, [setCards])

  const resetMatches = useCallback(() => {
    setMatchA(undefined)
    setMatchB(undefined)
  }, [setMatchA, setMatchB])

  const resetTimer = useCallback(() => {
    setStartedAt(undefined)
    setEndedAt(undefined)
  }, [])

  const resetGame = useCallback(() => {
    resetMatches()
    setFoundIndexes([])
    generateCardPairs()
    resetTimer()
  }, [generateCardPairs, resetMatches, resetTimer])

  const onCardClicked = useCallback(
    (card: PlayingCard) => {
      if (!startedAt) setStartedAt(DateTime.now())
      if (matchA && matchB) return // do nothing
      if (!matchA) return setMatchA(card)
      if (!matchB && matchA.id !== card.id) return setMatchB(card)
    },
    [matchA, matchB, startedAt],
  )

  // Stop timer
  useEffect(() => {
    if (hasWon) setEndedAt(DateTime.now())
  }, [hasWon])

  useEffect(() => {
    if (!matchA || !matchB) return
    if (matchA.value === matchB.value) {
      setFoundIndexes((prev) => [...prev, matchA.id, matchB.id])
    }
    setTimeout(() => {
      resetMatches()
    }, 750)
  }, [matchA, matchB, resetMatches])

  return (
    <AppOuter>
      <H1>Memory</H1>
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
      {hasWon && (
        <>
          <ConfettiExplosion />
          <H1>You won!</H1>
        </>
      )}

      <TimerContainer>
        {' '}
        <button onClick={resetGame} disabled={cards && !startedAt}>
          {hasWon ? 'Play Again' : !cards ? 'Start Game' : 'Reset Game'}
        </button>
        <Timer startedAt={startedAt} endedAt={endedAt} />
      </TimerContainer>
    </AppOuter>
  )
}

export default App
