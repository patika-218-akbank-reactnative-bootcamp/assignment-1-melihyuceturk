import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Story = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
        {
          <View>
            <TouchableOpacity>
              <Image
                style={styles.story}
                source={require('../../assets/images/profile.png')}
              />
            </TouchableOpacity>
          </View>
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItem: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  story: {
    width: 70,
    height: 70,
    marginLeft: 5,
    borderWidth: 4,
    borderColor: '#ff8501',
    borderRadius: 70,
  },
});

export default Story;
