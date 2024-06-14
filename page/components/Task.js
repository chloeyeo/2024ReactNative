import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from '../../page/components/IconButton';
import Icons from '../../page/components/Icons';

const Task = ({data, onDelete, onCheck}) => {
  return (
    <View style={{gap: 20, marginTop: 20}}>
      {[...data].reverse().map((item, index) => {
        return (
          <View style={styles.container} key={`listItem-${index}`}>
            <IconButton
              icon={item.completed ? Icons.checked : Icons.notChecked}
              onPress={() => onCheck(item.id)}
            />
            <Text style={{flex: 1, marginLeft: 10}}>{item.text}</Text>
            {/* only when item.completed is false then edit icon button appears */}
            {item.completed || (
              <IconButton icon={Icons.edit} onPress={() => alert('edit')} />
            )}

            <IconButton icon={Icons.delete} onPress={() => onDelete(item.id)} />
          </View>
        );
      })}
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
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
});
