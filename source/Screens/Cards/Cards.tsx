import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import { ICard } from '../../@types/card.types';
import { CardsProps } from '../../@types/navigation.types';
import { Card } from '../../Components';

const ListEmptyComponent: React.FC = () => <Text>No cards available</Text>;

const Cards: React.FC<CardsProps> = ({route}) => {
  const cards: ICard[] = route.params.cards || [];

  return (
    <SafeAreaView>
      <FlatList
        ListEmptyComponent={ListEmptyComponent}
        data={cards}
        renderItem={({item}) => <Card card={item} />}
      />
    </SafeAreaView>
  );
};

export default Cards;
