import { ButtonView } from "./Button.styled";

const Button = ({ handler, children }) => {
  return <ButtonView onClick={handler}>{children}</ButtonView>;
};
export default Button;
