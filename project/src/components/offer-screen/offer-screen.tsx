import {connect, ConnectedProps} from 'react-redux';
import {useParams} from 'react-router';
import {Redirect} from 'react-router-dom';
import Header from '../header/header';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import OfferCard from '../offer-card/offer-card';
import {humanizedOfferTypeMap, AppRoute, OfferCardType} from '../../const';
import {getClassNames, getRandomId, getRatingValue} from '../../utils';
import type {Comment, State} from '../../types';

const MAX_IMAGES_COUNT = 6;
const MAX_NEAR_OFFERS_COUNT = 3;

type History = {
  id: string;
}

type OfferScreenProps = {
  comments: Comment[];
  onReviewFormSubmit: () => void;
}

const mapStateToProps = ({offers}: State) => ({
  offers,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function OfferScreen(props: OfferScreenProps & PropsFromRedux): JSX.Element {
  const {offers, comments, onReviewFormSubmit} = props;
  const params = useParams<History>();
  const currentOffer = offers.find((offer) => offer.id === parseInt(params.id, 10));

  if (!currentOffer) {
    return <Redirect to={AppRoute.NotFound} />;
  }


  const ratingValue: string = getRatingValue(currentOffer.rating);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          {Boolean(currentOffer.images.length) && (
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.slice(0, MAX_IMAGES_COUNT).map((image) => (
                  <div className="property__image-wrapper" key={getRandomId()}>
                    <img className="property__image" src={image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="property__container container">
            <div className="property__wrapper">
              {currentOffer.isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{currentOffer.title}</h1>
                <button
                  className={getClassNames([
                    'property__bookmark-button',
                    {'property__bookmark-button--active': currentOffer.isFavorite},
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
                <span className="property__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {humanizedOfferTypeMap[currentOffer.type]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {currentOffer.maxAdults} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{currentOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {Boolean(currentOffer.goods.length) && (
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((feature) => (
                      <li className="property__inside-item" key={feature}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div
                    className={getClassNames([
                      'property__avatar-wrapper',
                      {'property__avatar-wrapper--pro': currentOffer.host.isPro},
                      'user__avatar-wrapper',
                    ])}
                  >
                    <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {currentOffer.host.name}
                  </span>
                  {currentOffer.host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              {Boolean(comments.length) && (
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
              )}
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        {Boolean(offers.length) && (
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {offers.slice(0, MAX_NEAR_OFFERS_COUNT).map((offer) => (
                  <OfferCard
                    offer={offer}
                    type={OfferCardType.Near}
                    key={offer.id}
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export {OfferScreen};
export default connector(OfferScreen);
