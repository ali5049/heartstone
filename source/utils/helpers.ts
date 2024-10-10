import {ICard, ICards} from '../@types/card.types';

export const getUniqueTypes = (result: ICards) => {
  const typesSet = new Set<string>();
  for (const category in result) {
    result[category].forEach(item => {
      if (item?.type) {
        typesSet.add(item.type);
      }
    });
  }
  return Array.from(typesSet);
};

// Function to get cards based on type
export const getCardsByType = (type: string, cards: ICards) => {
  const resultArray: ICard[] = [];
  for (const category in cards) {
    cards[category].forEach(item => {
      if (item?.type === type) {
        resultArray.push(item);
      }
    });
  }
  return resultArray;
};
