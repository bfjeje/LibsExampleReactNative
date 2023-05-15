import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('@telefone')
      .then(res => {
        setTelefone(res);
      })
      .catch(err => {
        alert('Erro ao recuperar: ' + err);
      });
  }, []);
  const salvar = async function () {
    AsyncStorage.setItem('@telefone', telefone)
      .then(res => {
        alert('ok');
      })
      .catch(error => {
        alert('Error ao salvar: ' + error);
      });
  };

  return (
    <View>
      <Text>Digite seu telefone</Text>

      <TextInputMask
        type={'cel-phone'}
        style={styles.input}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
        value={telefone}
        onChangeText={txt => setTelefone(txt)}
      />
      <Text>{telefone}</Text>
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});

export default App;
