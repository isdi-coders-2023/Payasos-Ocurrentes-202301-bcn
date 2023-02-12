import Form from "../../components/Form/Form";
import CreateCharacterPageStyled from "./CreateCharacterPageStyled";

const CreateCharacterPage = (): JSX.Element => {
  return (
    <CreateCharacterPageStyled>
      <h1>Create Your Character</h1>
      <img
        src="./Rick&MortyImages/Rick&MortyTogether.png"
        alt="Rick and Morty melt into a tender embrace"
        width="320"
        height="310"
      />
      <Form />
    </CreateCharacterPageStyled>
  );
};

export default CreateCharacterPage;
