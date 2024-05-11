import { useState } from 'react';

export function Header({ isSmall, setShowSidebar, showSidebar }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="header"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div class="logo">
        {isHovered ? (
          <img src="images/logobacardi.png" alt="bacardi-logo"></img>
        ) : (
          <img src="images/logobacardi2.png" alt="bacardi-logo"></img>
        )}
      </div>
      {isSmall ? (
        <button onClick={() => setShowSidebar(true)} className="menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill={isHovered ? 'rgba(237, 79, 86, 0.93)' : 'black'}
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>
      ) : (
        <ul className="navlink">
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
              href="https://www.bacardi.com/us/en/"
              target="_blank"
              rel="noreferrer"
            >
              Find us
            </a>
          </li>

          <li>
            <a
              href="https://www.bacardi.com/us/en/shop/"
              target="_blank"
              rel="noreferrer"
            >
              Shop
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}
