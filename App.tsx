import 'react-native-gesture-handler';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import { Jost_300Light, Jost_400Regular, Jost_600SemiBold, useFonts  } from "@expo-google-fonts/jost";
import { ThemeProvider } from "styled-components/native";
import * as Notifications from "expo-notifications";

import theme from "./src/theme";
import { Routes } from "./src/routes";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

SplashScreen.preventAutoHideAsync();

 const App = () => {

  const [fontsLoaded] = useFonts({
    Jost_300Light,
    Jost_400Regular,
    Jost_600SemiBold
  })

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  

  useEffect(() => {
    const loadFont = async () => {
      if (fontsLoaded) {
        console.log('fontes carregadas');
        await SplashScreen.hideAsync();
      } 
    }

    loadFont()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
      <GestureHandlerRootView style={{flex: 1}}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </GestureHandlerRootView>
  )
}

export default App;