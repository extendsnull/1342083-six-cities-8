import {CityName, SortType} from '../../const';
import {makeMockAppDataState, makeMockCities, makeMockComment, makeMockOffer} from '../../utils';
import {
  setActiveCity,
  setCities,
  setComments,
  setNearbyOffers,
  setOffer,
  setOffers,
  setSortType,
  updateOffer
} from '../actions';
import type {AppData} from '../types';
import {dataReducer} from './data-reducer';

const initialState: AppData = makeMockAppDataState();

describe('Reducer: dataReducer', () => {
  it('without additional parameters should return initial state', () => {
    expect(dataReducer(void 0, {type: 'unknownAction'})).toEqual<AppData>(initialState);
  });

  it('should set offer', () => {
    const state = {...initialState};
    const offer = makeMockOffer();

    expect(dataReducer(state, setOffer(offer))).toEqual<AppData>({
      ...initialState,
      offer,
    });
  });

  it('should set offers', () => {
    const state = {...initialState};
    const offers = [makeMockOffer(), makeMockOffer(), makeMockOffer()];

    expect(dataReducer(state, setOffers(offers))).toEqual<AppData>({
      ...initialState,
      offers,
    });
  });

  it('should update offer', () => {
    const [offer, anotherOffer] = [makeMockOffer(), makeMockOffer()];
    const offerToUpdate = makeMockOffer();
    const updatedOffer = makeMockOffer();
    updatedOffer.id = offerToUpdate.id;

    const state = {
      ...initialState,
      offers: [offer, offerToUpdate, anotherOffer],
    };

    expect(dataReducer(state, updateOffer(updatedOffer))).toEqual<AppData>({
      ...initialState,
      offers: [offer, updatedOffer, anotherOffer],
    });
  });


  it('should set cities', () => {
    const state = {...initialState};
    const cities = makeMockCities();

    expect(dataReducer(state, setCities(cities))).toEqual<AppData>({
      ...initialState,
      cities,
    });
  });

  it('should set nearby offers', () => {
    const state = {...initialState};
    const nearbyOffers = [makeMockOffer(), makeMockOffer()];

    expect(dataReducer(state, setNearbyOffers(nearbyOffers))).toEqual<AppData>({
      ...initialState,
      nearbyOffers,
    });
  });

  it('should set comments', () => {
    const state = {...initialState};
    const comments = [makeMockComment(), makeMockComment()];

    expect(dataReducer(state, setComments(comments))).toEqual<AppData>({
      ...initialState,
      comments,
    });
  });

  it('should set active city', () => {
    const state = {...initialState};
    const activeCity = CityName.Dusseldorf;

    expect(dataReducer(state, setActiveCity(activeCity))).toEqual<AppData>({
      ...initialState,
      activeCity,
    });
  });

  it('should set sort type', () => {
    const state = {...initialState};
    const sortType = SortType.PriceDescent;

    expect(dataReducer(state, setSortType(sortType))).toEqual<AppData>({
      ...initialState,
      sortType,
    });
  });
});
