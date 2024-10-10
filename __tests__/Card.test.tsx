import React from 'react';
import { render } from '@testing-library/react-native';
import Card from '../source/Components/Card';
import { ICard } from '../source/@types/card.types';

describe('Card Component', () => {
  const mockCard: ICard = {
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
  };

  it('renders the card information correctly', () => {
    const { getByText } = render(<Card card={mockCard} />);

    expect(getByText('ID: 342342')).toBeTruthy();
    expect(getByText('Type: Spell')).toBeTruthy();
    expect(getByText('Name: Inner Range')).toBeTruthy();
    expect(getByText('Card Set: Basic')).toBeTruthy();
    expect(getByText('Player Class: Paladin')).toBeTruthy();
    expect(getByText('Locale: enUS')).toBeTruthy();
  });

  it('does not render incorrect card information', () => {
    const { queryByText } = render(<Card card={mockCard} />);

    expect(queryByText('Type: Test')).toBeNull();
    expect(queryByText('Name: Test')).toBeNull();
  });
});
