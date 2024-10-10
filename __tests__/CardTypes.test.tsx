
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import {CardTypes} from '../source/Screens';
import * as useCardsModule from '../source/@hooks/useCards';

jest.mock('../source/@hooks/useCards');

describe('CardTypes Component', () => {
    it('should display loading indicator when isLoading is true', () => {
        (useCardsModule.useCards as jest.Mock).mockReturnValue({
            cardTypes: [],
            onCardTypePress: jest.fn(),
            isLoading: true,
        });

        const { getByTestId } = render(<CardTypes />);
        expect(getByTestId('loading-indicator')).toBeTruthy();
    });

    it('should render card types when available', async () => {
        const mockCardTypes = ['Type1', 'Type2'];
        (useCardsModule.useCards as jest.Mock).mockReturnValue({
            cardTypes: mockCardTypes,
            onCardTypePress: jest.fn(),
            isLoading: false,
        });

        const { getAllByText } = render(<CardTypes />);

        await waitFor(() => {
            expect(getAllByText(/Type/i)).toHaveLength(mockCardTypes.length);
        });
    });

    it('should not render anything when there are no card types', () => {
        (useCardsModule.useCards as jest.Mock).mockReturnValue({
            cardTypes: [],
            onCardTypePress: jest.fn(),
            isLoading: false,
        });

        const { queryByText } = render(<CardTypes />);
        expect(queryByText(/Type/i)).toBeNull();
    });

    test('Cards Component renders correctly', () => {
        const {toJSON} = render(<CardTypes />);
        expect(toJSON()).toMatchSnapshot();
      });
});
