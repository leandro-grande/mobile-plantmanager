import { useState } from "react";
import { Alert, Platform } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { format, isBefore } from "date-fns";
import DataTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";

import { Plant } from "../PlantSelect";
import { savePlant } from "../../storage/savePlant";
import { PlantProps } from "../../storage/getPlant";

import { Button } from "../../components/Button";
import { PlantInstruction } from "../../components/PlantInstruction";

import { 
        BackButton, 
        Container, 
        Controller, 
        DateTimePickerChangeButton, 
        DateTimePickerText, 
        Header, 
        NotificationTitle, 
        PlantAbout, 
        PlantInstructionArea, 
        PlantSvg, 
        PlantTitle 
      } 
from "./styles";

type routeParams = {
  plant: Plant
}

export const PlantSave = () => {
  const [selectedDatetime, setSelectedDatetime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const theme = useTheme();
  const navigation = useNavigation();

  const routes = useRoute();
  const { plant } = routes.params as routeParams;

  const handleChangeTime = (event: DateTimePickerEvent, dateTime: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldValue => !oldValue)
    }

    if (dateTime && isBefore(dateTime, new Date())){
      setSelectedDatetime(new Date());
      Alert.alert('Escolha uma data futura! ');
      return;
    }

    if (dateTime) {
      setSelectedDatetime(dateTime);
    }
  }

  const handleOpenDateTimePickerForAndroid = () => {
    setShowDatePicker(oldState => !oldState)
  }

  const handleSavePlant = async () => {
    try {

      await savePlant({
        ...plant,
        dateTimeNotification: selectedDatetime,
      })

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com bastante amor.',
        nextpage: 'MyPlants',
        buttonTitle: 'Muito obrigado :D'
      })

    } catch (error) {
      Alert.alert('Náo foi possível salvar.');
    }
  }


  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <Feather 
            name="chevron-left"
            size={32}
            color={theme.colors.heading}
          />
        </BackButton>

        <PlantSvg uri={plant.photo} />
        
        <PlantTitle>{plant.name}</PlantTitle>
        <PlantAbout>{plant.about}</PlantAbout>
      </Header>

      <Controller>
        <PlantInstructionArea>
          <PlantInstruction description={plant.water_tips} />
        </PlantInstructionArea>
        
        <NotificationTitle>
          Escolha o melhor horário para ser lembrado:
        </NotificationTitle>

        { showDatePicker && (
          <DataTimePicker 
            value={selectedDatetime}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleChangeTime}
          />
        )}

        {
          Platform.OS === 'android' && ( 
            <DateTimePickerChangeButton 
              onPress={handleOpenDateTimePickerForAndroid}
            >
              <DateTimePickerText>
                {`Mudar ${format(selectedDatetime, 'HH:mm')}`}
              </DateTimePickerText>
            </DateTimePickerChangeButton>
          )
        }

        <Button 
          title="Cadastrar planta"
          onPress={handleSavePlant} 
        />
      </Controller>
    </Container>
  )
}