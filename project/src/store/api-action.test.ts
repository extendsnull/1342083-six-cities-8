import {configureMockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {adaptAuthorizationInfoToClient, adaptCommentToClient, adaptOfferToClient} from '../adapter';
import {ApiRoute, AppRoute, AuthorizationStatus} from '../const';
import {createApi} from '../services/api';
import {
  redirectToRoute,
  requireAuthorization,
  setAuthorizationInfo,
  setCities,
  setComments,
  setIsAuthorized,
  setNearbyOffers,
  setOffer,
  setOffers,
  updateOffer
} from './actions';
import {
  checkAuthAction,
  fetchOfferAction,
  fetchOffersAction,
  fetchOfferIsFavorite,
  reviewFormSubmitAction
} from './api-action';
import type {State} from './types';
import {
  getCities,
  makeMockComment,
  makeMockRawAuthorizationInfo,
  makeMockRawComment,
  makeMockRawOffer,
  replaceRouteParams
} from '../utils';

enum HttpStatusCode {
  Ok = 200,
  NotFound = 404,
}

describe('Async actions', () => {
  const onFakeUnauthorized = jest.fn();
  const api = createApi(onFakeUnauthorized());
  const mockApi = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  type ThunkAppDispatch = ThunkDispatch<State, typeof api, Action>;

  const mockStore = configureMockStore<State, Action, ThunkAppDispatch>(middlewares);

  it('should set all offer data when server return 200', async () => {
    const store = mockStore();
    const id = 42;
    const offerUrl = replaceRouteParams(ApiRoute.Hotels$Id, {id});
    const nearbyUrl = replaceRouteParams(ApiRoute.Hotels$IdNearby, {id});
    const commentsUrl = replaceRouteParams(ApiRoute.Comments$Id, {id});

    const rawOffer = makeMockRawOffer();
    const rawNearbyOffers = [makeMockRawOffer(), makeMockRawOffer()];
    const rawComments = [makeMockRawComment(), makeMockRawComment(), makeMockRawComment()];

    mockApi.onGet(offerUrl).reply(HttpStatusCode.Ok, rawOffer);
    mockApi.onGet(nearbyUrl).reply(HttpStatusCode.Ok, rawNearbyOffers);
    mockApi.onGet(commentsUrl).reply(HttpStatusCode.Ok, rawComments);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOfferAction(id));

    expect(store.getActions()).toEqual([
      setOffer(adaptOfferToClient(rawOffer)),
      setNearbyOffers(rawNearbyOffers.map(adaptOfferToClient)),
      setComments(rawComments.map(adaptCommentToClient)),
    ]);
  });

  it('should redirect to "Not Found" page when server didn\'t return offer', async () => {
    const store = mockStore();
    const id = 404;
    const offerUrl = replaceRouteParams(ApiRoute.Hotels$Id, {id});

    mockApi.onGet(offerUrl).reply(HttpStatusCode.NotFound);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOfferAction(id));

    expect(store.getActions()).toEqual([
      redirectToRoute(AppRoute.NotFound),
    ]);
  });

  it('should set offer info and comments when server didn\'t return nearby offers', async () => {
    const store = mockStore();
    const id = 42;
    const offerUrl = replaceRouteParams(ApiRoute.Hotels$Id, {id});
    const nearbyUrl = replaceRouteParams(ApiRoute.Hotels$IdNearby, {id});
    const commentsUrl = replaceRouteParams(ApiRoute.Comments$Id, {id});

    const rawOffer = makeMockRawOffer();
    const rawComments = [makeMockRawComment(), makeMockRawComment(), makeMockRawComment()];

    mockApi.onGet(offerUrl).reply(HttpStatusCode.Ok, rawOffer);
    mockApi.onGet(nearbyUrl).reply(HttpStatusCode.NotFound, []);
    mockApi.onGet(commentsUrl).reply(HttpStatusCode.Ok, rawComments);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOfferAction(id));

    expect(store.getActions()).toEqual([
      setOffer(adaptOfferToClient(rawOffer)),
      setComments(rawComments.map(adaptCommentToClient)),
    ]);
  });

  it('should set offer info and nearby offers when server didn\'t return comments', async () => {
    const store = mockStore();
    const id = 42;
    const offerUrl = replaceRouteParams(ApiRoute.Hotels$Id, {id});
    const nearbyUrl = replaceRouteParams(ApiRoute.Hotels$IdNearby, {id});
    const commentsUrl = replaceRouteParams(ApiRoute.Comments$Id, {id});

    const rawOffer = makeMockRawOffer();
    const rawNearbyOffers = [makeMockRawOffer(), makeMockRawOffer()];

    mockApi.onGet(offerUrl).reply(HttpStatusCode.Ok, rawOffer);
    mockApi.onGet(nearbyUrl).reply(HttpStatusCode.Ok, rawNearbyOffers);
    mockApi.onGet(commentsUrl).reply(HttpStatusCode.NotFound, []);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOfferAction(id));

    expect(store.getActions()).toEqual([
      setOffer(adaptOfferToClient(rawOffer)),
      setNearbyOffers(rawNearbyOffers.map(adaptOfferToClient)),
    ]);
  });

  it('should set offer info when server didn\'t return nearby offers and comments', async () => {
    const store = mockStore();
    const id = 42;
    const offerUrl = replaceRouteParams(ApiRoute.Hotels$Id, {id});
    const nearbyUrl = replaceRouteParams(ApiRoute.Hotels$IdNearby, {id});
    const commentsUrl = replaceRouteParams(ApiRoute.Comments$Id, {id});

    const rawOffer = makeMockRawOffer();

    mockApi.onGet(offerUrl).reply(HttpStatusCode.Ok, rawOffer);
    mockApi.onGet(nearbyUrl).reply(HttpStatusCode.NotFound, []);
    mockApi.onGet(commentsUrl).reply(HttpStatusCode.NotFound, []);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOfferAction(id));

    expect(store.getActions()).toEqual([
      setOffer(adaptOfferToClient(rawOffer)),
    ]);
  });

  it('should set offer is favorite when server return 200', async () => {
    const id = 42;
    const status = 1;
    const store = mockStore();
    const url = replaceRouteParams(ApiRoute.Favorite$Id$Status, {id, status});
    const rawOffer = makeMockRawOffer();
    rawOffer['is_favorite'] = Boolean(status);

    mockApi.onPost(url).reply(HttpStatusCode.Ok, rawOffer);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOfferIsFavorite(id, status));

    expect(store.getActions()).toEqual([
      updateOffer(adaptOfferToClient(rawOffer)),
    ]);
  });

  it('should set offers and mapped cities when server return 200', async () => {
    const store = mockStore();
    const rawOffers = [makeMockRawOffer(), makeMockRawOffer()];
    const offers = rawOffers.map(adaptOfferToClient);

    mockApi.onGet(ApiRoute.Hotels).reply(HttpStatusCode.Ok, rawOffers);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(fetchOffersAction());

    expect(store.getActions()).toEqual([
      setOffers(offers),
      setCities(getCities(offers)),
    ]);
  });

  it('should update comments when server return 200', async () => {
    const store = mockStore();
    const id = 42;
    const url = replaceRouteParams(ApiRoute.Comments$Id, {id});
    const rawComments = [makeMockRawComment(), makeMockRawComment()];

    mockApi.onPost(url).reply(HttpStatusCode.Ok, rawComments);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(reviewFormSubmitAction(id, makeMockComment()));

    expect(store.getActions()).toEqual([
      setComments(rawComments.map(adaptCommentToClient)),
    ]);
  });

  it('should set authorizarion data when server return 200', async () => {
    const store = mockStore();
    const rawAuthorizationInfo = makeMockRawAuthorizationInfo();
    const adaptedAuthorizationInfo = adaptAuthorizationInfoToClient(rawAuthorizationInfo);

    mockApi.onGet(ApiRoute.Login).reply(HttpStatusCode.Ok, rawAuthorizationInfo);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    expect(store.getActions()).toEqual([
      requireAuthorization(AuthorizationStatus.Auth),
      setIsAuthorized(true),
      setAuthorizationInfo(adaptedAuthorizationInfo),
    ]);
  });
});
