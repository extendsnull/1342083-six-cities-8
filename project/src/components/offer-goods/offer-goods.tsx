type OfferGoodsProps = {
  goods: string[];
};

function OfferGoods(props: OfferGoodsProps): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {props.goods.map((feature) => (
          <li className="property__inside-item" key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default OfferGoods;
