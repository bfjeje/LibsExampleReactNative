import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

const App = () => {
  const [telefone, setTelefone] = useState('');

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
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});

export default App;
