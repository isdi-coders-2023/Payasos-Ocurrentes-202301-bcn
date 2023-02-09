import { CharacterStructure } from "../../data/types";
import CharacterStyled from "./CharacterStyled";

export interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({ character }: CharacterProps): JSX.Element => {
  return (
    <CharacterStyled>
      <div className="characterCard">
        <img
          src={character.image}
          alt={character.name}
          className="characterCard__image"
          width="300"
          height="300"
        />
        <h2>{character.name}</h2>
        <span className="characterCard__info characterCard__info--specie">
          {character.species}
        </span>
        <span className="characterCard__info characterCard__info--status">
          {character.status}
        </span>
      </div>
    </CharacterStyled>
  );
};

export default Character;
