import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';

const PostItem = ({data}) => {
  const [like, setLike] = useState(data.isLiked);

  return (
    <View>
      {/* title start*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <TouchableOpacity>
            <Image
              source={data.postPersonImage}
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text>{data.postTitle}</Text>
          </View>
        </View>
        <Feather
          name="more-vertical"
          style={{
            fontSize: 20,
          }}
        />
      </View>
      {/* title end*/}
      <View>
        <Image
          source={data.postImage}
          style={{
            width: '100%',
            height: 400,
          }}
        />
      </View>
      {/* like start*/}
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 8,
            }}>
            <TouchableOpacity>
              <AntDesign
                name={like ? 'heart' : 'hearto'}
                style={{
                  fontSize: 20,
                }}
                onPress={() => setLike(!like)}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionic
                name="chatbubble-outline"
                style={{
                  fontSize: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          <Feather name="bookmark" style={{fontSize: 20}} />
        </View>
      </View>
      {/* like end*/}
      <View style={{paddingHorizontal: 15}}>
        <Text>좋아요{like ? data.likes + 1 : data.likes}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 14, paddingVertical: 5}}>
          게시글 설명글 입니다.
        </Text>
        <Text style={{opacity: 0.4, paddingVertical: 2, marginVertical: 5}}>
          댓글모두보기
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{gap: 16, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={data.postPersonImage}
              style={{
                width: 25,
                height: 25,
                borderRadius: 100,
                backgroundColor: 'orange',
              }}
            />
            <TextInput placeholder="댓글달기..." style={{opacity: 0.5}} />
          </View>
          <View>
            <Text style={{color: '#0095f6'}}>게시</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostItem;
