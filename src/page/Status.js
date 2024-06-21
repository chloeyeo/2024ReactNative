import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
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

  // animate start
  // useRef used for static, non changing values
  const progress = useRef(new Animated.Value(0)).current; // the first value of progerss is the 'opacity' value.
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
  }, []);
  const progressAnimation = progress.interpolate({
    inputRange: [0, 5], // 0 to 5
    outputRange: ['10%', '100%'], // 10% to 100%
  });
  // animate end
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View
        style={{
          height: 4,
          width: '100%',
          borderWidth: 1,
          backgroundColor: 'gray',
          position: 'absolute',
          top: 0,
          zindex: 1,
        }}>
        <Animated.View
          style={{
            backgroundColor: 'red',
            width: progressAnimation,
            height: '100%',
          }}
        />
      </View>
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
