export function Aside({ products, drink }) {
  return (
    <div className="aside">
      {products
        .filter((product) => product.id > drink)
        .map((product) => (
          <img
            src={product.image}
            alt="product"
            key={product.id}
            className={product.id === 4 ? 'yellowish' : ''}
          ></img>
        ))}
    </div>
  );
}
