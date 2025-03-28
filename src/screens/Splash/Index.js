import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import FastImage from 'react-native-fast-image';

const {height, width} = Dimensions.get('window');

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 3000);
  }, [navigation]);
  return (
    <View>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <FastImage
        source={require('../../assets/images/Splashscreen.png')}
        style={{height: height, width: width}}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
