import {AuthorizationStatus, CityName} from '../const';
import type Offer from './offer';
import type {Cities} from './city';
import type AuthInfo from './auth-info';

type State = {
  activeCity: CityName;
  offers: Offer[];
  cities: Cities;
  authorizationStatus: AuthorizationStatus,
  authInfo: AuthInfo | null,
  isDataLoaded: boolean;
}

export default State;
