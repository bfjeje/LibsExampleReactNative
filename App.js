import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';

import Tela1 from './src/Tela1';
import Tab1 from './src/Tab1';
import Tab2 from './src/Tab2';

const StackNav = createStackNavigator();
const TabNav = createBottomTabNavigator();

// O projeto anterior esta em App.js.backup.
const Tabs = () => {
  return (
    <TabNav.Navigator>
      <TabNav.Screen
        options={{
          tabBarIcon: (color, size) => (
            <Icon name="music" size={size} color={color} />
          ),
          tabBarLabel: 'HOME',
        }}
        name="Tab1"
        component={Tab1}
      />
      <TabNav.Screen
        options={{
          tabBarIcon: (color, size) => (
            <Icon name="home" size={size} color={color} />
          ),
          tabBarLabel: 'HOME',
        }}
        name="Tab2"
        component={Tab2}
      />
    </TabNav.Navigator>
  );
};

function MyApp() {
  return (
    <NavigationContainer>
      <StackNav.Navigator>
        <StackNav.Screen component={Tela1} name="Tela1" />
        <StackNav.Screen component={Tabs} name="Tela2" />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default MyApp;
