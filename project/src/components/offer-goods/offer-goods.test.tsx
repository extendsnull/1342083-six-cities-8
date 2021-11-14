import {render} from '@testing-library/react';
import {makeMockOffer} from '../../utils';
import OfferGoods from './offer-goods';

const offer = makeMockOffer();

describe('Component: OfferGoods', () => {
  it('should render correctly', () => {
    const {container} = render(<OfferGoods goods={offer.goods} />);

    expect(container.querySelector('.property__inside')).not.toBeNull();
    expect(container.querySelectorAll('.property__inside-item').length).toBeTruthy();
  });
});
