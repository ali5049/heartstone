export interface ICard {
  cardId: string;
  dbfId: number;
  name: string;
  cardSet: string;
  type: string;
  faction: string;
  rarity: string;
  cost: number;
  playerClass: string;
  locale: string;
}

export interface ICards {
  [key: string]: ICard[];
}
