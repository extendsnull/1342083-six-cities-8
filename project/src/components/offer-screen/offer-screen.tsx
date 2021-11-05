import {useEffect, useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {fetchOfferAction} from '../../store/api-action';
import {useParams} from 'react-router';
import {Redirect} from 'react-router-dom';
import Header from '../header/header';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import {humanizedOfferTypeMap, AppRoute} from '../../const';
import {getClassNames, getRatingValue} from '../../utils';
import type {History, State, ThunkAppDispatch} from '../../types';
import Spinner from '../spinner/spinner';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferGoods from '../offer-goods/offer-goods';
import OfferNearby from '../offer-nearby/offer-nearby';

type OfferScreenProps = {
  onReviewFormSubmit: () => void;
}

const mapStateToProps = ({offer, nearbyOffers, comments}: State) => ({
  offer,
  nearbyOffers,
  comments,
});

const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onFetchOffer(id: number) {
    dispatch(fetchOfferAction(id));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function OfferScreen(props: OfferScreenProps & PropsFromRedux): JSX.Element | null {
  const {offer, nearbyOffers, comments, onReviewFormSubmit, onFetchOffer} = props;
  const [isLoaded, setLoading] = useState(true);
  const params = useParams<History>();
  const id = parseInt(params.id, 10);

  useEffect(() => {
    onFetchOffer(id);
  }, [id, onFetchOffer]);

  useEffect(() => {
    if (offer) {
      setLoading(false);

      if (window.scrollY > 0) {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    }
  }, [offer]);

  const getScreen = () => {
    if (isLoaded) {
      return (
        <main className="page__main page__main--spinner">
          <Spinner />
        </main>
      );
    }

    if (offer) {
      const ratingValue = getRatingValue(offer.rating);

      const getPremimLabel = (isPremium: boolean): JSX.Element | null => {
        if (isPremium) {
          return (
            <div className="property__mark">
              <span>Premium</span>
            </div>
          );
        }

        return null;
      };

      const getProLabel = (isPro: boolean): JSX.Element | null => {
        if (isPro) {
          return (
            <span className="property__user-status">Pro</span>
          );
        }

        return null;
      };

      return (
        <main className="page__main page__main--property">
          <section className="property">
            <OfferGallery images={offer.images} />
            <div className="property__container container">
              <div className="property__wrapper">
                {getPremimLabel(offer.isPremium)}
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
                    {humanizedOfferTypeMap[offer.type]}
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
                      <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">{offer.host.name}</span>
                    {getProLabel(offer.host.isPro)}
                  </div>
                  <div className="property__description">
                    <p className="property__text">{offer.description}</p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot; <span className="reviews__amount">{comments.length}</span>
                  </h2>
                  <ul className="reviews__list">
                    {comments.map((comment) => (
                      <Review
                        comment={comment}
                        key={comment.id}
                      />
                    ))}
                  </ul>
                  <ReviewForm onReviewFormSubmit={onReviewFormSubmit} />
                </section>
              </div>
            </div>
            <section className="property__map map"></section>
          </section>
          <OfferNearby offers={nearbyOffers} />
        </main>
      );
    }

    return <Redirect to={AppRoute.NotFound} />;
  };

  return (
    <div className="page">
      <Header hasNav />
      {getScreen()}
    </div>
  );
}

export {OfferScreen};
export default connector(OfferScreen);
