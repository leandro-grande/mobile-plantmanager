import { RectButtonProps } from "react-native-gesture-handler";
import { ButtonTitle, Container } from "./styles";


interface ButtonProps extends RectButtonProps {
  title: string;
}

export const Button = ({ title, enabled = true, ...rest }: ButtonProps) => {
  return (
    <Container enabled={enabled} {...rest}>
      <ButtonTitle>
        {title}
      </ButtonTitle>
    </Container>
  );
}