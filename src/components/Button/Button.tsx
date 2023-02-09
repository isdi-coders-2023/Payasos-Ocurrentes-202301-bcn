import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  className: string;
  action: () => void;
  children?: JSX.Element;
}

const Button = ({ className, action, children }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled className={className} onClick={action}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
