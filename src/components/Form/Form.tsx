import { useForm } from "react-hook-form";
import FormStyled from "./FormStyled";
import "/node_modules/@fortawesome/fontawesome-free/css/all.min.css";

interface FormData {
  name: string;
  status: string;
  species: string;
  gender: string;
  origin: string;
  imageLink: string;
}

const Form = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>();
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
          />
          <input
            {...register("status", { required: true })}
            className="form-input"
            placeholder="Status (required)"
          />
          <input
            {...register("species", { required: true })}
            className="form-input"
            placeholder="Species (required)"
          />
          <input
            {...register("gender", { required: true })}
            className="form-input"
            placeholder="Gender (required)"
          />
          <input
            {...register("origin", { required: true })}
            className="form-input"
            placeholder="Origin (required)"
          />
          <input
            {...register("imageLink", { required: true })}
            className="form-input"
            placeholder="Image Link (required)"
          />

          <button type="submit">modify</button>
        </form>
      </div>
    </FormStyled>
  );
};

export default Form;
