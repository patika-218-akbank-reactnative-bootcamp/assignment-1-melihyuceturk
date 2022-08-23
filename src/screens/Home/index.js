import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../../components/Home/Header';
import Story from '../../components/Home/Story';
import Post from '../../components/Home/Post';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Story />
      <Post />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Home;
