import "@fortawesome/fontawesome-free/css/all.min.css";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <header className="header-container">
        <span
          className="header-container__span"
          aria-label="Rick and Morty - Wiki"
        >
          RICK AND MORTY - WIKI
        </span>
        <div className="header-container__navbar navbar">
          <a
            href="Characters"
            className="navbar__anchor"
            aria-label="Characters link"
          >
            <i className="fa-solid fa-user-group"></i>
          </a>
          <a
            href="Favourites"
            className="navbar__anchor"
            aria-label="Favourites link"
          >
            <i className="fa-regular fa-heart"></i>
          </a>
          <a
            href="Creativity Zone"
            className="navbar__anchor"
            aria-label="Creativity Zone link"
          >
            <i className="fa-regular fa-lightbulb"></i>
          </a>
        </div>
      </header>
    </HeaderStyled>
  );
};

export default Header;
