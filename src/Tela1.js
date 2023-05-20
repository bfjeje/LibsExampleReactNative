import React, {useState} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tela1 = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('Tela2', {name: name, idade: 32});
  };
  return (
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput style={styles.input} value={name} onChangeText={txt => setName(txt)} />
      <Button title="Ir Tela 2" onPress={navegar} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});

export default Tela1;
