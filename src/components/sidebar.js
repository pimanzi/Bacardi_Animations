import { CSSTransition } from 'react-transition-group';
export default function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <CSSTransition in={showSidebar} timeout={500} classNames="menu">
      <div className={showSidebar ? 'sidebar-container' : 'sidebar-hide'}>
        {showSidebar ? (
          <>
            <button
              className="close"
              style={{
                backgroundColor: 'white',
                border: 'none',
                margin: '10px 10px 0px 10px',
              }}
              onClick={() => setShowSidebar(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="rgba(237, 79, 86, 0.93)"
              >
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
              </svg>
            </button>
            <ul className="sidebar">
              <li>
                <a
                  href="https://www.bacardi.com/us/en/rum-cocktails/#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Flavours
                </a>
              </li>

              <li>
                <a
                  href="https://www.bacardi.com/us/en/rum-cocktails/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Cocktails
                </a>
              </li>

              <li>
                <a
                  href="https://www.bacardi.com/us/en/rum-cocktails/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Find Us
                </a>
              </li>

              <li>
                <a
                  href="https://www.bacardi.com/us/en/rum-cocktails/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shop
                </a>
              </li>
            </ul>
          </>
        ) : (
          ''
        )}
      </div>
    </CSSTransition>
  );
}
