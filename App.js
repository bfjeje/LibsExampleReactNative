import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
import Tela3 from './src/Tela3';

const Stack = createBottomTabNavigator();

// O projeto anterior esta em App.js.backup.
function MyApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Tela1} name="Tela1" />
        <Stack.Screen component={Tela2} name="Tela2" />
        <Stack.Screen component={Tela3} name="Tela3" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;
