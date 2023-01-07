import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

import welcomeImg from "../../assets/watering.png";

import { Button, Container, SubTitle, Title, WelcomeImage } from "./styles";

export const Welcome = () => {

  const navigation = useNavigation();

  const handleUserIdentification = () => {
    navigation.navigate("UserIdentification");
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil 
      </Title>

      <WelcomeImage source={welcomeImg} />

      <SubTitle>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </SubTitle>

      <Button
        activeOpacity={0.7} 
        onPress={handleUserIdentification}
      >
        <Feather 
          name="chevron-right"
          color="#FFFFFF"
          size={24}
        />
      </Button>
    </Container>
  )
}