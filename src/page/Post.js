import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PostItem from './PostItem';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'John',
      postPersonImage: require('../../assets/image/userProfile.jpeg'),
      postImage: require('../../assets/image/post1.jpeg'),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: 'Tonny',
      postPersonImage: require('../../assets/image/profile5.jpeg'),
      postImage: require('../../assets/image/post2.jpeg'),
      likes: 345,
      isLiked: false,
    },
    {
      postTitle: 'Tom',
      postPersonImage: require('../../assets/image/profile4.jpeg'),
      postImage: require('../../assets/image/post3.jpeg'),
      likes: 734,
      isLiked: false,
    },
    {
      postTitle: 'React',
      postPersonImage: require('../../assets/image/profile3.jpeg'),
      postImage: require('../../assets/image/post4.jpeg'),
      likes: 875,
      isLiked: false,
    },
  ];
  return (
    <View>
      {postInfo.map((item, idx) => {
        return <PostItem key={`post-${idx}`} data={item} />;
      })}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({});
