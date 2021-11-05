import {getRandomId} from '../../utils';

const MAX_IMAGES_COUNT = 6;

type OfferGalleryProps = {
  images: string[];
};

function OfferGallery(props: OfferGalleryProps): JSX.Element {
  const gallery = props.images.slice(0, MAX_IMAGES_COUNT);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {gallery.map((image) => (
          <div className="property__image-wrapper" key={getRandomId()}>
            <img className="property__image" src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferGallery;
