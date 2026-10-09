export type Duration = '30d' | 'forever';
export type RankId = 'vip' | 'svip' | 'sponsor' | 'elita';
export type KeyId = 'rzadki' | 'epicki' | 'spaczony' | 'legendarny' | 'eventowy' | 'kres';

export type Rank = {
  id: RankId;
  name: string;
  color: string;
  prefix: string;
  price: Record<Duration, number>;
  description: string;
  inherits: string;
  perks: string[];
  drop: string[];
};

export type KeyItem = {
  id: KeyId;
  name: string;
  color: string;
  basePrice: number;
  note?: string;
  tag?: string;
  special?: boolean;
  weight: number;
  description: string;
  drops: Array<{ label: string; chance: number; color: string }>;
  featured?: boolean;
  prices: Record<1 | 3 | 5 | 10, number>;
};

export type BundleItem = {
  id: string;
  name: string;
  price: number;
  original: number;
  description: string;
  highlight?: boolean;
};

export const rankList: Rank[] = [
  {
    id: 'vip',
    name: 'VIP',
    color: '#7ec8ff',
    prefix: '[VIP]',
    price: { '30d': 15, forever: 35 },
    description: 'Startowe ulepszenie do prostego, bezpiecznego playu.',
    inherits: 'gracz',
    perks: [
      '2x /sethome',
      '/kit vip co 24h',
      '/enderchest, /craft',
      'kolor nicku: 8 podstawowych kolorów',
      '/hat',
      '8 slotów /ah',
      'kolejka priorytetowa poziom 1',
      '1x Klucz Rzadki przy nadaniu',
    ],
    drop: ['1x Klucz Rzadki przy nadaniu rangi'],
  },
  {
    id: 'svip',
    name: 'SVIP',
    color: '#c084fc',
    prefix: '[SVIP]',
    price: { '30d': 25, forever: 59 },
    description: 'Więcej home, lepsze kity i wygoda na spawnie.',
    inherits: 'wszystko z VIP',
    perks: [
      '4x /sethome',
      '/kit svip co 24h',
      '/feed i /heal',
      '/back po śmierci',
      '/fly tylko na spawnie',
      '15 slotów /ah',
      'kolejka poziom 2',
      '2x Klucz Epicki przy nadaniu',
    ],
    drop: ['2x Klucz Epicki przy nadaniu rangi'],
  },
  {
    id: 'sponsor',
    name: 'SPONSOR',
    color: '#e7c36a',
    prefix: '[SPONSOR]',
    price: { '30d': 40, forever: 89 },
    description: 'Wygoda, sponsorzy oraz większa swoboda na mapie.',
    inherits: 'wszystko z SVIP',
    perks: [
      '6x /sethome',
      '/kit sponsor co 12h',
      '/repair własnych przedmiotów',
      'kolorowy czat',
      'krótki tytuł na wejściu',
      '25 slotów /ah',
      'kolejka poziom 3',
      '1x Klucz Legendarny i 2x Klucz Epicki przy nadaniu',
      'dostęp do /warp sponsor',
    ],
    drop: ['1x Klucz Legendarny i 2x Klucz Epicki przy nadaniu'],
  },
  {
    id: 'elita',
    name: 'ELITA',
    color: '#e7c36a',
    prefix: '[ELITA]',
    price: { '30d': 65, forever: 149 },
    description: 'Najwyższa ranga, najwięcej możliwości i specjalne warp.',
    inherits: 'wszystko z SPONSOR',
    perks: [
      '10x /sethome',
      '/kit elita co 12h',
      '/fly na spawnie i /warp elita',
      '/anvil, /sort',
      'tęcza nicku',
      '40 slotów /ah',
      'kolejka poziom 4',
      '1x Klucz Kresu + 1x Klucz Spaczony przy nadaniu',
      '/warp elita: mała wyspa purpuru',
    ],
    drop: ['1x Klucz Kresu + 1x Klucz Spaczony przy nadaniu'],
  },
];

