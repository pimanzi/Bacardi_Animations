import { Button } from './Button';

export function Description({ drink, products }) {
  return (
    <div className="description ">
      <h1>BACARDÍ</h1>
      <h2>{products[drink - 1].name}</h2>
      <p>{products[drink - 1].description}</p>
      <Button className="button">BUY NOW</Button>
    </div>
  );
}
