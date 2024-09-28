import { ButtonView } from "./Button.styled";

const Button = ({ handler, children, type }) => {
  return (
    <ButtonView type={type} onClick={handler}>
      {children}
    </ButtonView>
  );
};
export default Button;
