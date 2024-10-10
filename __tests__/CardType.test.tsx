import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CardType from '../source/Components/CardType';

describe('CardType Component', () => {
  const mockOnCardTypePress = jest.fn();

  it('renders the card type correctly', () => {
    const { getByText } = render(<CardType item="Hero" onCardTypePress={mockOnCardTypePress} />);

    expect(getByText('Hero')).toBeTruthy();
  });

  it('calls onCardTypePress with the correct argument when pressed', () => {

    const { getByText } = render(<CardType item="Spell" onCardTypePress={mockOnCardTypePress} />);

    const cardTypeButton = getByText('Spell');
    fireEvent.press(cardTypeButton);

    expect(mockOnCardTypePress).toHaveBeenCalledWith('Spell');
  });
});
