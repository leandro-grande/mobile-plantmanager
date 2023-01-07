import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import { PlantProps, StoragePlantProps } from "./getPlant";
import { PLANTS_COLLECTION } from "./storageConfig";


export const removePlant = async (plant: PlantProps) => {
  try {
    const storage = await AsyncStorage.getItem(PLANTS_COLLECTION);

    const plants: StoragePlantProps = storage ? JSON.parse(storage) : {};

    await Notifications.cancelScheduledNotificationAsync(plants[plant.id].notificationId);

    delete plants[plant.id];

    if (Object.keys(plants).length > 0 ) {
      await AsyncStorage.setItem(PLANTS_COLLECTION, JSON.stringify(plants));
    } else {
      await AsyncStorage.removeItem(PLANTS_COLLECTION);
    }

    return plants;

  } catch (error) {
    throw new Error(error as string);
  }
}