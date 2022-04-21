import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculo from './src/pages/Calculo';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: '#9efca9',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >

        <Stack.Screen
          name="Calculo"
          component={Calculo}
          options={
            {
              title: 'Cálculo Km/L',
            }
          }
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={
            {
              title: 'Resultado',
            }
          }
        />

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;