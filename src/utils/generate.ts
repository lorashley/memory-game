import { PlayingCard } from '../components/Card/types'
import { shuffle } from './shuffle'

const getRandomCharacter = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const randomIndex = Math.floor(Math.random() * characters.length)
  return characters.charAt(randomIndex)
}

const generateValues = (pairs: number): string[] => {
  const values: string[] = []
  for (let i = 0; i < pairs; i++) {
    values.push(getRandomCharacter())
  }
  return values
}

export const generateCards = (pairs: number): PlayingCard[] => {
  const cards: PlayingCard[] = []
  const values = generateValues(pairs)
  const shuffledCards = shuffle([...values, ...values])

  for (let i = 0; i < shuffledCards.length; i++) {
    cards.push({
      id: i.toString(),
      value: shuffledCards[i],
    })
  }

  return cards
}
