import FormStyled from "./FormStyled";

export interface FormDataStructure {
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  imageLink: string;
}

const Form = (): JSX.Element => {
  return (
    <FormStyled>
      <div className="container">
        <form className="container__form form">
          <input
            className="form-input"
            placeholder="Name (required)"
            aria-label="Field name of character"
          />
          <input
            className="form-input"
            placeholder="Status (required)"
            aria-label="Field of status character"
          />
          <input
            className="form-input"
            placeholder="Species (required)"
            aria-label="Field of species character"
          />
          <input
            className="form-input"
            placeholder="Gender (required)"
            aria-label="Field of gender character"
          />
          <input
            className="form-input"
            placeholder="Origin (required)"
            aria-label="Field of origin character"
          />
          <input
            className="form-input"
            placeholder="Image Link (required)"
            aria-label="Field of image link character"
          />

          <button type="submit" aria-label="Send button">
            Create character
          </button>
        </form>
      </div>
    </FormStyled>
  );
};

export default Form;
