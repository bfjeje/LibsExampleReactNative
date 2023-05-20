import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Tela2 = ({data}) => {
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('Tela2', {data: data});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navegar}>
      <Image
        resizeMode="contain"
        source={{uri: data.image}}
        style={{width: 100, height: 100}}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.filme}</Text>
        <Text>{data.ano}</Text>
        <Text>{data.estilo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    marginBottom: 10,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 6,
  },
  subcontainer: {
    marginStart: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Tela2;
