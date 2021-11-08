import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router';
import {offerTypeToReadable} from '../../const';
import {fetchOfferAction} from '../../store/api-action';
import {getComments, getIsAuthorized, getNearbyOffers, getOffer} from '../../store/selectors';
import type {History} from '../../types';
import {getClassNames, getRatingValue, scrollToTop} from '../../utils';
import Header from '../header/header';
import Map from '../map/map';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferGoods from '../offer-goods/offer-goods';
import OfferNearby from '../offer-nearby/offer-nearby';
import Reviews from '../reviews/reviews';
import Spinner from '../spinner/spinner';

function OfferScreen(): JSX.Element | null {
  const comments = useSelector(getComments);
  const isAuthorized = useSelector(getIsAuthorized);
  const nearbyOffers = useSelector(getNearbyOffers);
  const offer = useSelector(getOffer);
  const dispatch = useDispatch();
  const params = useParams<History>();
  const id = parseInt(params.id, 10);

  useEffect(() => {
    dispatch(fetchOfferAction(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (offer) {
      scrollToTop();
    }
  }, [offer]);

  const getScreen = () => {
    if (!offer) {
      return (
        <main className="page__main page__main--spinner">
          <Spinner />
        </main>
      );
    }

    const ratingValue = getRatingValue(offer.rating);

    return (
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery images={offer.images} />
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{offer.title}</h1>
                <button
                  className={getClassNames([
                    'property__bookmark-button',
                    {'property__bookmark-button--active': offer.isFavorite},
                    'button',
                  ])}
                  type="button"
                >
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingValue}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offerTypeToReadable[offer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.maxAdults} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <OfferGoods goods={offer.goods} />
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={getClassNames([
                      'property__avatar-wrapper',
                      {'property__avatar-wrapper--pro': offer.host.isPro},
                      'user__avatar-wrapper',
                    ])}
                  >
                    <img
                      className="property__avatar user__avatar"
                      width="74"
                      height="74"
                      alt="Host avatar"
                      src={offer.host.avatarUrl}
                    />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <Reviews
                offer={offer}
                comments={comments}
                isAuthorized={isAuthorized}
              />
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearbyOffers} activeOffer={null} />
          </section>
        </section>
        <OfferNearby offers={nearbyOffers} />
      </main>
    );
  };

  return (
    <div className="page">
      <Header />
      {getScreen()}
    </div>
  );
}

export default OfferScreen;
