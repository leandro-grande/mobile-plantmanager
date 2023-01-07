import { RectButtonProps } from "react-native-gesture-handler"
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import { AnimatedContainer, Container, Details, Hour, HourLabel, PlantName, PlantSvg, RemoveButton } from "./styles"


interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour?: string;
  };
  onRemove: () => void;
}

export const PlantCardSecondary = ({ data, onRemove, ...rest }: PlantCardPrimaryProps) => {

  const theme = useTheme();

  return (
    <Swipeable
      overshootRight={false}  // Direção do swipper
      renderRightActions={() => (
        <AnimatedContainer>
          <RemoveButton onPress={onRemove}>
              <Feather 
                name="trash"
                size={32}
                color={theme.colors.white}
              />
          </RemoveButton>
        </AnimatedContainer>
      )}
    >
      <Container {...rest}>
        <PlantSvg uri={data.photo} height={60} width={60} />
        <PlantName>{data.name}</PlantName>
        <Details>
          <HourLabel>Regar ás</HourLabel>
          <Hour>{data.hour}</Hour>
        </Details>
      </Container>
    </Swipeable>
  )
} 