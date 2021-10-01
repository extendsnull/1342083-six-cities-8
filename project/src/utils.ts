import {RATING_MAX_VALUE} from './const';

export const getRatingValue = (rating: number): string => `${Math.ceil((100 / RATING_MAX_VALUE) * rating)}%`;
