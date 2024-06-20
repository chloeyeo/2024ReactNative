import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Stories = () => {
  const navigation = useNavigation();
  const storyInfo = [
    {
      id: 1,
      name: 'My Story',
      image: require('../../assets/image/userProfile.jpeg'),
    },
    {
      id: 0,
      name: 'John',
      image: require('../../assets/image/profile1.jpeg'),
    },
    {
      id: 0,
      name: 'Yony',
      image: require('../../assets/image/profile2.jpeg'),
    },
    {
      id: 0,
      name: 'Daniel',
      image: require('../../assets/image/profile3.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'Sojeong',
      image: require('../../assets/image/profile4.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'Jaeho',
      image: require('../../assets/image/profile5.jpeg'),
    },
  ];
  return (
    <ScrollView horizontal={true} style={{paddingVertical: 10}}>
      {storyInfo.map((story, idx) => {
        return (
          <TouchableOpacity
            key={`story-${idx}`}
            onPress={() =>
              navigation.push('Status', {name: story.name, image: story.image})
            }>
            <View style={{position: 'relative'}}>
              {story.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    right: 1,
                    zindex: 1,
                  }}>
                  <Entypo
                    name="circle-with-plus"
                    style={{
                      fontSize: 20,
                      color: '#405de6',
                      backgroundColor: 'white',
                      borderRadius: 10,
                      overflow: 'hidden',
                    }}
                  />
                </View>
              ) : null}

              <View style={{padding: 8}}>
                <View
                  style={{
                    width: 60,
                    height: 60,
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: '#C13584',
                    borderRadius: 180,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={story.image}
                    style={{
                      width: '90%',
                      height: '90%',
                      borderRadius: 100,
                      resizeMode: 'cover',
                    }}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;

const styles = StyleSheet.create({});
