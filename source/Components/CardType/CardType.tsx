import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './CardType.styles';

// Define the props type for the component
type CardTypeProps = {
  item: string;
  onCardTypePress: (type: string) => void;
};

const CardType: React.FC<CardTypeProps> = ({item, onCardTypePress}) => {
  return (
    <TouchableOpacity
      style={styles.cardTypeContainer}
      onPress={() => onCardTypePress(item)}>
      <Text style={styles.cardTypeText}>{item}</Text>
    </TouchableOpacity>
  );
};

export default CardType;
