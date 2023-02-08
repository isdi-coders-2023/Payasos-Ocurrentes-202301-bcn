import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  action: () => void;
  children?: JSX.Element;
  text?: string;
}

const Button = ({
  className,
  action,
  children,
  text,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled>
      <button className={className} onClick={action}>
        {children} {text}
      </button>
    </ButtonStyled>
  );
};

export default Button;
