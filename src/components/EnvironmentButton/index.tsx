import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles"

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active: boolean;
}

export const EnvironmentButton = ({ title, active, ...rest }: EnvironmentButtonProps) => {
  return (
    <Container 
      active={active}
      {...rest}  
    >
      <Title active={active}>
        {title}
      </Title>  
    </Container>
  )
}