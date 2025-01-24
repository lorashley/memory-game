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
  }, []);

  const onCardClicked = (card: PlayingCard) => {
    console.log('card clicked', card.value);
    if (matchA && matchB) return; // do nothing
    if (!matchA) {
      console.log('setting card 1');
      console.log('match1:', matchA);
      setMatchA(card);
    } else if (!matchB) {
      console.log('setting card 2');
      console.log('match2:', matchB);
      setMatchB(card);
    }
    console.log('both cards set');
  };

  // have A,B --> if a,b match leave them flipped and add a point
  //end when points = pairs

  // list for when a and b have matches, compare, take action

  useEffect(() => {
    if (matchA && matchB) {
      console.log('useEffect both cards set');
      if (matchA.value === matchB.value) {
        console.log('found a match');
        setFoundIndexes((prev) => [...prev, matchA.id, matchB.id]);
      } else {
        console.log('not a match');
      }
      console.log('resetting pairs');
      setTimeout(() => {
        resetMatches();
      }, 2000);
    }
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
