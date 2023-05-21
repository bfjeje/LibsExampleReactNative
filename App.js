import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

import Tela1 from './src/Tela1';
import Tela2 from './src/Tela2';
import {createDrawerNavigator} from '@react-navigation/drawer';

const StackNav = createDrawerNavigator();

// TODO: IMPORTANTE: Ver outras coisas nos commits do Git

function MyApp() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen component={Tela1} name="Tela1" />
        <StackNav.Screen component={Tela2} name="Tela2" />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;