export const keyList: KeyItem[] = [
  {
    id: 'rzadki',
    name: 'Klucz Rzadki',
    color: '#7ec8ff',
    basePrice: 4,
    weight: 35,
    description: 'Skrzynia na /warp skrzynie.',
    prices: { 1: 4, 3: 11, 5: 18, 10: 34 },
    drops: [
      { label: '5 000–15 000$', chance: 40, color: '#7ec8ff' },
      { label: '16 diamentów', chance: 25, color: '#7ec8ff' },
      { label: 'Zestaw „Rzadki”', chance: 15, color: '#7ec8ff' },
      { label: '1x dodatkowy Klucz Rzadki', chance: 10, color: '#7ec8ff' },
      { label: 'bon 10 000$', chance: 7, color: '#7ec8ff' },
      { label: '1x Klucz Epicki', chance: 3, color: '#c084fc' },
    ],
  },
  {
    id: 'epicki',
    name: 'Klucz Epicki',
    color: '#c084fc',
    basePrice: 7,
    weight: 52,
    description: 'Dobry balans między ceną a zyskiem.',
    prices: { 1: 7, 3: 19, 5: 31, 10: 60 },
    drops: [
      { label: '25 000–60 000$', chance: 30, color: '#c084fc' },
      { label: 'diamentowa zbroja Protection II', chance: 22, color: '#c084fc' },
      { label: 'miecz Sharpness IV + 16 złotych jabłek', chance: 18, color: '#c084fc' },
      { label: '1x Klucz Epicki', chance: 12, color: '#c084fc' },
      { label: 'bon 40 000$', chance: 10, color: '#c084fc' },
      { label: '1x Klucz Legendarny', chance: 8, color: '#ff8a3d' },
    ],
  },
  {
    id: 'spaczony',
    name: 'Klucz Spaczony',
    color: '#b6ff4a',
    basePrice: 9,
    weight: 41,
    special: true,
    note: 'Może wypaść śmieć. Może wypaść rzecz, której nie ma w innych skrzyniach.',
    description: 'To nie jest najlepszy klucz. To klucz o dużej rozpiętości.',
    prices: { 1: 9, 3: 25, 5: 40, 10: 78 },
    drops: [
      { label: '32 zgniłe mięso albo 16 zatrutych ziemniaków', chance: 28, color: '#b6ff4a' },
      { label: '10 000–30 000$', chance: 20, color: '#b6ff4a' },
      { label: 'spaczone jabłko', chance: 16, color: '#b6ff4a' },
      { label: 'pęknięta netheritowa zbroja Protection I', chance: 14, color: '#b6ff4a' },
      { label: '1x Klucz Spaczony', chance: 10, color: '#b6ff4a' },
      { label: '80 000$', chance: 7, color: '#b6ff4a' },
      { label: '1x Klucz Kresu', chance: 5, color: '#e7c36a' },
    ],
  },
  {
    id: 'legendarny',
    name: 'Klucz Legendarny',
    color: '#ff8a3d',
    basePrice: 11,
    weight: 68,
    description: 'Wysoka jakość w dobrym, stabilnym przedziale.',
    prices: { 1: 11, 3: 30, 5: 49, 10: 95 },
    drops: [
      { label: '80 000–150 000$', chance: 26, color: '#ff8a3d' },
      { label: 'netheritowa zbroja Protection III', chance: 22, color: '#ff8a3d' },
      { label: 'miecz Sharpness V + 4 złote marchewki', chance: 18, color: '#ff8a3d' },
      { label: 'elytra z Unbreaking II', chance: 12, color: '#ff8a3d' },
      { label: '1x Klucz Legendarny', chance: 10, color: '#ff8a3d' },
      { label: 'bon 100 000$', chance: 7, color: '#ff8a3d' },
      { label: '1x Klucz Kresu', chance: 5, color: '#e7c36a' },
    ],
  },
  {
    id: 'eventowy',
    name: 'Klucz Eventowy',
    color: '#ffb703',
    basePrice: 12,
    tag: 'TYLKO W EVENTE',
    weight: 60,
    description: 'Sezonowy klucz, aktywny tylko podczas eventu.',
    prices: { 1: 12, 3: 33, 5: 54, 10: 105 },
    drops: [
      { label: 'kosmetyk sezonu', chance: 30, color: '#ffb703' },
      { label: '50 000–90 000$', chance: 22, color: '#ffb703' },
      { label: 'zestaw eventowy', chance: 18, color: '#ffb703' },
      { label: '1x Klucz Eventowy', chance: 12, color: '#ffb703' },
      { label: 'bon 60 000$', chance: 10, color: '#ffb703' },
      { label: '1x Klucz Legendarny', chance: 8, color: '#ff8a3d' },
    ],
  },
  {
    id: 'kres',
    name: 'Klucz Kresu',
    color: '#e7c36a',
    basePrice: 15,
    featured: true,
    weight: 88,
    description: 'Najlepsza skrzynia na serwerze. Specjalnie za 15 zł.',
    prices: { 1: 15, 3: 42, 5: 70, 10: 130 },
    drops: [
      { label: '150 000–300 000$', chance: 24, color: '#e7c36a' },
      { label: 'pełna netheritowa zbroja Protection IV', chance: 18, color: '#e7c36a' },
      { label: 'miecz netheritowy Sharpness V, Fire Aspect II', chance: 16, color: '#e7c36a' },
      { label: 'elytra Unbreaking III + Mending', chance: 12, color: '#e7c36a' },
      { label: '1x Klucz Kresu', chance: 10, color: '#e7c36a' },
      { label: 'shulker z losowym kitem elitarnym', chance: 8, color: '#e7c36a' },
      { label: 'bon 250 000$', chance: 7, color: '#e7c36a' },
      { label: 'voucher: ranga VIP na 30 dni', chance: 5, color: '#7ec8ff' },
    ],
  },
];

