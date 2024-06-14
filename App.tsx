import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import IconButton from './page/components/IconButton';
// import Icons from './page/components/Icons';
import Input from './page/components/Input';

const App = () => {
  const onChangeText = (text: String) => {
    console.log(text);
  };
  return (
    <View>
      <Text style={styles.title}>TODO-LIST</Text>
      <View style={{paddingHorizontal: 16, marginTop: 10}}>
        <Input onChangeText={onChangeText} />
      </View>
      {/* <IconButton icon={Icons.delete} onPress={() => alert('delete')} />
      <IconButton icon={Icons.edit} onPress={() => alert('edit')} />
      <IconButton icon={Icons.checked} onPress={() => alert('checked')} />
      <IconButton icon={Icons.notChecked} onPress={() => alert('notChecked')} /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'skyblue',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
