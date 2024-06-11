import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TomImg from '../assets/image/tom.jpg';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={TomImg} style={{width: '100%'}} />
      <Button
        title="go to profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    gap: 10,
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
