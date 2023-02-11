import Form from "../../components/Form/Form";
import CharacterPageStyled from "./CharacterPageStyled";

const CharacterPage = (): JSX.Element => {
  return (
    <CharacterPageStyled>
      <h1>Create Your Character</h1>
      <img
        src="./Rick&MortyImages/Rick&MortyTogether.png"
        alt="Rick and Morty melt into a tender embrace"
        width="320"
        height="310"
      />
      <Form />
    </CharacterPageStyled>
  );
};

export default CharacterPage;
