import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';

const Stack = createStackNavigator();

// O projeto anterior esta em App.js.backup.
function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Tela1} name="Tela1" />
        <Stack.Screen component={Tela2} name="Tela2" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;
