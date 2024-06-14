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
  const [todoText, setTodoText] = useState('');

  const onChangeText = (text: string) => {
    setTodoText(text);
  };
  const addTodoItem = () => {
    if (todoText.trim()) {
      const ID = Date.now().toString();
      const newTaskObject = {id: ID, text: todoText, completed: false};
      setTodoList([...todoList, newTaskObject]);
      setTodoText('');
    }
  };
  const deleteTask = (itemId: string) => {
    setTodoList(todoList.filter(task => task.id != itemId));
  };
  const onCheck = (itemId: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === itemId ? {...item, completed: !item.completed} : item,
      ),
    );
  };
  return (
    <View>
      <Text style={styles.title}>TODO-LIST</Text>
      <View style={{paddingHorizontal: 16, marginTop: 10, gap: 10}}>
        <Input onChangeText={onChangeText} todoText={todoText} />
        <Button title="add todo item" onPress={addTodoItem} />
        <ScrollView>
          <Task data={todoList} onDelete={deleteTask} onCheck={onCheck} />
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
