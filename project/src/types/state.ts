import {CityName} from '../const';
import type Offer from './offer';

type State = {
  activeCity: CityName;
  offers: Offer[] | [];
}

export default State;
