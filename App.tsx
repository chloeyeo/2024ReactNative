import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Input from './page/components/Input';
import Task from './page/components/Task';

const App = () => {
  const initialList = [
    {id: '1', text: 'react native', completed: false},
    {id: '2', text: 'mysql', completed: true},
    {id: '3', text: 'docker', completed: false},
  ];
  const [todoList, setTodoList] = useState(initialList);

  const onChangeText = (text: String) => {
    // console.log(text);
  };
  const addTodoItem = () => {
    alert('add');
  };
  return (
    <View>
      <Text style={styles.title}>TODO-LIST</Text>
      <View style={{paddingHorizontal: 16, marginTop: 10, gap: 10}}>
        <Input onChangeText={onChangeText} />
        <Button title="add todo item" onPress={addTodoItem} />
        <ScrollView>
          <Task data={todoList} />
          <Task data={todoList} />
          <Task data={todoList} />
          <Task data={todoList} />
          <Task data={todoList} />
          <Task data={todoList} />
          <Task data={todoList} />
        </ScrollView>
      </View>
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
