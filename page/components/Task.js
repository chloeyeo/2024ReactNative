import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconButton from '../../page/components/IconButton';
import Icons from '../../page/components/Icons';

const Task = ({data}) => {
  return (
    <View style={{gap: 20, marginTop: 20}}>
      {data.map((item, index) => {
        return (
          <View style={styles.container} key={`listItem-${index}`}>
            {/* <IconButton icon={Icons.checked} onPress={() => alert('checked')} /> */}
            <IconButton
              icon={Icons.notChecked}
              onPress={() => alert('notChecked')}
            />
            <Text style={{flex: 1, marginLeft: 10}}>{item.text}</Text>
            <IconButton icon={Icons.edit} onPress={() => alert('edit')} />
            <IconButton icon={Icons.delete} onPress={() => alert('delete')} />
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
