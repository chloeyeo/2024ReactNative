import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

// ctrl+f then ctrl+h to change all paths one by one
const SearchContent = ({getData}) => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../../assets/image/post1.jpeg'),
        require('../../assets/image/post2.jpeg'),
        require('../../assets/image/post3.jpeg'),
        require('../../assets/image/post4.jpeg'),
        require('../../assets/image/post5.jpeg'),
        require('../../assets/image/post6.jpeg'),
      ],
    },
    {
      id: 1,
      images: [
        require('../../assets/image/post7.jpeg'),
        require('../../assets/image/post8.jpeg'),
        require('../../assets/image/post9.jpeg'),
        require('../../assets/image/post10.jpeg'),
        require('../../assets/image/post11.jpeg'),
        require('../../assets/image/post12.jpeg'),
      ],
    },
    {
      id: 2,
      images: [
        require('../../assets/image/post13.jpeg'),
        require('../../assets/image/post14.jpeg'),
        require('../../assets/image/post15.jpeg'),
      ],
    },
  ];
  return (
    <View>
      {searchData.map((item, idx) => {
        return (
          <View
            key={`search item - ${idx}`}
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}>
            {item.images.map((image, imgIdx) => {
              return (
                <TouchableOpacity
                  key={`image item - ${idx} - ${imgIdx}`}
                  style={{paddingBottom: 2, width: '33%'}}
                  onPressIn={() => getData(image)}
                  onPressOut={() => getData(null)}>
                  <Image source={image} style={{width: '100%', height: 150}} />
                </TouchableOpacity>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default SearchContent;
