import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const onSubmit = () => {};
  return (
    <FormStyled>
      <div className="container">
        <form onSubmit={onSubmit} className="container__form form">
          <input className="form-input" placeholder="Name" />
          <input className="form-input" name="status" placeholder="Status" />
          <input className="form-input" name="species" placeholder="Species" />
          <input className="form-input" name="gender" placeholder="Gende" />
          <input className="form-input" name="origin" placeholder="Origin" />
          <input
            className="form-input"
            name="imageLink"
            placeholder="Image Link"
          />

          <button type="submit">modify</button>
          <button type="submit"></button>
        </form>
      </div>
    </FormStyled>
  );
};

export default Form;
