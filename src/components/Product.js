export function Product({ drink, products }) {
  return (
    <div className="product">
      <img
        src={products[drink - 1].image}
        alt="product"
        className={(drink === 2) | (drink === 3) ? 'reddish' : ''}
      ></img>
    </div>
  );
}
