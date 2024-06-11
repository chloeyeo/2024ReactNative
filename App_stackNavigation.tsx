// rnfes + tab (react native snippets extension)
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './page/HomeScreen';
import ProfileScreen from './page/ProfileScreen';

const Stack = createNativeStackNavigator();

// Stack.screen and Stack.navigator
// to use a navigator, you need a NavigationContainer on the outside
// press 'r' twice on phone screen to refresh

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My Home', headerTitleAlign: 'center'}}
        /> */}
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: 'pink'},
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'brown',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{
          //   title: 'My Home',
          //   headerTitleAlign: 'left',
          //   //headerShown: false,
          // }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
