import React from 'react';
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { useCards } from '../../@hooks/useCards';
import { CardType } from '../../Components';
import { styles } from './CardTypes.styles';

const CardTypes: React.FC = () => {
  const {cardTypes, onCardTypePress, isLoading} = useCards();
  return (
    <SafeAreaView>
      {isLoading && <ActivityIndicator testID="loading-indicator" />}
      {cardTypes?.length > 0 && (
        <FlatList
          testID="card-types-list"
          data={cardTypes}
          contentContainerStyle={styles.contentContainer}
          renderItem={({item}) => (
            <CardType item={item} onCardTypePress={onCardTypePress} />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default CardTypes;
