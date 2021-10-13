import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {getOfferUrl, getRatingValue} from '../../utils';
import type {LocationDescriptor} from 'history';
import type {Offer} from '../../types';

type FavoriteOfferProps = {
  offer: Offer;
}

function FavoriteOfferCard(props: FavoriteOfferProps): JSX.Element {
  const {offer} = props;
  const {rating, isFavorite, id, isPremium, previewImage, price, title, type} = offer;
  const ratingValue: string = getRatingValue(rating);

  const bookmarkButtonClassNames = classNames({
    'place-card__bookmark-button': true,
    'place-card__bookmark-button--active': isFavorite,
    'button': true,
  });
  const offerUrl: LocationDescriptor<Offer> = {
    pathname: getOfferUrl(id),
    state: offer,
  };

  return (
    <article className="favorites__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClassNames} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingValue}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerUrl}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default FavoriteOfferCard;
