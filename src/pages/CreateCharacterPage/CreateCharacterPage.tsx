import Form from "../../components/Form/Form";
import CreateCharacterPageStyled from "./CreateCharacterPageStyled";

const CreateCharacterPage = (): JSX.Element => {
  return (
    <CreateCharacterPageStyled>
      <h1>Create Your Character</h1>
      <img
        src="./Rick&MortyImages/Rick&MortyTogether.png"
        alt="Rick and Morty melt into a tender embrace"
        width="300"
        height="280"
      />
      <Form />
    </CreateCharacterPageStyled>
  );
};

export default CreateCharacterPage;
