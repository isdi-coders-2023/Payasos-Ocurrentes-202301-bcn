import CharacterStyled from "./CharacterStyled";

const Character = (): JSX.Element => {
  return (
    <CharacterStyled>
      <div className="characterCard">
        <img
          src="morty_smith.jpeg"
          alt="Morty Smith con una camiseta amarilla"
          className="morty"
        />
        <h2>Morty Smith</h2>
        <span className="characterCard__info characterCard__info--specie">
          Human
        </span>
        <span className="characterCard__info">Alive</span>
      </div>
    </CharacterStyled>
  );
};

export default Character;
