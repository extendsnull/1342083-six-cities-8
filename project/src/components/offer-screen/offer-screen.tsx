import classNames from 'classnames';
import {useHistory} from 'react-router';
import Header from '../header/header';
import Review from '../review/review';
import ReviewForm from '../review-form/review-form';
import OfferCard from '../offer-card/offer-card';
import {OfferCardType} from '../../const';
import {getRandomId, getRatingValue} from '../../utils';
import type {Offer} from '../../types';

import offers from '../../mocks/offers';
import comments from '../../mocks/comments';

const MAX_IMAGES_COUNT = 6;
const MAX_NEAR_OFFERS_COUNT = 3;

function OfferScreen(): JSX.Element {
  const history = useHistory<Offer>();
  const {rating, isFavorite, images, isPremium, title, price, type, maxAdults, goods, host, description} = history.location.state;
  const ratingValue: string = getRatingValue(rating);

  const bookmarkButtonClassNames = classNames({
    'property__bookmark-button': true,
    'property__bookmark-button--active': isFavorite,
    'button': true,
  });
  const avatarClassNames = classNames({
    'property__avatar-wrapper': true,
    'property__avatar-wrapper--pro': host.isPro,
    'user__avatar-wrapper': true,
  });

  return (
    <div className="page">
      <Header isAuthorized />

      <main className="page__main page__main--property">
        <section className="property">
          {Boolean(images.length) && (
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.slice(0, MAX_IMAGES_COUNT).map((image) => (
                  <div className="property__image-wrapper" key={getRandomId()}>
                    <img className="property__image" src={image} alt="" />
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className={bookmarkButtonClassNames} type="button">
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
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {maxAdults} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                {Boolean(goods.length) && (
                  <ul className="property__inside-list">
                    {goods.map((feature) => (
                      <li className="property__inside-item" key={feature}>{feature}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={avatarClassNames}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  {host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
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
                  <ReviewForm />
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

export default OfferScreen;
