import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const NumList = ({data, onDelete}) => {
  return (
    <View style={styles.numlist}>
      {data.map((item, idx) => {
        return (
          <TouchableOpacity key={`random-${idx}`} onPress={() => onDelete(idx)}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NumList;

const styles = StyleSheet.create({
  numlist: {
    paddingHorizontal: 16,
  },
  text: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 5,
  },
});
