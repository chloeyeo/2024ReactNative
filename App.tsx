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
    setTodoList(todoList.filter(task => task.id !== itemId));
  };

  const updateTask = (itemId: string, newText: string) => {
    setTodoList(
      todoList.map(item =>
        item.id === itemId ? {...item, text: newText} : item,
      ),
    );
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
          {[...todoList].reverse().map((item, idx) => {
            return (
              <Task
                onDelete={deleteTask}
                onCheck={onCheck}
                key={`taskItem-${idx}`}
                item={item}
                onEdit={updateTask}
              />
            );
          })}
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
