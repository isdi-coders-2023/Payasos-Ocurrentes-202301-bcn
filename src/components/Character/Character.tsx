import CharacterStyled from "./CharacterStyled";

export interface CharacterProps {
  name: string;
  specie: string;
  status: string;
}

const Character = ({ name, specie, status }: CharacterProps): JSX.Element => {
  return (
    <CharacterStyled>
      <div className="characterCard">
        <img
          src="morty_smith.jpeg"
          alt="Morty Smith con una camiseta amarilla"
          className="morty"
        />
        <h2>{name}</h2>
        <span className="characterCard__info characterCard__info--specie">
          {specie}
        </span>
        <span className="characterCard__info">{status}</span>
      </div>
    </CharacterStyled>
  );
};

export default Character;
