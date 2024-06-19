import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Stories from '../page/Stories';

const Home = () => {
  return (
    <SafeAreaView>
      {/* statusbar must be used with safeareaview to change barstyle(light or dark) */}
      <StatusBar backgroundColor="pink" barStyle="dark-content" />
      {/* <View> is equivalent to a <div> tag */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
          backgroundColor: 'white',
        }}>
        <View>
          {/* fontSize from outer View does  NOT get inherited to Text */}
          <Text style={{fontSize: 25, fontWeight: 700}}>Instagram</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <FontAwesome
            name="plus-square-o"
            style={{fontSize: 24, marginRight: 10}}
          />
          <Feather name="navigation" style={{fontSize: 24}} />
        </View>
      </View>
      {/* scrollview from react native */}
      <ScrollView>
        {/* story */}
        <Stories />
        {/* post */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
