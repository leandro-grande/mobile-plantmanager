import { useEffect, useState } from "react"
import { getUserName } from "../../storage/getUserName";
import { Avatar, Container, Greeting, Name, Welcome } from "./styles"


export const Header = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const loadStorageUserName = async () => {
      const user = await getUserName();

      setUserName(user);
    }

    loadStorageUserName()
  }, [])

  return (
    <Container>
      <Greeting>
        <Welcome>Olá</Welcome>
        <Name>{userName}</Name>
      </Greeting>

      <Avatar source={{ uri: 'https://github.com/leandro-grande.png' }} />
    </Container>
  )
}