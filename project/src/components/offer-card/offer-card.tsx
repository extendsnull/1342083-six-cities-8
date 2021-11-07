import {Link} from 'react-router-dom';
import {humanizedOfferToType, OfferCardType} from '../../const';
import {getClassNames, getOfferUrl, getRatingValue} from '../../utils';
import type {LocationDescriptor} from 'history';
import type {Offer} from '../../types';

enum DefaultImageSize {
  Width = 260,
  Height = 200,
}

enum FavoriteImageSize {
  Width = 150,
  Height = 100,
}

type PlaceCardProps = {
  type: OfferCardType;
  offer: Offer;
  onMouseOver?: (offer: Offer) => void;
}

function OfferCard(props: PlaceCardProps): JSX.Element {
  const {type, offer, onMouseOver} = props;
  const ratingValue: string = getRatingValue(offer.rating);

  const offerUrl: LocationDescriptor<Offer> = {
    pathname: getOfferUrl(offer.id),
    state: offer,
  };

  const handleMouseOver = (): void => {
    if (onMouseOver) {
      onMouseOver(offer);
    }
  };

  return (
    <article
      className={getClassNames([
        type === OfferCardType.Cities ? `${type}__place-card` : `${type}__card`,
        'place-card',
      ])}
      onMouseOver={handleMouseOver}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={getClassNames([
          `${type}__image-wrapper`,
          'place-card__image-wrapper',
        ])}
      >
        <Link to={offerUrl}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={type === OfferCardType.Favorites ? FavoriteImageSize.Width : DefaultImageSize.Width}
            height={type === OfferCardType.Favorites ? FavoriteImageSize.Height : DefaultImageSize.Height}
            alt=""
          />
        </Link>
      </div>
      <div
        className={getClassNames([
          `${type}__card-info`,
          'place-card__info',
        ])}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button
            className={getClassNames(
              'place-card__bookmark-button',
              {'place-card__bookmark-button--active': offer.isFavorite},
              'button',
            )}
            type="button"
          >
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
          <Link to={offerUrl}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{humanizedOfferToType[offer.type]}</p>
      </div>
    </article>
  );
}

export default OfferCard;
