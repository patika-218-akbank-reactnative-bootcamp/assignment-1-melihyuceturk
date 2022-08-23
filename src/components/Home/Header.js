import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.iconContainer}
            source={require('../../assets/images/add.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.iconContainer}
            source={require('../../assets/images/heart.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <Image
            style={styles.iconContainer}
            source={require('../../assets/images/msg.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItem: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    paddingTop: 10,
    paddingLeft: 5,
    marginVertical: 3,
  },
  logo: {
    width: 120,
    height: 80,
    resizeMode: 'contain',
  },
});

export default Header;
