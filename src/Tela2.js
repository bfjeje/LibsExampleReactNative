import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Tela2 = () => {
  const route = useRoute();

  const name = route.params.name;
  const idade = route.params.idade;

  return (
    <View>
      <Text>Seja Bem Vindo, {name}! Parabens pelos seus {idade} anos!</Text>
    </View>
  );
};

export default Tela2;
