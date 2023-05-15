import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [telefone, setTelefone] = useState('');

  const [name, setName] = useState('');
  useEffect(() => {
    AsyncStorage.getItem('@telefone')
      .then(res => {
        const temp = JSON.parse(res);
        setTelefone(temp.telefone);
        setName(temp.name);
      })
      .catch(err => {
        alert('Erro ao recuperar: ' + err);
      });
  }, []);
  const salvar = async function () {
    const user = {
      telefone: telefone,
      name: name,
    };

    AsyncStorage.setItem('@telefone', JSON.stringify(user))
      .then(res => {
        alert('ok');
      })
      .catch(error => {
        alert('Error ao salvar: ' + error);
      });
  };
  const apagar = function () {
    AsyncStorage.removeItem('@telefone')
      .then(res => {
        alert('Apagado com success');
      })
      .catch(erro => {
        alert('Erro ao apagar ' + erro);
      });
  };

  return (
    <View>
      <Text>Digite seu nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={txt => setName(txt)}
      />

      <Text>Digite seu telefone:</Text>

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
      <Button title="Apagar" onPress={apagar} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});

export default App;
