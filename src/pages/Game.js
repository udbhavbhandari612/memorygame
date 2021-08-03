import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {useHistory} from 'react-router-native';
import Card from '../components/Card';

const OPENED = 1;
const CLOSED = 0;

export default function Game() {
  const history = useHistory();
  const data = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const [cards, setCards] = useState([]);
  const [tries, setTries] = useState(0);
  const [matches, setMatches] = useState(0);
  const [openCards, setOpenCards] = useState(0);
  const [gameState, setGameState] = useState(true);

  useEffect(() => {
    fillCards();
  }, []);

  useEffect(() => {
    if (openCards >= 2) checkMatch();
    else setGameState(true);
  }, [openCards]);

  useEffect(() => {
    if (matches === 8) {
      setGameState(false);
      alert(
        'Congratuations! you have won the game. \n\nYou will be redirected to the home screen.',
      );
      setTimeout(() => {
        history.goBack();
      }, 2000);
    }
  }, [matches]);

  const fillCards = () => {
    let list = [];
    while (list.length !== 16) {
      const index = Math.floor(Math.random() * 100) % 8;
      console.log(index);
      const value = data[index];
      if (list.filter(e => e.value === value).length < 2)
        list.push({
          value,
          status: CLOSED,
          vanished,
          id: list.length.toString(),
        });
      else continue;
    }

    setCards(list);
  };

  const checkMatch = () => {
    const couple = cards.filter(e => e.status === OPENED);
    if (couple[0].value === couple[1].value) {
      setMatches(matches + 1);
    }
    setTries(tries + 1);
    setTimeout(() => {
      let list = cards;
      list.forEach(e => {
        e.status = CLOSED;
        if (couple.find(val => val.id === e.id)) e.vanished = true;
      });
      setCards([...list]);
      setOpenCards(0);
      setGameState(true);
    }, 1000);
  };

  const handleCardOpened = props => {
    setGameState(false);

    let list = cards;
    const card = list.find(e => e.id === props);
    card.status = OPENED;
    setCards([...list]);
    setOpenCards(openCards + 1);
  };
  const handleCardClosed = () => {
    if (openCards > 0) setOpenCards(openCards - 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.scorecard}>
        <Text>Matches : {matches}</Text>
        <Text>Tries : {tries}</Text>
      </View>
      {cards.map((v, i) => {
        return (
          <Card
            title={v.value}
            id={v.id}
            key={i.toString()}
            style={styles.card}
            cardState={v.status}
            vanished={v.vanished}
            clickable={gameState}
            cardOpened={props => handleCardOpened(props)}
            cardClosed={props => handleCardClosed(props)}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  card: {
    margin: '0.5%',
    width: '24%',
    height: 80,
  },
  scorecard: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 30,
  },
});
