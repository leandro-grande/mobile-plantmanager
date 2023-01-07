import waterdropImg from "../../assets/waterdrop.png"
import { Container, Description, WaterdropImg } from "./styles";


type PlantInstructionProps = {
  description: string;
}

export const PlantInstruction = ({description}: PlantInstructionProps) => {
  return (
    <Container>
      <WaterdropImg source={waterdropImg} />
      <Description>{description}</Description>
    </Container>
  )
}