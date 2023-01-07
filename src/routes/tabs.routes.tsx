import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import { MyPlants } from "../screens/MyPlants";
import { PlantSelect } from "../screens/PlantSelect";

const { Navigator, Screen } = createBottomTabNavigator();

export const TabRoutes = () => {

  const theme = useTheme();

  return (
    <Navigator screenOptions={{
      tabBarActiveTintColor: theme.colors.green,
      tabBarInactiveTintColor: theme.colors.heading,
      headerShown: false, 
      tabBarLabelPosition: 'beside-icon',
      tabBarStyle: {
        height: 88
      }
    }}>
      <Screen 
        name="NovaPlanta" 
        component={PlantSelect} 
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons 
              name="add-circle-outline"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen 
        name="MinhasPlantas" 
        component={MyPlants}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )
        }} 
      />
    </Navigator>
  )
}