import { useEffect, useState } from "react"
import { Alert, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getPlant, PlantProps } from "../../storage/getPlant"
import { formatDistance, isAfter } from "date-fns"
import { pt } from "date-fns/locale"

import { PlantInstruction } from "../../components/PlantInstruction";
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading";
import { PlantCardSecondary } from "../../components/PlantCardSecondary";
import { removePlant } from "../../storage/removePlant";
import { Container, Content, Title } from "./styles"


export const MyPlants = () => {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [nextWatered, setNextWatered] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const handleRemovePlant = (plant: PlantProps) => {
    Alert.alert('Remover', `Deseja remove a ${plant.name}?`,
      [
        {
          text: 'Não',
          style: 'cancel'
        },
        {
          text: 'Sim',
          onPress: async () => {
            try {
                const plants = await removePlant(plant);

                console.log(Object.keys(plants).length)

                if (Object.keys(plants).length === 0) {
                  setMyPlants([]);
                  navigation.navigate('NovaPlanta');
                  
                } else {
                  setMyPlants((oldData) => (
                    oldData.filter(item => item.id !== plant.id)
                  ));
                }
  
            } catch (error) {
              Alert.alert('Não foi possível remover.')
            }
          }
        }
      ]
    )
  }

  useEffect(() => {
    const loadPlants = async () => {
      const plants = await getPlant();

      if (Object.keys(plants).length === 0 ) {
        setMyPlants([]);
        setLoading(false);
        return
      }

      const nextTime = formatDistance(
        new Date(plants[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        {locale: pt}
      );

      setMyPlants(plants);
      setNextWatered(nextTime);
      setLoading(false);
    }
    loadPlants()
  }, [])


  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Header />

      {myPlants.length > 0 && ( 
        <Content>
        <PlantInstruction 
          description={`Regue a sua ${myPlants[0].name} em ${nextWatered}`} 
        />

        <Title>Próximas regadas</Title>

        
        <FlatList 
          data={myPlants}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <PlantCardSecondary data={item} onRemove={() => handleRemovePlant(item)} />
          )}
        />
        
        </Content>  
      )}

    </Container>
  )
}