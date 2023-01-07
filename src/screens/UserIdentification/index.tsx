import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { Alert, Platform } from "react-native"
import { Button } from "../../components/Button";
import { setUserName } from "../../storage/setUserName";
import { ButtonArea, Container, Emoji, Form, Input, KeyboardAvoitViewContainer, Title } from "./styles"


export const UserIdentification = () => {
  const [user, setUser] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const navigation = useNavigation();

  const handleInputFocus = () => {
    setIsFocused(true);
  }

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!user)
  }

  const handleStart = async () => {

    if (!user) {
      return Alert.alert('Opa', 'Digite o seu nome para começarmos')
    }

    await setUserName(user);

    navigation.navigate('Confirmation', { 
      title: 'Prontinho', 
      subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
      nextpage: 'PlantSelect',
      buttonTitle: 'Começar',   
    })
  }

  return (
    <Container>
      <KeyboardAvoitViewContainer 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >

      <Form>
        <Emoji>
          { !user ? '😀' : '😄' }
        </Emoji>

        <Title>
          Como podemos {'\n'}
          chamar você?
        </Title>

        <Input 
          placeholder="Digite um nome"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={setUser}
          value={user}
          isFocused={isFocused}
          isFilled={isFilled}
      />
      </Form>

      <ButtonArea>
        <Button 
          title="Confirmar"
          onPress={handleStart}
          enabled={!!user}  
        />
      </ButtonArea>
      </KeyboardAvoitViewContainer>
    </Container>
    
  )
}