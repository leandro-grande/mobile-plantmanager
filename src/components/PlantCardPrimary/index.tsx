import { RectButtonProps } from "react-native-gesture-handler"
import { Container, PlantName, PlantSvg } from "./styles"

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantCardPrimaryProps) => {
  return (
    <Container {...rest}>
      <PlantSvg uri={data.photo} height={70} width={70} />
      <PlantName>{data.name}</PlantName>
    </Container>
  )
} 