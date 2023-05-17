import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tela1 = () => {
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('Tela2');
  };
  return (
    <View>
      <Text>Tela 1</Text>
      <Button title="Ir Tela 2" onPress={navegar} />
    </View>
  );
};

export default Tela1;
