import React from 'react';
import {Image, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Tela2 = () => {
  const route = useRoute();
  const data = route.params.data;

  return (
    <View style={{flexDirection: 'row', padding: 10}}>
      <Image
        source={{uri: data.image}}
        style={{width: '35%', height: 300, resizeMode: 'contain'}}
      />
      <View style={{flexDirection: 'column', width: '60%'}}>
        <Text style={{textAlign: 'auto'}}>Filme: {data.filme}</Text>
        <Text>Ano: {data.ano}</Text>
        <Text>Estilo: {data.estilo}</Text>
        <Text>Descrição: {data.descricao}</Text>
      </View>
    </View>
  );
};

export default Tela2;
