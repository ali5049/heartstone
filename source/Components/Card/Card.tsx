import React from 'react';
import {Text, View} from 'react-native';
import {ICard} from '../../@types/card.types';
import {styles} from './Card.styles';

const Card: React.FC<{card: ICard}> = ({card}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>ID: {card.cardId}</Text>
      <Text style={styles.text}>Type: {card.type}</Text>
      <Text style={styles.text}>Name: {card.name}</Text>
      <Text style={styles.text}>Card Set: {card.cardSet}</Text>
      <Text style={styles.text}>Player Class: {card.playerClass}</Text>
      <Text style={styles.text}>Locale: {card.locale}</Text>
    </View>
  );
};

export default Card;
