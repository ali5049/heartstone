import {RouteProp} from '@react-navigation/native';
import {ICard} from './card.types';

export type RootStackParamList = {
  CardTypes: {};
  Cards: {cards: ICard[]};
};

export interface CardsProps {
  route: RouteProp<RootStackParamList, 'Cards'>;
}
