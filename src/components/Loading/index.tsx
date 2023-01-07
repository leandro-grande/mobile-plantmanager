import LottieView from 'lottie-react-native';

import loadAnimation from "../../assets/load.json"
import { Container } from './styles';


export const Loading = () => {
  return (
    <Container>
      <LottieView 
        autoPlay
        loop
        source={loadAnimation}
        style={{
          backgroundColor: 'transparent',
          width: 150,
          height: 150
        }}
      />
    </Container>
  )
}