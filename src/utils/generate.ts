import { PlayingCard } from '../components/Card/types'
import { shuffle } from './shuffle'

enum GameType {
  LETTERS = 'LETTERS',
  NUMBERS = 'NUMBERS',
  IMAGES = 'IMAGES',
}

const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const generateValues = (
  pairs: number,
  type: GameType = GameType.LETTERS,
): string[] => {
  const values = type === GameType.LETTERS ? LETTERS : NUMBERS
  const shuffled = shuffle([...values])
  return shuffled.slice(0, pairs)
}

const ensureNoAdjacentMatches = (array: string[]) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      // Swap with a random non-adjacent element
      const j =
        (i + 2 + Math.floor(Math.random() * (array.length - i - 2))) %
        array.length
      ;[array[i + 1], array[j]] = [array[j], array[i + 1]]
    }
  }
  return array
}

export const generateCards = (pairs: number): PlayingCard[] => {
  const cards: PlayingCard[] = []
  const values = generateValues(pairs)
  const shuffledCards = ensureNoAdjacentMatches(shuffle([...values, ...values]))

  for (let i = 0; i < shuffledCards.length; i++) {
    cards.push({
      id: i.toString(),
      value: shuffledCards[i],
    })
  }

  return cards
}
