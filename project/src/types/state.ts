import {AuthorizationStatus, CityName} from '../const';
import type Offer from './offer';
import type {Cities} from './city';

type State = {
  activeCity: CityName;
  offers: Offer[];
  cities: Cities;
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean;
}

export default State;
