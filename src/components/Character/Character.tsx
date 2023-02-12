import { Link } from "react-router-dom";
import { CharacterStructure } from "../../data/types";
import CharacterStyled from "./CharacterStyled";

export interface CharacterProps {
  character: CharacterStructure;
}

const Character = ({ character }: CharacterProps): JSX.Element => {
  const getSmallerSizeTitleClass = () => {
    const titleLength = 17;
    return character.name.length > titleLength ? "--smallTitle" : "";
  };

  return (
    <CharacterStyled>
      <Link to={`detail/${character.id}`} className="character-card">
        <img
          src={character.image}
          alt={character.name}
          className="character-card__image"
          width="300"
          height="300"
        />
        <h2
          className={`character-card__title-characters${getSmallerSizeTitleClass()}`}
        >
          {character.name}
        </h2>
        <span className="character-card__info characterCard__info--specie">
          {character.species}
        </span>
        <span className="character-card__info characterCard__info--status">
          {character.status}
        </span>
      </Link>
    </CharacterStyled>
  );
};

export default Character;
