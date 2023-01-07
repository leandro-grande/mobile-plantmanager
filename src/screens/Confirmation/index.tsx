import { NavigatorScreenParams, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Button } from "../../components/Button";

import { ButtonArea, Container, Emoji, Title, Subtitle } from "./styles"

interface RootParamList {
  UserIdentification: undefined;
  Confirmation: {
    title: string;
    subtitle: string;
    nextpage: string;
  },
  PlantSelect: undefined
}

interface routeParams {
  title: string;
  subtitle: string;
  nextpage: 'PlantSelect' | 'MyPlants';
  buttonTitle: string;
}

export const Confirmation = () => {

  const routes = useRoute();
  const { title, subtitle, buttonTitle, nextpage } = routes.params as routeParams;

  const navigation = useNavigation();

  const handleAction = () => {
    navigation.navigate(nextpage);
  }

  return (
    <Container>
      
      <Emoji>
        😄
      </Emoji>

      <Title>
        {title}
      </Title>
      
      <Subtitle>
        {subtitle}
      </Subtitle>

      <ButtonArea>
        <Button 
          title={buttonTitle}
          onPress={handleAction}  
        />
      </ButtonArea>


    </Container>
  );
}