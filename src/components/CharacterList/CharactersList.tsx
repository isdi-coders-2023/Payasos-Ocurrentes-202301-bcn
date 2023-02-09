import { CharactersStructure } from "../../data/types";
import Character from "../Character/Character";
import CharacterListStyled from "./CharactersStyled";

export interface CharactersProps {
  characters: CharactersStructure;
}

const CharactersList = ({ characters }: CharactersProps): JSX.Element => {
  return (
    <CharacterListStyled>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
    </CharacterListStyled>
  );
};

export default CharactersList;
