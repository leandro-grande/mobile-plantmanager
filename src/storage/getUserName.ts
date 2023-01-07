import AsyncStorage from "@react-native-async-storage/async-storage"
import { USER_COLLECTION } from "./storageConfig";

export const getUserName = async () => {
  try {
    const storage = await AsyncStorage.getItem(USER_COLLECTION);

    const user = storage ? storage : '';

    return user;
  } catch (error) {
    throw error;
  }
}