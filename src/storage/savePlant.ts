import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";

import { PlantProps, StoragePlantProps } from "./getPlant";
import { PLANTS_COLLECTION } from "./storageConfig";

export async function allowsNotificationsAsync() {
  const settings = await Notifications.getPermissionsAsync();
  return (
    settings.granted || settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
}

async function requestPermissionsAsync() { 
  return await Notifications.requestPermissionsAsync({ 
      ios: { 
        allowAlert: true, 
        allowBadge: true, 
        allowSound: true, 
        allowAnnouncements: true, 
  }, }); 
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


export const savePlant = async (plant: PlantProps) => {

  await requestPermissionsAsync()

  try { 
    const nextTime = new Date(plant.dateTimeNotification);
    const now = new Date();

    const { times, repeat_every } = plant.frequency;

    if (repeat_every === 'week') {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval)
    } 

    const seconds = Math.abs(
        Math.ceil(now.getTime() - nextTime.getTime()) / 1000);

    const hasPushNotificationPermissionGranted = await allowsNotificationsAsync();

    console.log(hasPushNotificationPermissionGranted)

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeey',
        body: `Está na hora de cuidar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.MAX,
        data: {
          plant
        },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true
      }
    })

    const storage = await AsyncStorage.getItem(PLANTS_COLLECTION)

    const oldPlants: StoragePlantProps  = storage ? JSON.parse(storage) : {};

    const newPlant = {
      [plant.id] : {
        data: plant,
        notificationId
      }
    }

    await AsyncStorage.setItem(PLANTS_COLLECTION, 
      JSON.stringify({
        ...newPlant,
        ...oldPlants
      }));

  } catch (error) {
    console.log(error);
    throw new Error(error as string);
  }
}