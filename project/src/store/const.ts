enum ActionType {
  SetOffer = 'data/setOffer',
  SetNearbyOffers = 'data/setNearbyOffers',
  UpdateOffer = 'data/updateOffer',
  SetComments = 'data/setComments',
  SetIsFavorite = 'data/setIsFavorite',
  SetOffers = 'data/setOffers',
  SetCities = 'data/setCities',
  SetActiveCity = 'data/setActiveCity',
  SetAuthorizationInfo = 'data/setAuthorizationInfo',
  SetSortType = 'data/setSortType',
  RedirectToRoute = 'app/redirectToRoute',
  RequireAuthorization = 'user/requireAuthorization',
  SetIsAuthorized = 'user/setIsAuthorized',
  RequireLogout = 'user/requireLogout',
}

enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export {
  ActionType,
  NameSpace
};
