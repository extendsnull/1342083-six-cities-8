import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {getOfferUrl, getRatingValue} from '../../utils';
import type {Offer} from '../../types';

type PlaceCardProps = {
  offer: Offer;
  onMouseMove: (id: number) => void;
}

function OfferCard(props: PlaceCardProps): JSX.Element {
  const {offer, onMouseMove} = props;
  const {id, isPremium, previewImage, price, isFavorite, title, type} = offer;
  const offerUrl = getOfferUrl(id);
  const ratingValue: string = getRatingValue(offer.rating);
  const bookmarkButtonClassNames = classNames({
    'place-card__bookmark-button': true,
    'place-card__bookmark-button--active': isFavorite,
    'button': true,
  });

  const handleMouseMove = (): void => onMouseMove(offer.id);

  return (
    <article className="cities__place-card place-card" onMouseMove={handleMouseMove}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={offerUrl}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkButtonClassNames} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
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

export default OfferCard;
