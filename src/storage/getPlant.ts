import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { PLANTS_COLLECTION } from "./storageConfig";

export type PlantProps = {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string;
  frequency: {
    times: number,
    repeat_every: string;
  },
  dateTimeNotification: Date;
  hour?: string;
}

export type StoragePlantProps = {
  [id: string]: {
    data: PlantProps,
    notificationId: string;
  }
}

export const getPlant = async () => {

  try {
    const storage = await AsyncStorage.getItem(PLANTS_COLLECTION);
  
    const plants: StoragePlantProps = storage ? JSON.parse(storage) : {};
  
    const plantsSorted = Object.keys(plants).map((plant) => {
      return {
        ...plants[plant].data,
        hour: format(new Date(plants[plant].data.dateTimeNotification), 'HH:mm')
      }
    })
    .sort((a, b) => 
      Math.floor(
      new Date(a.dateTimeNotification).getTime() / 1000 - 
      Math.floor(new Date(b.dateTimeNotification).getDate() / 1000)
      )
    );
  
    return plantsSorted;

  } catch (error) {
    throw new Error(error as string);
  }
}