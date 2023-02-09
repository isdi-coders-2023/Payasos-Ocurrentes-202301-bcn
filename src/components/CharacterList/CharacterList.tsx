import { CharactersStructure } from "../../data/types";
import Character from "../Character/Character";
import CharacterListStyled from "./CharacterListStyled";

export interface CharactersProps {
  characters: CharactersStructure;
}

const Characters = ({ characters }: CharactersProps): JSX.Element => {
  return (
    <CharacterListStyled>
      <ul>
        {characters.map((character) => (
          <li>
            <Character character={character} key={character.id} />
          </li>
        ))}
      </ul>
    </CharacterListStyled>
  );
};

export default Characters;
