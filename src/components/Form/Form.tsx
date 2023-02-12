import { useForm } from "react-hook-form";
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
  const { register, handleSubmit } = useForm<FormDataStructure>();
  const onSubmit = handleSubmit((values) => {
    return values;
  });
  return (
    <FormStyled>
      <div className="container">
        <form onSubmit={onSubmit} className="container__form form">
          <input
            {...register("name", { required: true })}
            className="form-input"
            placeholder="Name (required)"
            aria-label="Field name of character"
          />
          <input
            {...register("status", { required: true })}
            className="form-input"
            placeholder="Status (required)"
            aria-label="Field of status character"
          />
          <input
            {...register("species", { required: true })}
            className="form-input"
            placeholder="Species (required)"
            aria-label="Field of species character"
          />
          <input
            {...register("gender", { required: true })}
            className="form-input"
            placeholder="Gender (required)"
            aria-label="Field of gender character"
          />
          <input
            {...register("origin", { required: true })}
            className="form-input"
            placeholder="Origin (required)"
            aria-label="Field of origin character"
          />
          <input
            {...register("imageLink", { required: true })}
            className="form-input"
            placeholder="Image Link (required)"
            aria-label="Field of image link character"
          />

          <button type="submit" aria-label="Send button">
            modify
          </button>
        </form>
      </div>
    </FormStyled>
  );
};

export default Form;
