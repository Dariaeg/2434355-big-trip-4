import { getRandomInteger } from '../utils/common.js';
import { MIN_OFFER_PRICE, MAX_OFFER_PRICE } from '../const.js';

function generateOffers (type) {
  return {
    offerType: type,
    offers: Array.from({ length: getRandomInteger(0, 5) }, () => ({
      id: crypto.randomUUID(),
      title: type,
      offerPrice: getRandomInteger(MIN_OFFER_PRICE, MAX_OFFER_PRICE)
    }))
  };
}

export { generateOffers };
