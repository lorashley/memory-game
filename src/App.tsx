import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Card from './components/Card';
import { AppOuter, CardContainer } from './styled';
import { PlayingCard } from './components/Card/types';
import { shuffle } from './utils/shuffle';

const getRandomCharacter = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
};

const generateValues = (pairs: number): string[] => {
  let values: string[] = [];
  for (let i = 0; i < pairs; i++) {
    values.push(getRandomCharacter());
  }
  return values;
};

const generateCards = (pairs: number): PlayingCard[] => {
  let cards: PlayingCard[] = [];
  const values = generateValues(pairs);
  const shuffledCards = shuffle([...values, ...values]);

  for (let i = 0; i < shuffledCards.length; i++) {
    cards.push({
      id: i.toString(),
      value: shuffledCards[i],
    });
  }

  return cards;
};

const App = () => {
  const pairs = 6;
  const cards = useMemo(() => generateCards(pairs), [pairs]);

  const [matchA, setMatchA] = useState<PlayingCard>();
  const [matchB, setMatchB] = useState<PlayingCard>();
  const [foundIndexes, setFoundIndexes] = useState<string[]>([]);
  const hasWon = foundIndexes.length === cards.length;

  const resetMatches = useCallback(() => {
    setMatchA(undefined);
    setMatchB(undefined);
  }, [setMatchA, setMatchB]);

  const onCardClicked = useCallback((card: PlayingCard) => {
    if (matchA && matchB) return; // do nothing
    if (!matchA) return setMatchA(card);
    if (!matchB)  return setMatchB(card);
  
  }, [matchA, matchB, setMatchA, setMatchB])

  useEffect(() => {
    if(!matchA || !matchB) return
      if (matchA.value === matchB.value) {
        setFoundIndexes((prev) => [...prev, matchA.id, matchB.id]);
      }
      setTimeout(() => {
        resetMatches();
      }, 1000);
  }, [matchA, matchB]);

  return (
    <AppOuter>
      <h1>memory</h1>
      {hasWon && <h1>You won!</h1>}
      <CardContainer>
        {cards.map((card) => (
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
  );
};

export default App;
