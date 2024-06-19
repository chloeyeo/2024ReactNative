import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import IconButton from '../../page/components/IconButton';
import Icons from '../../page/components/Icons';

const Task = ({item, onDelete, onCheck, onEdit}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);
  useEffect(() => {
    if (isEditing) {
      setText(item.text); // Reset the text state when edit mode is activated
    }
  }, [isEditing, item.text]);
  const _onSubmit = () => {
    setIsEditing(false);
    onEdit(item.id, text);
  };
  return isEditing ? (
    <>
      <TextInput
        style={styles.editInput}
        onChangeText={setText}
        value={text}
        onSubmitEditing={_onSubmit}
        onBlur={_onSubmit}
      />
    </>
  ) : (
    <View style={styles.container}>
      <IconButton
        icon={item.completed ? Icons.checked : Icons.notChecked}
        onPress={() => onCheck(item.id)}
      />
      <Text style={{flex: 1, marginLeft: 10}}>{item.text}</Text>
      {/* only when item.completed is false then edit icon button appears */}
      {item.completed || (
        <IconButton icon={Icons.edit} onPress={() => setIsEditing(true)} />
      )}

      <IconButton icon={Icons.delete} onPress={() => onDelete(item.id)} />
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    gap: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  editInput: {
    width: '100%',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    paddingHorizontal: 16,
    marginTop: 20,
  },
});
