import { getRandomArrayElement, getRandomInteger } from '../utils/common.js';
import { EVENT_TYPES, MIN_BASIC_PRICE, MAX_BASIC_PRICE } from '../const.js';
import dayjs from 'dayjs';

const mockEvents = [
  {
    id: 1,
    type: getRandomArrayElement(EVENT_TYPES),
    basicPrice: getRandomInteger(MIN_BASIC_PRICE, MAX_BASIC_PRICE),
    dateFrom: dayjs('2024-04-14 13:00'),
    dateTo: dayjs('2024-04-14 18:00'),
    destination: 1,
    offers: [1],
    isFavorite: false
  },
  {
    id: 2,
    type: getRandomArrayElement(EVENT_TYPES),
    basicPrice: getRandomInteger(MIN_BASIC_PRICE, MAX_BASIC_PRICE),
    dateFrom: dayjs('2024-03-18 08:00'),
    dateTo: dayjs('2024-03-18 12:30'),
    destination: 2,
    offers: [2],
    isFavorite: false
  },
  {
    id: 3,
    type: getRandomArrayElement(EVENT_TYPES),
    basicPrice: getRandomInteger(MIN_BASIC_PRICE, MAX_BASIC_PRICE),
    dateFrom: dayjs('2024-04-08 12:15'),
    dateTo: dayjs('2024-04-08 17:45'),
    destination: 3,
    offers: [3],
    isFavorite: false
  },
  {
    id: 4,
    type: getRandomArrayElement(EVENT_TYPES),
    basicPrice: getRandomInteger(MIN_BASIC_PRICE, MAX_BASIC_PRICE),
    dateFrom: dayjs('2024-05-26 10:20'),
    dateTo: dayjs('2024-05-26 12:40'),
    destination: 1,
    offers: [4],
    isFavorite: false
  }
];

export { mockEvents };
