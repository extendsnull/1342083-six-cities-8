import {createReducer} from '@reduxjs/toolkit';
import {CityName, SortType} from '../../const';
import {
  setActiveCity,
  setCities,
  setComments,
  setNearbyOffers,
  setOffer,
  setOffers,
  setSortType
} from '../actions';
import type {AppData} from '../types';

const initialState: AppData = {
  offer: null,
  offers: [],
  cities: {},
  nearbyOffers: [],
  comments: [],
  activeCity: CityName.Paris,
  sortType: SortType.Popular,
};

const dataReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setCities, (state, action) => {
      state.cities = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    });
});

export {
  dataReducer
};
