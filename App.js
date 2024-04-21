import React from "react"
import JobBoard from "./JobBoard"
import HomeScreen from "./Homescreen"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import 'react-native-gesture-handler'
const Stack = createStackNavigator()

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Homescreen">
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="JobBoard" component={JobBoard} />
          </Stack.Navigator>
      </NavigationContainer>
  )
}
export default App
