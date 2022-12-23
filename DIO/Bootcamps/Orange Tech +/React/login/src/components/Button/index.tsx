import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, valid }: IButtonProps) => {

  const disabledButtonStyle: React.CSSProperties ={
    pointerEvents: 'none',
    backgroundColor: 'grey',
    color: 'white',
    borderColor: 'grey'
  };

  return <ButtonContainer onClick={onClick} style={valid ? {} : disabledButtonStyle} disabled={ valid ? false : true}>{title}</ButtonContainer>;
};

export default Button;
