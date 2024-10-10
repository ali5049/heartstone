import React from 'react';
import {render} from '@testing-library/react-native';
import Cards from '../source/Screens/Cards';
import {ICard} from '../source/@types/card.types';

describe('Cards Component', () => {
  const mockCards: ICard[] = [
    {
      cardId: '342342',
      dbfId: 3432,
      name: 'Inner Range',
      cardSet: 'Basic',
      type: 'Spell',
      faction: 'Neutral',
      rarity: 'Free',
      cost: 5,
      playerClass: 'Paladin',
      locale: 'enUS',
    },
  ];
  const mockRoute = {
    params: {cards: mockCards},
    key: '1',
    name: 'Cards' as 'Cards',
  };
  const mockRoute2 = {
    params: {cards: []},
    key: '2',
    name: 'Cards' as 'Cards',
  };

  it('renders a list of cards', () => {
    const {getByText} = render(<Cards route={mockRoute} />);
    expect(getByText('Name: Inner Range')).toBeTruthy();
  });

  it('shows an empty state when there are no cards', () => {
    const {getByText} = render(<Cards route={mockRoute2} />);
    expect(getByText('No cards available')).toBeTruthy();
  });

  test('Cards Component renders correctly', () => {
    const {toJSON} = render(<Cards route={mockRoute2} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
