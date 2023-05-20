import React from 'react';
import {View, FlatList} from 'react-native';

import FlatComponent from './components/FlatComponent';

const Tela1 = () => {
  const data = [
    {
      key: '0',
      filme: 'Sciiby Doo',
      ano: 2020,
      estilo: 'Comedia',
      direcao: 'Tony Cervone',
      image: 'https://github.com/bfjeje.png',
      descricaco: 'Descricao',
    },
    {
      key: '1',
      filme: 'Doce atardecer',
      ano: 2021,
      estilo: 'Drama',
      direcao: 'Jacke',
      image: 'https://github.com/bfjeje.png',
      descricaco: 'Descricao2',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <FlatComponent data={item} />}
      />
    </View>
  );
};

export default Tela1;
