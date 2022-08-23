import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Post = () => {
  return (
    <ScrollView>
      <Pressable>
        <View>
          <Image
            style={styles.post}
            source={require('../../assets/images/post.jpg')}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/heart.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/comment.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/dm.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.like}>
            <Image
              style={styles.like}
              source={require('../../assets/images/profile.png')}
            />
            <Image
              style={styles.like}
              source={require('../../assets/images/profile.png')}
            />
            <Image
              style={styles.like}
              source={require('../../assets/images/profile.png')}
            />
            <Text>123456 </Text>
          </View>
          <Text style={styles.text}>@userTag </Text>
          <Text style={styles.text1}>userCaption</Text>
        </View>
        <View>
          <Image
            style={styles.post}
            source={require('../../assets/images/post.jpg')}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/heart.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/comment.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/dm.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>@userTag </Text>
          <Text style={styles.text1}>userCaption </Text>
        </View>
        <View>
          <Image
            style={styles.post}
            source={require('../../assets/images/post.jpg')}
          />
          <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/heart.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/comment.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.iconContainer}
                source={require('../../assets/images/dm.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>@userTag </Text>
          <Text style={styles.text1}>userCaption </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  post: {
    width: '100%',
    height: 350,
    resizeMode: 'stretch',
    marginVertical: 15,
  },
  iconContainer: {
    width: 25,
    height: 25,
    justifyContent: 'space-between',
    alignItem: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    display: 'flex',
  },
  text: {
    paddingTop: 10,
    textAlign: 'left',
    fontSize: 18,
    color: 'black',
    padding: 10,
    fontWeight: 'bold',
  },
  text1: {
    paddingTop: 0,
    textAlign: 'left',
    fontSize: 15,
    color: 'black',
    padding: 10,
  },
  like: {
    width: 15,
    height: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: 'white',
    display: 'flex',
    textAlignment: 'center',
  },
});

export default Post;
