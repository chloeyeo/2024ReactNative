import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const IconButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.touchWrap} onPress={onPress}>
      <View>
        <Image source={icon} style={{width: 30, height: 30, margin: 5}} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  touchWrap: {
    width: 30,
    height: 30,
    margin: 5,
  },
});
