import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { ICards } from '../@types/card.types';
import { RootStackParamList } from '../@types/navigation.types';
import axiosInstance from '../Services/axiosInterceptor';
import { getCardsByType, getUniqueTypes } from '../utils/helpers';

type CardsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cards'>;

const useCards = () => {

    const [cardTypes, setCardTypes] = useState<string[]>([]);
    const [cards, setCards] = useState<ICards>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const navigation = useNavigation<CardsScreenNavigationProp>();

    // Navigate to cards screen on card type press
    const onCardTypePress = (type: string) => {
        //Filter the cards based on selected card type
        const filteredCards = getCardsByType(type, cards);
        navigation.navigate('Cards', { cards: filteredCards });
    };

    // Fetch all the cards from rapid api
    const fetchCards = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axiosInstance({
                url: 'cards',
                method: 'GET',
            });
            setIsLoading(false);
            setCards(response?.data);

            //Get the unique card types to display on card types screen
            const _types = getUniqueTypes(response?.data);
            console.log('unique types', _types);
            setCardTypes(_types);
        }
        catch (err) {
            console.log('error is', err);
        }
        setIsLoading(false);
    }, []);


    useEffect(() => {
        fetchCards();
    }, [fetchCards]);

    return {
        cardTypes,
        onCardTypePress,
        isLoading,
    };

};

export { useCards };


