import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  action: () => void;
}

const Button = ({ className, action }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button className="buttonArrow" type="button" onClick={action}>
        <i className={className}></i>
      </button>
    </ButtonStyled>
  );
};

export default Button;
