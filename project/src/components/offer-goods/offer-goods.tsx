type OfferGoodsProps = {
  goods: string[];
};

function OfferGoods(props: OfferGoodsProps): JSX.Element | null {
  const {goods} = props;

  if (goods.length) {
    return (
      <div className="property__inside">
        <h2 className="property__inside-title">What&apos;s inside</h2>
        <ul className="property__inside-list">
          {goods.map((feature) => (
            <li className="property__inside-item" key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
}

export default OfferGoods;