export const keyOrder = ['kres', 'rzadki', 'epicki', 'spaczony', 'legendarny', 'eventowy'];

export const bundles: BundleItem[] = [
  {
    id: 'na-start',
    name: 'Na start',
    price: 30,
    original: 34,
    description: '5x Rzadki + 2x Epicki',
  },
  {
    id: 'spaczony-wieczor',
    name: 'Spaczony wieczór',
    price: 34,
    original: 38,
    description: '3x Spaczony + 1x Legendarny',
  },
  {
    id: 'kres-x3',
    name: 'Kres x3',
    price: 42,
    original: 42,
    description: '3x Klucz Kresu',
    highlight: true,
  },
  {
    id: 'pelna-drabinka',
    name: 'Pełna drabinka',
    price: 52,
    original: 58,
    description: 'po 1 sztuce każdego klucza',
  },
];

export const compareRows: Array<{ label: string; values: Record<RankId, string> }> = [
  { label: 'Prefix w czacie', values: { vip: '[VIP]', svip: '[SVIP]', sponsor: '[SPONSOR]', elita: '[ELITA]' } },
  { label: 'Home', values: { vip: '2', svip: '4', sponsor: '6', elita: '10' } },
  { label: 'Kit dzienny', values: { vip: 'tak', svip: 'tak', sponsor: 'tak', elita: 'tak' } },
  { label: '/fly', values: { vip: 'nie', svip: 'na spawnie', sponsor: 'na spawnie', elita: 'na spawnie + /warp elita' } },
  { label: 'Sloty /ah', values: { vip: '8', svip: '15', sponsor: '25', elita: '40' } },
  { label: 'Kolejka', values: { vip: '1', svip: '2', sponsor: '3', elita: '4' } },
  { label: 'Slot /warp sponsor', values: { vip: 'nie', svip: 'nie', sponsor: 'tak', elita: 'tak' } },
  { label: 'Klucz przy nadaniu', values: { vip: 'Rzadki', svip: 'Epicki', sponsor: 'Legendarny + 2x Epicki', elita: 'Kres + Spaczony' } },
];

export const heroHighlights = ['non-premium • BoxPvP • Strefa Kresu'];
