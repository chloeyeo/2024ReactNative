import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Ionic from 'react-native-vector-icons/Ionicons';

const Status = ({route, navigation}) => {
  const {name, image} = route.params;
  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);
    return () => {
      // if any error happens
      clearTimeout(timer);
    };
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          backgroundColor: 'gray',
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
            <View
              style={{
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                // borderRadius: 100,
                // backgroundColor: 'red',
              }}>
              <Image
                source={image}
                style={{width: '90%', height: '90%', borderRadius: 100}}
              />
            </View>

            <Text style={{fontSize: 15, color: 'white'}}>{name}</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionic name="close" style={{fontSize: 20, color: 'white'}} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={image} style={{width: '100%', height: 600}} />
    </SafeAreaView>
  );
};

export default Status;

const styles = StyleSheet.create({});
