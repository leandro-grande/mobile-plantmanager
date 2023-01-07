import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { ActivityIndicator, FlatList } from "react-native"
import { useTheme } from "styled-components/native"
import { EnvironmentButton } from "../../components/EnvironmentButton"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import { PlantCardPrimary } from "../../components/PlantCardPrimary"
import { api } from "../../services/api"
import { Container, Content, Subtitle, TextArea, Title, EnvironmentList, PlantList } from "./styles"

export type Plant = {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string;
  frequency: {
    times: number,
    repeat_every: string;
  }
}

export type Environments = {
  key: string;
  title: string;
}

export const PlantSelect = () => {
  const [environments, setEnvironments] = useState<Environments[]>([]);
  const [plants, setPlants] = useState<Plant[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([])
  const [selectedEnvironment, setSelectedEnvironment] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const theme = useTheme();
  const navigation = useNavigation();

  const handleSelectEnvironment = (item: Environments) => {
    setSelectedEnvironment(item.key);

    if (item.key === 'all') {
      return setFilteredPlants(plants);
    }

    const filteredPlant = plants.filter(plant => plant.environments.includes(item.key));

    setFilteredPlants(filteredPlant);
  }

  const loadPlants = async () => {
    const response = await api.get(`/plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!response.data) {
      return setLoading(true)
    }

    if (page > 1) {
      setPlants(oldvalue => [...oldvalue, ...response.data]);
      setFilteredPlants(oldvalue => [...oldvalue, ...response.data]);
    } else {
      setPlants(response.data);
      setFilteredPlants(response.data)
    }

    setLoading(false);
    setLoadingMore(false);
  }

  const handleFetchMore = (distance: number) => {
    if (distance < 1) {  // rolando para cima
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    loadPlants();
  }

  const handleSelectPlant = (plant: Plant) => {
    navigation.navigate('PlantSave', { plant })
  }

  useEffect(() => {
    const loadEnvironenmts = async () => {
      const response = await api.get('/plants_environments?_sort=title&_order=asc');

      const all = {
        key: 'all',
        title: 'Todos'
      }

      setEnvironments([
      all,
      ...response.data
    ])
    }

    loadEnvironenmts()
  }, [])

  useEffect(() => {
    loadPlants();
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <Container>
      <Content>
        <Header />

        <TextArea>
          <Title>Em qual ambiente </Title>
          <Subtitle>você quer colocar sua planta?</Subtitle>
        </TextArea>

        <EnvironmentList>
          <FlatList
            data={environments}
            keyExtractor={item => String(item.key)}
            renderItem={({item}) => (
              <EnvironmentButton 
                title={item.title} 
                active={item.key === selectedEnvironment}
                onPress={() => handleSelectEnvironment(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </EnvironmentList>

        <PlantList>
          <FlatList 
            data={filteredPlants}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
              <PlantCardPrimary 
                data={item}
                onPress={() => handleSelectPlant(item)} 
              />
            )}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            onEndReachedThreshold={0.1} // chegar nos 10% do final da tela
            onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)} 
            ListFooterComponent={
              loadingMore 
              ? <ActivityIndicator color={theme.colors.green} />
              : <></>
            }
          />
        </PlantList>

      </Content>
    </Container>
  )
}