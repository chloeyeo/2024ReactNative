import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = ({title, onPressView}) => {
  return (
    <TouchableOpacity
      onPress={onPressView}
      onLongPress={() => alert('long press')}
      // onPressIn={() => alert('press in')}
      // onPressOut={() => alert('press out')}
    >
      <View style={styles.header}>
        <Text>Header: {title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
});
