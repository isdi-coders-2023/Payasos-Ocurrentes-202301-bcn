import FooterStyled from "./FooterStyled";

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <img
        src="Rick&MortyImages/Rick_and_Morty.svg.webp"
        alt="Rick and Morty footer"
        aria-label="Rick and Morty Footer"
      />
    </FooterStyled>
  );
};

export default Footer;
