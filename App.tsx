import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Header from './page/components/Header';
import Generator from './page/components/Generator';
import NumList from './page/components/NumList';

const App = () => {
  const [mainTitle, setMainTitle] = useState('my world');
  const [random, setRandom] = useState([100, 99]);
  const pressView = () => {
    alert('press');
  };
  const onAddRandom = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1; // 1 to 100 inclusive.
    // console.log(Math.random()); // any number between 0 and 1, e.g. 0.322124..
    setRandom([...random, randomNum]);
  };
  const onDeleteNum = (delIdx: number) => {
    const newArr = random.filter((num, index) => {
      return delIdx != index;
    });
    setRandom(newArr);
  };
  return (
    <View style={styles.container}>
      <Header title={mainTitle} onPressView={pressView} />
      {/* <View style={styles.btnCon}>
        <Button title="btn1" />
        <Button title="btn2" />
      </View>
      <Text>App</Text> */}
      <Generator add={onAddRandom} />
      <ScrollView>
        <NumList data={random} onDelete={onDeleteNum} />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  btnCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
