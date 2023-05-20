import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CardComponent = ({data}) => {
  const navigation = useNavigation();
  const navegar = () => {
    navigation.navigate('Tela2', {data: data});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={navegar}>
      <Image
        resizeMode="contain"
        source={{uri: data.image}}
        style={{width: 105, height: 150, borderRadius: 5}}
      />
      <View style={styles.subcontainer}>
        <Text style={styles.title}>{data.filme}</Text>
        <Text>{data.ano}</Text>
        <Text style={styles.genres}>{data.estilo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dfdfdf',
    marginHorizontal: 10,
    marginVertical: 30,
    flexDirection: 'row',
    padding: 5,
    borderRadius: 6,
    elevation: 10,
    borderWidth: 0.2,
  },
  subcontainer: {
    padding: 10,
    width: '70%',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'auto',
    color: 'black',
  },
  genres: {
    fontStyle: 'italic',
  },
});

export default CardComponent;
