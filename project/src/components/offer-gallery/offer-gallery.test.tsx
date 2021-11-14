import {render, screen} from '@testing-library/react';
import {makeMockOffer} from '../../utils';
import OfferGallery from './offer-gallery';

const offer = makeMockOffer();

describe('Component: OfferGallery', () => {
  it('should render correctly', () => {
    render(<OfferGallery images={offer.images} />);
    expect(screen.getAllByRole('img').length).toBe(offer.images.length);
  });
});
