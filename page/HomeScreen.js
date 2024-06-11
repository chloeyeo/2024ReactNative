import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <Text>HomeScreen</Text> */}
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
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
