import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const Tela1 = () => {
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('Tela2');
  };
  return (
    <View>
      <Text>Tela 1</Text>
      <Icon name="music" size={50} color="#f00" />
      <Button title="Ir Tela 2" onPress={navegar} />
    </View>
  );
};

export default Tela1;
