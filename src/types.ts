import type { KeyItem, Rank } from './shop';

export type CartItem = {
  id: string;
  productId: string;
  type: 'rank' | 'key' | 'bundle';
  variant: string | number;
  nick: string;
  price: number;
  label: string;
  item?: Rank | KeyItem;
};
