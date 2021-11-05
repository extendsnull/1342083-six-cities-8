import {AuthorizationStatus, CityName} from '../const';
import type {Offer} from './offer';
import type {Cities} from './city';
import type {Comment} from './comment';
import type {AuthInfo} from './auth-info';

type State = {
  activeCity: CityName;
  offers: Offer[];
  cities: Cities;
  authorizationStatus: AuthorizationStatus,
  isAuthorized: boolean;
  authInfo: AuthInfo | null,
  offer: Offer | null;
  comments: Comment[];
  nearbyOffers: Offer[];
}

export type {
  State
};
