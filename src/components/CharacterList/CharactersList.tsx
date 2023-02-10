import { CharactersApiStructure } from "../../data/types";
import Character from "../Character/Character";
import CharacterListStyled from "./CharactersStyled";

export interface CharactersProps {
  characters: CharactersApiStructure;
}

const CharactersList = ({
  characters: { results },
}: CharactersProps): JSX.Element => {
  return (
    <CharacterListStyled>
      <ul>
        {results.map((character) => (
          <li key={character.id}>
            <Character character={character} />
          </li>
        ))}
      </ul>
    </CharacterListStyled>
  );
};

export default CharactersList;
