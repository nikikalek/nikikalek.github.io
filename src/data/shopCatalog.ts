import { keyList, rankList } from './shop';

export const shopCatalog = [
  ...rankList.slice().reverse(),
  ...keyList.slice().sort((a, b) => b.weight - a.weight),
];
