import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Registration');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require('../assets/lgoo.png')} style={styles.logo} />
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  logo: {
    width: 200,
    height: 200,
    //tintColor: '#fff',
  },
  title: {color: '#fff', fontSize: 20, fontWeight: '800', marginTop: 20},
});
