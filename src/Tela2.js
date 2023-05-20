import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tela2 = () => {
  const navigation = useNavigation();

  const voltar = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>Tela 2</Text>
      <Button title="Voltar" onPress={voltar} />
    </View>
  );
};

export default Tela2;
