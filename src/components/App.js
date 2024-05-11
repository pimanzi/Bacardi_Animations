import { SwitchTransition } from 'react-transition-group';
import { CSSTransition } from 'react-transition-group';
import { Main } from './Main';
import { Header } from './Header.js';
import { Button } from './Button';
import { useState } from 'react';
import { Product } from './Product';
import { Description } from './Description';
import { Aside } from './Aside';
import Pagination from './Pagination.js';
import { useEffect } from 'react';
import Sidebar from './sidebar.js';

const products = [
  {
    id: 1,
    name: 'LIME & SODA',
    description:
      'Enjoy the refreshing taste of real rum and zingy lime anywhere, anytime thanks to BACARDÍ Ready-to-Drink Lime & Soda cans.Natural and crisp lime flavor that radiates on the taste buds with aromas of lime zest and glistening bright citrus notes paired with bubbly soda water for a refreshing serve.',
    backgroundColor: 'rgba(74,149,61,255)',
    image: 'products/bacardiGreen.png',
  },

  {
    id: 2,
    name: 'LIMON & LEMONADE',
    description:
      'Out-and-about but still want the refreshing taste of real rum and sweet lemonade? Look no further. BACARDÍ Ready-to-Drink Lemón & Lemonade cans provide the perfect citrus fix wherever you are Fresh citrus taste from a blend of bold lemon flavor with hints of lime and grapefruit balanced with refreshingly sweet and tart lemonade.',
    backgroundColor: 'rgba(225,194,18,255)',
    image: 'products/bacardiYellow.png',
  },

  {
    id: 3,
    name: 'RUM PUNCH',
    description:
      'A symphony of tropical flavors squeezed into an easy to grab package. These cans pack a real punch.Never be far from refreshing flavor with this punch bowl classic packed into a can. It’s a refrigerator essential.',
    backgroundColor: 'rgba(236,132,35,255)',
    image: 'products/bacardiOrange.png',
  },

  {
    id: 4,
    name: 'BAHAMA MAMA',
    description:
      'A tropical vacation in a can, with a blend of exotic fruit flavors and hints of orange, red berries and pineapple.BACARDÍ Real Rum Cocktails are made with BACARDÍ Superior Rum, all-natural flavors, real ingredients, and are gluten free with no artificial sweeteners. They are consistently high quality and always refreshing, fun and full-flavored at 5.9% ABV.',
    backgroundColor: 'rgba(201,52,47,255)',
    image: 'products/bacardiRed.png',
  },
];

export default function App() {
  const [drink, setDrink] = useState(1);
  const [direction, setDirection] = useState(true);
  const [isSmall, setIsSmall] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsSmall(window.innerWidth < 750);
    }

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  function handleDrinkPrevious() {
    if (drink !== 1) {
      setDrink((drink) => drink - 1);
    }
    setDirection(false);
  }

  function handleDrinkNext() {
    if (drink !== 4) {
      setDrink((drink) => drink + 1);
    }
    setDirection(true);
  }

  return (
    <div
      className="app"
      style={{
        backgroundColor: products[drink - 1].backgroundColor,
        minHeight: '100vh',
        overflow: 'auto',
      }}
    >
      <Header
        isSmall={isSmall}
        showSidebar={setShowSidebar}
        setShowSidebar={setShowSidebar}
      ></Header>

      {isSmall ? (
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      ) : (
        ''
      )}

      <Main>
        <SwitchTransition>
          <CSSTransition
            in={true}
            key={drink}
            appear={true}
            timeout={{ appear: 1000, exit: 500, enter: 500 }}
            classNames="slide"
          >
            <Description drink={drink} products={products}></Description>
          </CSSTransition>
        </SwitchTransition>

        <SwitchTransition>
          <CSSTransition
            in={true}
            key={drink}
            appear={true}
            timeout={{ appear: 1000, exit: 500, enter: 500 }}
            classNames={direction ? 'animate' : 'animate-reverse'}
          >
            <Product drink={drink} products={products}></Product>
          </CSSTransition>
        </SwitchTransition>

        <SwitchTransition>
          <CSSTransition
            in={true}
            key={drink}
            appear={true}
            timeout={{
              appear: 1000,
              exit: `${direction ? 250 : 600}`,
              enter: 250,
            }}
            classNames={direction ? 'show' : 'show-reverse'}
          >
            <Aside products={products} drink={drink}></Aside>
          </CSSTransition>
        </SwitchTransition>
      </Main>
      <Pagination drink={drink}>
        {drink !== 1 ? (
          <Button
            className="caret"
            borderRadius="50%"
            backgroundColor="rgba(255,255,255,0.4)"
            color="white"
            onClick={handleDrinkPrevious}
          >
            <i class="fa fa-caret-left" style={{ fontSize: '40px' }}></i>
          </Button>
        ) : (
          ''
        )}
        {drink !== 4 ? (
          <Button
            className="caret"
            borderRadius="50%"
            backgroundColor="rgba(255,255,255,0.4)"
            color="white"
            onClick={handleDrinkNext}
          >
            <i class="fa fa-caret-right" style={{ fontSize: '40px' }}></i>
          </Button>
        ) : (
          ''
        )}
      </Pagination>
    </div>
  );
}
