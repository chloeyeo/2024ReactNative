import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Input from './page/components/Input';
import Task from './page/components/Task';
import IconButton from './page/components/IconButton';
import Icons from './page/components/Icons';

// REACT-NATIVE IMPLEMENTATION OF A TODO-LIST WITH CRUD FUNCTIONS IMPLEMENTED
// create,read,update,delete

const App = () => {
  const initialList = [
    {id: '1', text: 'react native', completed: false},
    {id: '2', text: 'mysql', completed: true},
    {id: '3', text: 'docker', completed: false},
  ];
  const [todoList, setTodoList] = useState(initialList);
  // const [sortedTodoList, setSortedTodoList] = useState(initialList);
  const [todoText, setTodoText] = useState('');
  // const [clickedSort, setClickedSort] = useState(false);
  const [sortModalOn, setSortModalOn] = useState(false);

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

  // const onSort = () => {
  //   setClickedSort(!clickedSort);
  //   let tempList = [...todoList];
  //   if (clickedSort) {
  //     tempList.sort((a, b) => a.text.localeCompare(b.text));
  //     setSortedTodoList(tempList);
  //   }
  // };

  const AppButton = ({onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.btnCont}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.title}>TODO-LIST</Text>
      <View style={{paddingHorizontal: 16, marginTop: 10, gap: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
            paddingHorizontal: 40,
          }}>
          <Input onChangeText={onChangeText} todoText={todoText} />
          {/* Custom Button */}
          <AppButton title="Add" onPress={addTodoItem} />
        </View>

        {/* <Button title="add todo item" onPress={addTodoItem} /> */}
        <View style={{flexDirection: 'row'}}>
          <IconButton
            icon={Icons.sort}
            onPress={() => setSortModalOn(!sortModalOn)}></IconButton>
          {sortModalOn && (
            <View style={{flexDirection: 'row'}}>
              <IconButton
                icon={Icons.sortByAlpha}
                onPress={() => alert('sortByAlpha')}></IconButton>
              <IconButton
                icon={Icons.sortByRecency}
                onPress={() => alert('sortByRecency')}></IconButton>
            </View>
          )}
        </View>

        {/* {sortedTodoList !== initialList ? (
          <ScrollView>
            {[...sortedTodoList].map((item, idx) => {
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
        ) : (
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
        )} */}
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
  btnText: {color: 'white', fontWeight: 'bold'},
  btnCont: {backgroundColor: 'skyblue', padding: 16, borderRadius: 10},
});
