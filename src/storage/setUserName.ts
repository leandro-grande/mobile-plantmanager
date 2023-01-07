import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_COLLECTION } from "./storageConfig";

export const setUserName = async (userName: string) => {
  try {
    await AsyncStorage.setItem(USER_COLLECTION, userName);

  } catch (error) {
    throw error;
  }
}